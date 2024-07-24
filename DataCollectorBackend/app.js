const config = require("./config.json");
const express = require('express');
const fs = require("fs");

// START DATA GATHER AND SAVE

let history = [];

async function getAndSaveData() {
  const apiResponse = await fetch(config.statsCollector.akvoradoAPIBaseURL + "/v0/console/widget/top/etype?0");
  const data = await apiResponse.json();
  let IPv6Percent = 0;
  let IPv4Percent = 0;
  const top = data.top;
  for (const eType of top) {
    if (eType.name === "IPv4") {
      IPv4Percent = parseFloat(eType.percent.toFixed(3));
    }
    if (eType.name === "IPv6") {
      IPv6Percent = parseFloat(eType.percent.toFixed(3));
    }
  }
  const now = Math.floor(Date.now());
  history.push({ time: now, ipv4: IPv4Percent, ipv6: IPv6Percent });
  writeHistory();
}

function readHistory() {
  const tempHistory = fs.readFileSync("./history.json");
  history = JSON.parse(tempHistory);
  return history;
}

function writeHistory() {
  history = history.slice(-1 * config.statsCollector.statsDataPoints);
  fs.writeFileSync("./history.json", JSON.stringify(history));
  return true;
}

async function startUp() {
  await readHistory();
  getAndSaveData();
  setInterval(() => {
    getAndSaveData();
  }, config.statsCollector.dataCollectionTimeMS);
}

startUp();

// END DATA GATHER AND SAVE

// START WEB SERVER

const app = express();

app.get("/*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(history);
});

app.listen(config.web.port, () => {
  console.log("Listening on ", config.web.port)
});

// END WEB SERVER
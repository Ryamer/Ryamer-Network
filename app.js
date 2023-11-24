const axios = require("axios");
const express = require('express');
const fs = require("fs");

// START DATA GATHER AND SAVE

let history = [];

async function getAndSaveData() {
  axios("https://akvorado.ryamer.com/api/v0/console/widget/top/etype?0").then((res) => {
    const data = res.data;
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
  });
}

function readHistory() {
  const tempHistory = fs.readFileSync("./history.json");
  history = JSON.parse(tempHistory);
  return history;
}

function writeHistory() {
  history = history.slice(-4032)
  fs.writeFileSync("./history.json", JSON.stringify(history));
  return true;
}

async function startUp() {
  await readHistory();
  getAndSaveData();
  setInterval(() => {
    getAndSaveData();
  }, 1000 * 60 * 10);
}

startUp();

// END DATA GATHER AND SAVE

// START WEB SERVER

const app = express();

app.get("/*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(history);
});

app.listen(5002, () => {

});

// END WEB SERVER
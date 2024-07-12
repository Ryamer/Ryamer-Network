---
sidebar_position: 2
---

# BGP Action Communities

#### We provide communities that you can use to make changes within our network.

#### Please note that we only support BGP Large Communities.


###### Per ASN
These communities control how we export routes to other ASNs:

|        |      |          | Description                     |
|--------|------|----------|---------------------------------|
| 400587 | 1000 | Peer ASN | Do not advertise to Peer ASN    |
| 400587 | 1001 | Peer ASN | Prepend once to peer asn        |
| 400587 | 1002 | Peer ASN | Prepend twice to peer asn       |
| 400587 | 1003 | Peer ASN | Prepend three times to peer asn |


###### Per Internet Exchange
These communities control how we export routes at Internet Exchanges:

|        |      |                                           | Description               |
|--------|------|-------------------------------------------|---------------------------|
| 400587 | 2000 | [IX ID](/docs/BGP%20Communities/IX%20IDs) | Do not advertise to IX    |
| 400587 | 2001 | [IX ID](/docs/BGP%20Communities/IX%20IDs) | Prepend once to IX        |
| 400587 | 2002 | [IX ID](/docs/BGP%20Communities/IX%20IDs) | Prepend twice to IX       |
| 400587 | 2003 | [IX ID](/docs/BGP%20Communities/IX%20IDs) | Prepend three times to IX |


###### Per Site
These communities control how we export routes at out sites:

|        |      |                                               | Description                 |
|--------|------|-----------------------------------------------|-----------------------------|
| 400587 | 3000 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Do not advertise at site    |
| 400587 | 3001 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Prepend once at site        |
| 400587 | 3002 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Prepend twice tat site      |
| 400587 | 3003 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Prepend three times at site |

###### Global
These communities control how we export routes everywhere:

|        |       |     | Description                                                        |
|--------|-------|-----|--------------------------------------------------------------------|
| 400587 | 10000 | 0   | Do not advertise                                                   |
| 400587 | 10000 | 1   | Prepend once                                                       |
| 400587 | 10000 | 2   | Prepend twice                                                      |
| 400587 | 10000 | 3   | Prepend three                                                      |
| 400587 | 10000 | 666 | Blackhole(supports IPv4 from /24 to /32 and IPv6 from /48 to /128) |

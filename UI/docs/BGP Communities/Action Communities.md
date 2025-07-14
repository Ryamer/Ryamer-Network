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
| 400587 | 1001 | Peer ASN | Prepend once to peer ASN        |
| 400587 | 1002 | Peer ASN | Prepend twice to peer ASN       |
| 400587 | 1003 | Peer ASN | Prepend three times to peer ASN |


###### Per Internet Exchange

Please use the Per ASN with the [Peer ASN](/docs/BGP%20Communities/IX%20IDs) being the IX's route server ASN to control advertisements towards IX RS.


###### Per Site
These communities control how we export routes at our sites:

|        |      |                                               | Description                 |
|--------|------|-----------------------------------------------|-----------------------------|
| 400587 | 3000 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Do not advertise at site    |
| 400587 | 3001 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Prepend once at site        |
| 400587 | 3002 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Prepend twice at site       |
| 400587 | 3003 | [Site ID](/docs/BGP%20Communities/Site%20IDs) | Prepend three times at site |


###### Local Preference
These communities control how we setup local preference. You can view our default local preference [here](/docs/BGP%20Communities/Peer%20Types).

|        |      |     | Local Pref | Description                     |
|--------|------|-----|------------|---------------------------------|
| 400587 | 4000 | 50  | 50         | Lower than transit              |
| 400587 | 4000 | 80  | 80         | Lower than IX Route Server Peer |
| 400587 | 4000 | 140 | 140        | Lower Than IX Public Peer       |
| 400587 | 4000 | 160 | 160        | Lower Than Public Peer          |
| 400587 | 4000 | 210 | 210        | Higher than customer            |



###### Global
These communities control how we export routes everywhere:

|        |       |     | Description                                                        |
|--------|-------|-----|--------------------------------------------------------------------|
| 400587 | 10000 | 0   | Do not advertise                                                   |
| 400587 | 10000 | 1   | Prepend once                                                       |
| 400587 | 10000 | 2   | Prepend twice                                                      |
| 400587 | 10000 | 3   | Prepend three                                                      |
| 400587 | 10000 | 666 | Blackhole(supports IPv4 from /24 to /32 and IPv6 from /48 to /128) |

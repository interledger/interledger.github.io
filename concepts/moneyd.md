# moneyd
[`moneyd`](https://github.com/interledgerjs/moneyd) is a daemon that enables you to connect to an Interledger node, 
and to send or receive value in the form of ILP packets to or from that node. `moneyd` functions like your 
home wifi router in the sense that both transfer packets and connect to an upstream network. However, `moneyd` uses 
[Interledger packets](https://github.com/interledger/rfcs/blob/master/0027-interledger-protocol-4/0027-interledger-protocol-4.md) 
which represent value and data, rather than just data.

`moneyd` uses uplinks to communicate with other nodes in an ILP network. An uplink allows moneyd to send messages 
(ILP packets) to a parent node, and to send/receive settlements (real money) with that parent connector. 

When you run `moneyd` using an uplink, it:
* Starts an Interledger node
* Listens on a local port
* Connects to a node on the Interledger network
* Receives ILP packets from your application and routes them to the connecting node
* Receives ILP packets from the connecting node and routes them to your application
 
NOTE: You *do not* need an uplink if you run `moneyd` in [local-net](https://github.com/interledgerjs/moneyd#local-test-network) 
mode because you are only sending/receiving value between senders and receivers running locally on your machine.
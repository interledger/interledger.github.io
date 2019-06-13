## SPSP
[SPSP](https://github.com/interledgerjs/ilp-protocol-spsp) (Simple Payment Setup Protocol) is an application layer protocol, which uses HTTP endpoints to securely exchange 
payment details, and then allows the user to send one or more Interledger packets. SPSP provides lightweight client-server 
APIs to send and receive payments. An [SPSP client](https://github.com/interledgerjs/ilp-spsp) sends a payment, and 
an [SPSP server](https://github.com/interledgerjs/ilp-spsp-server) receives a payment. An SPSP server must 
be connected to an Interledger node to receive payments. 

When you start an SPSP server, it:
* Connects to an Interledger node
* Creates a receiver
* Opens a port to listen to
* Generates a payment pointer<br/>
A payment pointer is like an email address, but for money. An SPSP client uses a recipient's payment pointer to send money.
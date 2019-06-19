## SPSP
[SPSP](https://github.com/interledgerjs/ilp-protocol-spsp) (Simple Payment Setup Protocol) is an application layer protocol, 
which uses HTTPS endpoint to securely exchange payment details, and then allows the user to send and receive value 
over Interledger. SPSP provides lightweight client-server APIs to send and receive value. 

An SPSP client sends (pay) value, and an SPSP server receives value. If *pull* value is supported,
a server can send value and a client can receive (pull) value. 

When you start an SPSP server, it:
* Connects to a `moneyd` instance
* Creates a receiver
* Opens a port to listen to
* Generates a payment pointer<br/>
A payment pointer is like an email address, but for sending/receiving value. 

When you start an SPSP client, it:
* Uses the recipient's payment pointer to directly obtain destination account and secret from the receiver
* Connects with moneyd using the destination account and secret.
* Sends value over the connection

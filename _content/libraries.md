## Wallets

### Rafiki Money
A user-facing demo wallet that can make Interledger payments to a variety of peers (supports USD, testnet only).
Sign up at [https://rafiki.money](https://rafiki.money).

### Xpring Wallet
A user-facing demo wallet that can make Interledger payments to a variety of peers (supports XRP, testnet only).
Sign up at [https://xpring.io](https://xpring.io). 

## Connectors

### Java Connector
An Interledger [Connector implemented in Java][1]. This project is actively maintained by [Xpring](https://xpring.io) 
and recommended for new production deployments. 

### Rust Connector
An Interledger [Connector implemented in Rust][2]. This project is not actively maintained, but has a robust feature-set
and is easy to use.

### Javascript Connector
An Interledger [Connector implemented in Javascript][3]. This project has been 
battle-tested in various production deployments.

## Libraries

### Interledger Java
Build ILP applications that send and receive payments natively in Java using [Quilt][4], which is a Java implementation of Interledger.

### Interledger RS
Build ILP applications that send and receive payments natively in Rust using [interledger.rs][5], which is a Rust implementation of Interledger.

### ILP-over-HTTP
Implementations of [ILP-over-HTTP][6], which is a bilateral communications protocol for server-to-server ILP connections.

* **Java**: [ILP-over-HTTP Link][7]
* **Rust**: [ILP-over-HTTP][8]
* **Javascript**: [ilp-plugin-http][9]
 
### Interledger STREAM
Reliably send packetized money and data over Interledger using [STREAM][10].

* **Java**: [STREAM Java][11]
* **Rust**: [STREAM RS][12]
* **Javascript**: [STREAM JS][13]

[1]: https://connector.interledger4j.dev
[2]: http://interledger.rs
[3]: https://github.com/interledgerjs/ilp-connector
[4]: https://www.hyperledger.org/projects/quilt
[5]: http://interledger.rs/
[6]: https://github.com/interledger/rfcs/blob/master/0035-ilp-over-http/0035-ilp-over-http.md
[7]: https://github.com/hyperledger/quilt/tree/master/link-parent/link-ilp-over-http
[8]: https://github.com/interledger-rs/interledger-rs/tree/master/crates/interledger-http
[9]: https://github.com/interledgerjs/ilp-plugin-http
[10]: https://github.com/interledger/rfcs/blob/master/0029-stream/0029-stream.md
[11]: https://github.com/hyperledger/quilt/tree/master/stream-parent
[12]: https://github.com/interledger-rs/interledger-rs/tree/master/crates/interledger-stream
[13]: https://github.com/interledgerjs/ilp-protocol-stream

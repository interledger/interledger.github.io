## Connectors

### Java Connector
An Interledger [Connector implemented in Java][1]. This project is actively maintained by [Xpring](https://xpring.io) 
and recommended for new production deployments. 

### Rust Connector
An Interledger [Connector implemented in Rust][2]. This project is not actively maintained, but has a robust feature-set
and is easy to use.

### Javascript Connector
An Interledger [Connector implemented in Javascript][3]. This project is not actively maintained, but has been 
battle-tested in various production deployments.

## Libraries

### Interledger Java
Build ILP applications natively in Java using [Quilt][4], which is a Java implementation of all Interledger primitives.

### Interledger RS
Build ILP applications natively in Rust using [interledger.rs][5], which is a Rust implementation of all Interledger primitives.

### Interledger JS
Build ILP applications natively in Javascript using [InterledgerJS][6], which is a Javascript implementation of all Interledger primitives.

## Tools

### SPSP

Build Interledger payments into your apps with the [ILP SPSP Client][7]. This library can connect to any SPSP receiver for account discovery and payment detail negotation. For more information on how to use SPSP, read ["SPSP: Simple Payment Setup Protocol"][8] on the Interledger Blog. 

### Koa ILP

If you use the [Koa framework][9] in Node.js, this library will allow you to monetize your API in only a few lines of code. For more information, [check out our Github][10] and [our blog post about it.][11]

### ILP Fetch

You can use [ILP Fetch][12] as a client to HTTP-ILP. ILP Fetch follows the [Fetch API][13], but allows the client to send payments. You can use it to interact with paid APIs on Interledger.

### Moneyd XRP

[Moneyd-XRP][14] allows you to connect to the Interledger network via XRP. It can be used on the livenet or the testnet with minimal configuration. We also have "Moneyd-ETH" and "Moneyd-Lightning" in the works.

[1]: https://connector.interledger4j.dev
[2]: http://interledger.rs
[3]: https://github.com/interledgerjs/ilp-connector
[4]: https://www.hyperledger.org/projects/quilt
[5]: http://interledger.rs/
[6]: https://github.com/interledgerjs/
[7]: https://github.com/interledgerjs/ilp-protocol-spsp
[8]: https://medium.com/interledger-blog/spsp-simple-payment-setup-protocol-2028292e6925
[9]: http://koajs.com/
[10]: https://github.com/interledgerjs/koa-ilp
[11]: https://medium.com/interledger-blog/http-ilp-paid-api-calls-with-interledger-fda53643a2eb
[12]: https://github.com/interledgerjs/ilp-fetch
[13]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[14]: https://github.com/interledgerjs/moneyd-xrp

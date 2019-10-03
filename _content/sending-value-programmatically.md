## Before you begin

This tutorial assumes that you’re running `moneyd` and SPSP server on your computer. 
If you're not set up, you can learn how to [set up moneyd and SPSP here.](getting-started.html)
    

## Sending value

To send value programmatically, you need to install `ilp-protocol-spsp` and `ilp-plugin` modules. 
Open a command line and use the following commands:

```shell
$ mkdir ilp-getting-started
$ cd ilp-getting-started
$ npm init
$ npm install --save ilp-protocol-spsp ilp-plugin
```

Now, using an editor of your choice, create a `index.js` file and add the following code snippet:

```js
const plugin = require('ilp-plugin')()
const SPSP = require('ilp-protocol-spsp')

async function run () {
  console.log('paying http://localhost:8080...')
  await SPSP.pay(plugin, {
    receiver: 'http://localhost:8080',
    sourceAmount: '10'
  })
  console.log('paid!')
}

run().catch(e => console.error(e))
```

Finally, run the code using the command:

```shell
$ node index.js
```

You should see `paid!` on the sending terminal and `got packet for 10 units` on the receiving terminal confirming 
that you have successfully sent and received value through the Interledger protocol.

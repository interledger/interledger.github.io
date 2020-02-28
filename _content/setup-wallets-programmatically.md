## Set up and use Interledger accounts programmaticallly

To get started using Interledger, this tutorial walks through using a test network programmatically. A test network uses fake money, rather than transferring real value. This Interledger testnet is currently maintained by teams at [Xpring](https://xpring.io/) and [Coil](https://coil.com/), but anyone can join.

Although this tutorial uses test XRP for simplicity, Interledger can handle transactions involving any currency pairs, as described in [Interledger Overview](overview.html).

You will:

1. [Create an account](#1-create-an-account) using the Xpring connector to the ILP testnet.
2. [Add test XRP](#2-add-test-xrp-to-your-account) to your account using the Xpring "rainmaker", which is a "faucet" for dispensing test funds.
3. [Check your account balance](#3-check-your-account-balance).
4. [Send test XRP](#4-send-test-xrp-to-another-payment-pointer) to another payment pointer.
5. [Receive test XRP](#5-receive-test-xrp).

To do the same with a GUI-based interface, refer to [Set Up Interledger accounts with a user interface](setup-wallets.html).

### 1. Create an account

To create a new account, you send an HTTP request. For this tutorial, we'll use curl on the command line to make requests to the API, but you can use an HTTP client library in any language. Here's how to create an account on the command line.

```
> curl --location --request POST 'https://hermes-rest.ilpv4.dev/accounts' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
  "assetCode": "XRP",
  "assetScale": "6"
}'
```

This request returns:
- A payload that contains your `accountId`
- An auth token which you use to authenticate to the connector
- A [payment pointer](https://paymentpointers.org/) that can be used to receive value in your test account.

Here's an example response payload for reference. Keep track of the generated `accountId` at `accountId`, and your generated auth token at `"customSettings"` -> `"ilpOverHttp.incoming.simple.auth_token"`, for use in subsequent steps.

```text
{
    "accountId": "user_qqGV8nij",
    "accountRelationship": "CHILD",
    "assetCode": "XRP",
    "assetScale": "6",
    "maximumPacketAmount": null,
    "linkType": {},
    "connectionInitiator": true,
    "isInternal": false,
    "sendRoutes": true,
    "receiveRoutes": false,
    "balanceSettings": {
        "minBalance": null,
        "settleThreshold": null,
        "settleTo": "0"
    },
    "rateLimitSettings": {
        "maxPacketsPerSecond": null
    },
    "settlementEngineDetails": null,
    "customSettings": {
        "ilpOverHttp.outgoing.url": "https://money.ilpv4.dev/ilp",
        "ilpOverHttp.incoming.auth_type": "SIMPLE",
        "ilpOverHttp.incoming.simple.auth_token": "JQBzzLkbslrsT",
        "ilpOverHttp.outgoing.simple.auth_token": "enc:jks:crypto/crypto.p12:secret0:1:aes_gcm:AAAADDBa7b-nDvY2ydWysQQMoZL7yIOmK-7-3kLiMc9pxhzPw1Ei68OpwcZu6W-j",
        "ilpOverHttp.outgoing.auth_type": "SIMPLE"
    },
    "paymentPointer": "$money.ilpv4.dev/user_qqGV8nij",
    "parentAccount": false,
    "childAccount": true,
    "peerAccount": false,
    "peerOrParentAccount": false
}
```

### 2. Add test XRP to your account

The Xpring testnet used in this tutorial has a rainmaker account that you can use to populate your account with test XRP, so you can then use this account to send test XRP to other accounts. To add test XRP to your account, use the following command. Make sure to replace `{your-account-id}` with your own `accountId` created in Step 1.

```
> curl --location --request POST \
  'https://hermes-rest.ilpv4.dev/accounts/{your-account-id}/money'
```

### 3. Check your account balance

To see how much money is in your account, use the following call. Make sure to replace **`{auth_token}`** above with the auth token returned when you generated your account.

```
> curl --location --request GET 'https://hermes-rest.ilpv4.dev/accounts/{your-account-id}/balance' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {auth_token}' \
```

This request will return a JSON response similar to the following:

```text
{
    "assetCode": "XRP",
    "assetScale": "6",
    "accountBalance": {
        "accountId": "user_qqGV8nij",
        "netBalance": "0",
        "clearingBalance": "0",
        "prepaidAmount": "0"
    }
}
```

### 4. Send test funds to another payment pointer

You can use your account to send test funds to a different payment pointer. This example uses a destination payment pointer on [https://rafiki.money](https://rafiki.money). Substitute your `accountId` from Step 1. You can change the destination payment pointer if you prefer.

```
> curl --location --request POST 'https://hermes-rest.ilpv4.dev/accounts/{your-account-id}/pay' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {auth_token}' \
--data-raw '{
  "amount": "10",
  "destinationPaymentPointer": "$rafiki.money/p/dfuelling"
}'
```

This request returns a JSON response similar to the following:

```text
{
    "originalAmount": "10",
    "amountDelivered": "10",
    "amountSent": "10",
    "successfulPayment": true
}
```

- **`originalAmount`** is the amount that you wanted to send.

- **`amountDelivered`** is the amount received by your friend, specified in the asset and units used by your friend.

- **`amountSent`** is the amount you sent to your friend, specified in your asset and units.

In this example, all three values are the same.

### 5. Receive test funds

Set up a Xpring testnet account and a rafiki.money account so you have two destination pointers to work with. Experiment with sending and receiving payments in both directions. Check your balance to make sure that the money has arrived in your account.

### Combine GUI and programmatic interaction

If you log in to your accounts at [rafiki.money](https://rafiki.money) and [https://wallet.ilpv4.dev](https://wallet.ilpv4.dev), you can directly see the results of the commands you perform.

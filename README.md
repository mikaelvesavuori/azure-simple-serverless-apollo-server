# GraphQL (Apollo Server) on Azure Functions

_Ready-to-use starter for GraphQL (Apollo Server) running on Azure Functions._

This is a very basic implementation of [`apollo-server-azure-functions`](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-azure-functions), with some of the boilerplate and patterns needed to solve a few standard use cases:

- Basic query, using function loaded from separate file
- Basic mutation, using inline function
- Separates the schema into a separate file
- Cuts a bit from Azure's final endpoint path (done through `host.json`)

## Set credentials

There are several ways of setting up credentials with Azure. For me as a new user, the way I actually got this to work in a clear way was with [this guide at serverless-azure-function's Github repo](https://github.com/serverless/serverless-azure-functions#advanced-authentication). An improvement would be to [set a specific credentials file](https://dev.to/azure/setting-up-the-azure-credentials-file-41o3), like you'd often do with Amazon Web Services. With Serverless Framework I tend to get authentication errors (both in AWS and Azure) when the computer drops the exported variables. Try re-exporting those variables if you get an auth error.

## Installation

- Make sure you have [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/en/docs/getting-started) installed, otherwise follow the linked instructions
- Install [Serverless Framework](https://serverless.com) globally with either `yarn global add serverless` or `npm install -g serverless`; right now my bet is that NPM should probably offer a more stable ride, which I've seen many times (`brew` will also work for installation; whatever floats your boat)
- Install [azure-function-core-tools](https://github.com/Azure/azure-functions-core-tools), which is needed for Serverless Framework to work with Azure
- Install dependencies by running `npm install` or `yarn`
- Run `sls deploy` in the root of this directory; given that you are correctly authenticated, it should start pushing code to your Azure account

### Working locally

You can run this locally if you have `azure-function-core-tools`. Just run `sls offline`. You should receive a localhost URL to use. When you're done, close it by hitting CTRL+X twice.

## Calling the API

There are two example functions provided, one query ("GET"-style function) and one mutation ("POST"-style function).

### Note on deployed function endpoints

As per the introduction, if you use the provided `host.json` and you receive a URL like `SOME_PROJECT_NAME.azurewebsites.net/api/api` from Serverless, the true URL would in fact be `SOME_PROJECT_NAME.azurewebsites.net/api`.

### Query: helloWorld

Query:

```
query {
  helloWorld
}

```

Returns:

```
{
  "data": {
    "helloWorld": "Hello World!"
  }
}
```

### Mutation: greeter

Example query:

```
mutation {
	greeter(name: "Mr. Niceguy") {
    response
  }
}
```

Returns:

```
{
  "data": {
    "greeter": {
      "response": "Hey there Mr. Niceguy!"
    }
  }
}
```

## References

- [Deploying with Azure Functions](https://www.apollographql.com/docs/apollo-server/deployment/azure-functions/#sample-code)
- [Setting up Apollo Server with Azure Functions](https://www.apollographql.com/docs/apollo-server/v1/servers/azure-functions/)

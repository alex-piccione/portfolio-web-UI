module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    AWS: {
      region: "europe-central-1",
      apiGatewayId: "ikvqpq0ut9"
    },
    baseLanguage: "English",
    mySecret: "secret 123",
    a_secret: process.env.SECRET_AAA // Pass through env variables
  },
  publicRuntimeConfig: {
    baseLanguage: "Italiano"
  },

}

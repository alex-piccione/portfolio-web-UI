module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    DefaultLocale: "it",
    mySecret: "secret 123",
    a_secret: process.env.SECRET_AAA // Pass through env variables
  },
  publicRuntimeConfig: {
    baseLanguage: "Italiano"
  },
  experimental: { 
    // https://github.com/vercel/next.js/tree/canary/examples/with-docker
    outputStandalone: true,
  },
}

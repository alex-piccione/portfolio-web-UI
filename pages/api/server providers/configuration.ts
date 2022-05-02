export type configuration = {
  API_URL: string,
  AWS: {
    region: string,
    apiGatewayId: string,
    apiStage: string,
    accessKey: string,
    secretKey: string
  },
  defaultLocale: string,
}

function getEnv (variable:string, ifNull?:string) {
  const value = process.env[variable]
  if (value === undefined)
    if (ifNull !== undefined) return ifNull
    else throw new Error(`${variable} is not defined in .env`) 
  return value 
}
  
export const getConfiguration = (serverRuntimeConfig:any):configuration => { return {
  API_URL: getEnv("API_URL", ""),
  AWS: {
    region: getEnv("a_AWS_REGION"), // serverRuntimeConfig.AWS.region,
    apiGatewayId: getEnv("a_AWS_API_ID"), // serverRuntimeConfig.AWS.apiGatewayId,
    apiStage: getEnv("a_AWS_API_STAGE"),
    accessKey: getEnv("a_AWS_KEY_ID"), // serverRuntimeConfig.AWS.accessKey,
    secretKey: getEnv("a_AWS_KEY_SECRET"), // serverRuntimeConfig.AWS.secretKey,
  },
  defaultLocale: serverRuntimeConfig.defaultLocale,
}}
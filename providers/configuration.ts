export type configuration = {
  AWS: {
    region: string,
    apiGatewayId: string,
    apiStage: string,
    accessKey: string,
    secretKey: string
  }
}

export const getConfiguration = (serverRuntimeConfig:any):configuration => { return {
  AWS: {
    region: process.env.a_AWS_REGION, // serverRuntimeConfig.AWS.region,
    apiGatewayId: process.env.a_AWS_API_ID, // serverRuntimeConfig.AWS.apiGatewayId,
    apiStage: process.env.a_AWS_API_STAGE,
    accessKey: process.env.a_AWS_KEY_ID, // serverRuntimeConfig.AWS.accessKey,
    secretKey: process.env.a_AWS_KEY_SECRET, // serverRuntimeConfig.AWS.secretKey,
  }
}}
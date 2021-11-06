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
    region: process.env.AWS_REGION, // serverRuntimeConfig.AWS.region,
    apiGatewayId: process.env.AWS_API_ID, // serverRuntimeConfig.AWS.apiGatewayId,
    apiStage: process.env.AWS_API_STAGE,
    accessKey: process.env.AWS_KEY_ID, // serverRuntimeConfig.AWS.accessKey,
    secretKey: process.env.AWS_KEY_SECRET, // serverRuntimeConfig.AWS.secretKey,
  }
}}
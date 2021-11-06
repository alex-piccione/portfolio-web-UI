const helper = {
  Error_500: (response:any, error:string) => response.status(500).json({error: error}),
  Error_409: (response:any, error:string) => response.status(409).json({error: error})
}

export default helper
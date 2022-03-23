const helper = {
  Error_400: (response:any, error:string) => response.status(400).json({message:error}),
  Error_500: (response:any, error:string) => response.status(500).json({message:error}),
  Error_409: (response:any, error:string) => response.status(409).json({message:error}),


  getErrorString: (error: any) => 
    error.response ? error.response.data.message as string :
    error.request ? `Server API call response not received, please retry. ${error.request}` :
    `Failed to call server API. ${error.message}`
  /*
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return error.response.dat
    console.log(error.response.data);
    //console.log(error.response.status);
    //console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
    console.log(error.config);
  }
  */
}

export default helper
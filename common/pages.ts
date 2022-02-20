export const parseApiError = (response:Response, setError:(_:string) => void) => {
  response.json()
    .then(msg => setError(`${response.statusText} - ${msg.error??String(msg)}`))
    .catch(err => setError(`${response.statusText} - Failed to parse error. ${err}`))
}

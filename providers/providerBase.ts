import { randomUUID } from "crypto"

const ProviderBase = {

    /*getCompanies: () => {

        //const client = new LambdaClient({ region: "REGION" });

        let companies:Company[] = []
        companies.push({Id:"", Name: "Fineco", Types: ["Bank"]})
        return companies
    }*/
}

export default ProviderBase


/*
    def post(self, path, data):
        try:
            response = callApi("POST", path, data, None)
            if int(response.status_code/100) == 2: return response.text
            else: raise Exception(f"Failed to call API. {response.status_code}{response.text}")
        except Exception as e:
            raise Exception(f"Failed to call API. {e}")

    def get_(self, path, data, queryString):
        try:
            response = callApi("GET", path, None, queryString)
            if int(response.status_code/100) == 2: return response.text
            else: raise Exception(f"Failed to call API. {response.status_code}{response.text}")
        except Exception as e:
            raise Exception(f"Failed to call API. {e}")

    def get(self, path, **kwargs):

        data = kwargs.get("data", None)
        queryString = kwargs.get("queryString", None)

        try:
            response = callApi("GET", path, data, queryString)
            if int(response.status_code/100) == 2: return response.text
            else: raise Exception(f"Failed to call API. ({response.status_code}) {response.text}")
        except Exception as e:
            raise Exception(f"Failed to call API. {e}")


*/
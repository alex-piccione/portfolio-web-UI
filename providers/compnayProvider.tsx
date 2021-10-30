import getConfig from "next/config"
import { Company } from "../components/entities"

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const aaa = serverRuntimeConfig.mySecret

console.log(`serverRuntimeConfig.baseLanguage: ${serverRuntimeConfig.baseLanguage}`)
console.log(`publicRuntimeConfig.baseLanguage: ${publicRuntimeConfig.baseLanguage}`)

const CompanyProvider = {

    getCompanies: async () => {

        //const response = await fetch(`http://${serverRuntimeConfig.baseLanguage}`)
        //const a = response.status.toString()
        //response.status
        //const client = new LambdaClient({ region: "REGION" });
        //onst response = await fetch()

        console.log(`aaa: ${serverRuntimeConfig.mySecret}`)

        let companies:Company[] = []
        companies.push({Id:"1", Name: "Fineco", Types: ["Bank 3"]})
        return companies
    }
}

export default CompanyProvider
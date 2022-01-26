


// en-GB,en;q=0.9

import { parseAcceptLanguageHeader } from "../../../common/utils"

parseAcceptLanguageHeader

const test =
  describe(parseAcceptLanguageHeader.name, () => {

    //const testCases = []
    it("detect the right locale", () => {
      const testCases = [
          ["en-GB,en;q=0.9", "en-GB"],
          ["zh-CN;q=0.6, zh;q=0.4", "zh-CN"],
        ].map( 
        ([input, expectedResult]) => expect(parseAcceptLanguageHeader(input)[0]).equals(expectedResult) 
    )})
  })

  export default test
import { getLocale } from "../../../common/utils"

const test =
  describe(getLocale.name, () => {

    it("detect the right locale", () => {
      const testCases = [
          ["en-GB,en;q=0.9", "en-GB"],
          ["zh-CN;q=0.6, zh;q=0.4", "zh-CN"],
        ].map( 
        ([input, expectedResult]) => expect(getLocale(input)).equals(expectedResult) 
    )})
  })

  export default test
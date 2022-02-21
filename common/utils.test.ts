import { getLocale } from "./utils";

describe("getLocale", () => {
    test("en-US", () => {  
        expect(getLocale("en-US,en;q=0.9")).toBe("en-US");     
    })
})

export {}
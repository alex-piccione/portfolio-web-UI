export function parseAcceptLanguageHeader(header: string): string[] {
    //return header.split(",").map(lang => lang.split(";")[0].trim());
    const locale = header.split(",").map(lang => lang.split(";")[0].trim())
    console.log(`parseAcceptLanguageHeader "${header}" => ${locale}`)
    return locale
}

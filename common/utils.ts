interface AcceptedLanguage {
    locale: string,
    language:string,
    region?: string,
    priority: number
}

const parseAcceptLanguageHeader = (header: string): AcceptedLanguage[] => {
    console.log(`parseAcceptLanguageHeader "${header}"`)
    return header.split(",").map(item => {
        const values = item.split(";")
        const locale = values[0].trim()
        var localeValues = locale.split("-")
        var language = localeValues[0]
        var region = localeValues[1] || undefined
        const quality = values[1] ? parseFloat(values[1].split("=")[1]) : 1
        return {
            locale,
            language,
            region,
            priority: quality
        }
    })
}

const getLocale = (header: string) => {    
    const languages = parseAcceptLanguageHeader(header).sort( (a, b) => a.priority > b.priority ? -1 : 1)
    const locale = languages && languages[0].locale
    console.log(`getLocale "${header}" => ${locale}`)
    return locale
}

export { getLocale } 
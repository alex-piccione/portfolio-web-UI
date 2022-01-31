open System
open System.Globalization

let writeFile file content =
    let location = IO.Path.GetDirectoryName(Reflection.Assembly.GetEntryAssembly().Location);
    let name = $"""{(DateTime.Today.ToString("yyyy-MM-dd"))}_{file}"""
    let path = IO.Path.Join(location, name)
    use writer = System.IO.File.CreateText(path)
    writer.Write (content:string)

let generate () = 

    let cultures = 
        CultureInfo.GetCultures(CultureTypes.AllCultures) 
        |> Array.filter (fun c -> c.Name.Length = 2 || (c.Name.Length = 5 && c.Name[2] = '-'))

    let wrapTexts values = String.Join(", ", values |> Array.map(fun x -> $"\"{x}\""))

    let createShortDate (culture:CultureInfo) =
        let format = culture.DateTimeFormat
        $@"""{culture.Name}"":{{ 
    ""ShortDatePattern"":""{format.ShortDatePattern}"",
    ""ShortTimePattern"":""{format.ShortTimePattern}"",
    ""MonthDayPattern"":""{format.MonthDayPattern}"",
    ""MonthNames"":[{wrapTexts(format.MonthNames)}],
    ""DayNames"":[{wrapTexts(format.DayNames)}],
    ""AbbreviatedDayNames"":[{wrapTexts(format.AbbreviatedDayNames)}],
    ""ShortestDayNames"":[{wrapTexts(format.ShortestDayNames)}],    
    ""FirstDayOfWeek"":{(int)format.FirstDayOfWeek}
}}"
    
    let data = cultures |> Array.map createShortDate 
    
    let interface_ = @"export interface L10N {
    ShortDatePattern:string,
    ShortTimePattern:string,
    MonthNames: string[],
    AbbreviatedDayNames: string[]
}"
    let result = interface_ + "\r\n\r\nconst locales = {" + String.Join(",\r\n", data) + "}\r\n\r\nexport default locales"

    writeFile "locales.js" result

    writeFile "locales-names.js" (String.Join(", ", cultures |> Array.map (fun c -> c.Name) |> wrapTexts))

    printfn $"Done, {cultures.Length} cultures"

generate ()
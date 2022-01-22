export interface L10N {
  ShortDatePattern:string,
  ShortTimePattern:string,
  MonthNames: string[],
  AbbreviatedDayNames: string[]
}

const locales = {"aa":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"aa-DJ":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":6
},
"aa-ER":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"aa-ET":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"af":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember", ""],
  "DayNames":["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
  "AbbreviatedDayNames":["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."],
  "ShortestDayNames":["S", "M", "D", "W", "D", "V", "S"],    
  "FirstDayOfWeek":0
},
"af-NA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember", ""],
  "DayNames":["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
  "AbbreviatedDayNames":["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."],
  "ShortestDayNames":["S", "M", "D", "W", "D", "V", "S"],    
  "FirstDayOfWeek":1
},
"af-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember", ""],
  "DayNames":["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
  "AbbreviatedDayNames":["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."],
  "ShortestDayNames":["S", "M", "D", "W", "D", "V", "S"],    
  "FirstDayOfWeek":0
},
"ak":{ 
  "ShortDatePattern":"yyyy/MM/dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Sanda-Ɔpɛpɔn", "Kwakwar-Ɔgyefuo", "Ebɔw-Ɔbenem", "Ebɔbira-Oforisuo", "Esusow Aketseaba-Kɔtɔnimba", "Obirade-Ayɛwohomumu", "Ayɛwoho-Kitawonsa", "Difuu-Ɔsandaa", "Fankwa-Ɛbɔ", "Ɔbɛsɛ-Ahinime", "Ɔberɛfɛw-Obubuo", "Mumu-Ɔpɛnimba", ""],
  "DayNames":["Kwesida", "Dwowda", "Benada", "Wukuda", "Yawda", "Fida", "Memeneda"],
  "AbbreviatedDayNames":["Kwe", "Dwo", "Ben", "Wuk", "Yaw", "Fia", "Mem"],
  "ShortestDayNames":["K", "D", "B", "W", "Y", "F", "M"],    
  "FirstDayOfWeek":1
},
"ak-GH":{ 
  "ShortDatePattern":"yyyy/MM/dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Sanda-Ɔpɛpɔn", "Kwakwar-Ɔgyefuo", "Ebɔw-Ɔbenem", "Ebɔbira-Oforisuo", "Esusow Aketseaba-Kɔtɔnimba", "Obirade-Ayɛwohomumu", "Ayɛwoho-Kitawonsa", "Difuu-Ɔsandaa", "Fankwa-Ɛbɔ", "Ɔbɛsɛ-Ahinime", "Ɔberɛfɛw-Obubuo", "Mumu-Ɔpɛnimba", ""],
  "DayNames":["Kwesida", "Dwowda", "Benada", "Wukuda", "Yawda", "Fida", "Memeneda"],
  "AbbreviatedDayNames":["Kwe", "Dwo", "Ben", "Wuk", "Yaw", "Fia", "Mem"],
  "ShortestDayNames":["K", "D", "B", "W", "Y", "F", "M"],    
  "FirstDayOfWeek":1
},
"am":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ጃንዩወሪ", "ፌብሩወሪ", "ማርች", "ኤፕሪል", "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክቶበር", "ኖቬምበር", "ዲሴምበር", ""],
  "DayNames":["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"],
  "AbbreviatedDayNames":["እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"],
  "ShortestDayNames":["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"],    
  "FirstDayOfWeek":0
},
"am-ET":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ጃንዩወሪ", "ፌብሩወሪ", "ማርች", "ኤፕሪል", "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክቶበር", "ኖቬምበር", "ዲሴምበር", ""],
  "DayNames":["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"],
  "AbbreviatedDayNames":["እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"],
  "ShortestDayNames":["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"],    
  "FirstDayOfWeek":0
},
"ar":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-AE":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-BH":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-DJ":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-DZ":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-EG":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-ER":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-IL":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":0
},
"ar-IQ":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-JO":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-KM":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-KW":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-LB":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-LY":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-MA":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-MR":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغشت", "شتمبر", "أكتوبر", "نوفمبر", "دجمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-OM":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-PS":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-QA":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-SA":{ 
  "ShortDatePattern":"d‏/M‏/yyyy g",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":0
},
"ar-SD":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-SO":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-SS":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-SY":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":6
},
"ar-TD":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-TN":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":1
},
"ar-YE":{ 
  "ShortDatePattern":"d‏/M‏/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
  "DayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "AbbreviatedDayNames":["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  "ShortestDayNames":["ح", "ن", "ث", "ر", "خ", "ج", "س"],    
  "FirstDayOfWeek":0
},
"as":{ 
  "ShortDatePattern":"d-M-yyyy",
  "ShortTimePattern":"tt h.mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["জানুৱাৰী", "ফেব্ৰুৱাৰী", "মাৰ্চ", "এপ্ৰিল", "মে’", "জুন", "জুলাই", "আগষ্ট", "ছেপ্তেম্বৰ", "অক্টোবৰ", "নৱেম্বৰ", "ডিচেম্বৰ", ""],
  "DayNames":["দেওবাৰ", "সোমবাৰ", "মঙ্গলবাৰ", "বুধবাৰ", "বৃহস্পতিবাৰ", "শুক্ৰবাৰ", "শনিবাৰ"],
  "AbbreviatedDayNames":["দেও", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্ৰ", "শনি"],
  "ShortestDayNames":["দ", "স", "ম", "ব", "ব", "শ", "শ"],    
  "FirstDayOfWeek":0
},
"as-IN":{ 
  "ShortDatePattern":"d-M-yyyy",
  "ShortTimePattern":"tt h.mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["জানুৱাৰী", "ফেব্ৰুৱাৰী", "মাৰ্চ", "এপ্ৰিল", "মে’", "জুন", "জুলাই", "আগষ্ট", "ছেপ্তেম্বৰ", "অক্টোবৰ", "নৱেম্বৰ", "ডিচেম্বৰ", ""],
  "DayNames":["দেওবাৰ", "সোমবাৰ", "মঙ্গলবাৰ", "বুধবাৰ", "বৃহস্পতিবাৰ", "শুক্ৰবাৰ", "শনিবাৰ"],
  "AbbreviatedDayNames":["দেও", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্ৰ", "শনি"],
  "ShortestDayNames":["দ", "স", "ম", "ব", "ব", "শ", "শ"],    
  "FirstDayOfWeek":0
},
"az":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr", ""],
  "DayNames":["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"],
  "AbbreviatedDayNames":["B.", "B.E.", "Ç.A.", "Ç.", "C.A.", "C.", "Ş."],
  "ShortestDayNames":["7", "1", "2", "3", "4", "5", "6"],    
  "FirstDayOfWeek":1
},
"ba":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ba-RU":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"be":{ 
  "ShortDatePattern":"d.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань", ""],
  "DayNames":["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"],
  "AbbreviatedDayNames":["нд", "пн", "аў", "ср", "чц", "пт", "сб"],
  "ShortestDayNames":["н", "п", "а", "с", "ч", "п", "с"],    
  "FirstDayOfWeek":1
},
"be-BY":{ 
  "ShortDatePattern":"d.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань", ""],
  "DayNames":["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"],
  "AbbreviatedDayNames":["нд", "пн", "аў", "ср", "чц", "пт", "сб"],
  "ShortestDayNames":["н", "п", "а", "с", "ч", "п", "с"],    
  "FirstDayOfWeek":1
},
"bg":{ 
  "ShortDatePattern":"d.MM.yyyy 'г'.",
  "ShortTimePattern":"H:mm 'ч'.",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември", ""],
  "DayNames":["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"],
  "AbbreviatedDayNames":["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["н", "п", "в", "с", "ч", "п", "с"],    
  "FirstDayOfWeek":1
},
"bg-BG":{ 
  "ShortDatePattern":"d.MM.yyyy 'г'.",
  "ShortTimePattern":"H:mm 'ч'.",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември", ""],
  "DayNames":["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"],
  "AbbreviatedDayNames":["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["н", "п", "в", "с", "ч", "п", "с"],    
  "FirstDayOfWeek":1
},
"bm":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["zanwuye", "feburuye", "marisi", "awirili", "mɛ", "zuwɛn", "zuluye", "uti", "sɛtanburu", "ɔkutɔburu", "nowanburu", "desanburu", ""],
  "DayNames":["kari", "ntɛnɛ", "tarata", "araba", "alamisa", "juma", "sibiri"],
  "AbbreviatedDayNames":["kar", "ntɛ", "tar", "ara", "ala", "jum", "sib"],
  "ShortestDayNames":["K", "N", "T", "A", "A", "J", "S"],    
  "FirstDayOfWeek":1
},
"bm-ML":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["zanwuye", "feburuye", "marisi", "awirili", "mɛ", "zuwɛn", "zuluye", "uti", "sɛtanburu", "ɔkutɔburu", "nowanburu", "desanburu", ""],
  "DayNames":["kari", "ntɛnɛ", "tarata", "araba", "alamisa", "juma", "sibiri"],
  "AbbreviatedDayNames":["kar", "ntɛ", "tar", "ara", "ala", "jum", "sib"],
  "ShortestDayNames":["K", "N", "T", "A", "A", "J", "S"],    
  "FirstDayOfWeek":1
},
"bn":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর", ""],
  "DayNames":["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
  "AbbreviatedDayNames":["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
  "ShortestDayNames":["র", "সো", "ম", "বু", "বৃ", "শু", "শ"],    
  "FirstDayOfWeek":0
},
"bn-BD":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর", ""],
  "DayNames":["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
  "AbbreviatedDayNames":["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
  "ShortestDayNames":["র", "সো", "ম", "বু", "বৃ", "শু", "শ"],    
  "FirstDayOfWeek":0
},
"bn-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর", ""],
  "DayNames":["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
  "AbbreviatedDayNames":["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
  "ShortestDayNames":["র", "সো", "ম", "বু", "বৃ", "শু", "শ"],    
  "FirstDayOfWeek":0
},
"bo":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMMའི་ཚེས་d",
  "MonthNames":["ཟླ་བ་དང་པོ་", "ཟླ་བ་གཉིས་པ་", "ཟླ་བ་གསུམ་པ་", "ཟླ་བ་བཞི་པ་", "ཟླ་བ་ལྔ་པ་", "ཟླ་བ་དྲུག་པ་", "ཟླ་བ་བདུན་པ་", "ཟླ་བ་བརྒྱད་པ་", "ཟླ་བ་དགུ་པ་", "ཟླ་བ་བཅུ་པ་", "ཟླ་བ་བཅུ་གཅིག་པ་", "ཟླ་བ་བཅུ་གཉིས་པ་", ""],
  "DayNames":["གཟའ་ཉི་མ་", "གཟའ་ཟླ་བ་", "གཟའ་མིག་དམར་", "གཟའ་ལྷག་པ་", "གཟའ་ཕུར་བུ་", "གཟའ་པ་སངས་", "གཟའ་སྤེན་པ་"],
  "AbbreviatedDayNames":["ཉི་མ་", "ཟླ་བ་", "མིག་དམར་", "ལྷག་པ་", "ཕུར་བུ་", "པ་སངས་", "སྤེན་པ་"],
  "ShortestDayNames":["ཉི", "ཟླ", "མིག", "ལྷག", "ཕུར", "སངས", "སྤེན"],    
  "FirstDayOfWeek":0
},
"bo-CN":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMMའི་ཚེས་d",
  "MonthNames":["ཟླ་བ་དང་པོ་", "ཟླ་བ་གཉིས་པ་", "ཟླ་བ་གསུམ་པ་", "ཟླ་བ་བཞི་པ་", "ཟླ་བ་ལྔ་པ་", "ཟླ་བ་དྲུག་པ་", "ཟླ་བ་བདུན་པ་", "ཟླ་བ་བརྒྱད་པ་", "ཟླ་བ་དགུ་པ་", "ཟླ་བ་བཅུ་པ་", "ཟླ་བ་བཅུ་གཅིག་པ་", "ཟླ་བ་བཅུ་གཉིས་པ་", ""],
  "DayNames":["གཟའ་ཉི་མ་", "གཟའ་ཟླ་བ་", "གཟའ་མིག་དམར་", "གཟའ་ལྷག་པ་", "གཟའ་ཕུར་བུ་", "གཟའ་པ་སངས་", "གཟའ་སྤེན་པ་"],
  "AbbreviatedDayNames":["ཉི་མ་", "ཟླ་བ་", "མིག་དམར་", "ལྷག་པ་", "ཕུར་བུ་", "པ་སངས་", "སྤེན་པ་"],
  "ShortestDayNames":["ཉི", "ཟླ", "མིག", "ལྷག", "ཕུར", "སངས", "སྤེན"],    
  "FirstDayOfWeek":0
},
"bo-IN":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMMའི་ཚེས་d",
  "MonthNames":["ཟླ་བ་དང་པོ་", "ཟླ་བ་གཉིས་པ་", "ཟླ་བ་གསུམ་པ་", "ཟླ་བ་བཞི་པ་", "ཟླ་བ་ལྔ་པ་", "ཟླ་བ་དྲུག་པ་", "ཟླ་བ་བདུན་པ་", "ཟླ་བ་བརྒྱད་པ་", "ཟླ་བ་དགུ་པ་", "ཟླ་བ་བཅུ་པ་", "ཟླ་བ་བཅུ་གཅིག་པ་", "ཟླ་བ་བཅུ་གཉིས་པ་", ""],
  "DayNames":["གཟའ་ཉི་མ་", "གཟའ་ཟླ་བ་", "གཟའ་མིག་དམར་", "གཟའ་ལྷག་པ་", "གཟའ་ཕུར་བུ་", "གཟའ་པ་སངས་", "གཟའ་སྤེན་པ་"],
  "AbbreviatedDayNames":["ཉི་མ་", "ཟླ་བ་", "མིག་དམར་", "ལྷག་པ་", "ཕུར་བུ་", "པ་སངས་", "སྤེན་པ་"],
  "ShortestDayNames":["ཉི", "ཟླ", "མིག", "ལྷག", "ཕུར", "སངས", "སྤེན"],    
  "FirstDayOfWeek":0
},
"br":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Genver", "Cʼhwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu", ""],
  "DayNames":["Sul", "Lun", "Meurzh", "Mercʼher", "Yaou", "Gwener", "Sadorn"],
  "AbbreviatedDayNames":["Sul", "Lun", "Meu.", "Mer.", "Yaou", "Gwe.", "Sad."],
  "ShortestDayNames":["Su", "L", "Mz", "Mc", "Y", "G", "Sa"],    
  "FirstDayOfWeek":1
},
"br-FR":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Genver", "Cʼhwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu", ""],
  "DayNames":["Sul", "Lun", "Meurzh", "Mercʼher", "Yaou", "Gwener", "Sadorn"],
  "AbbreviatedDayNames":["Sul", "Lun", "Meu.", "Mer.", "Yaou", "Gwe.", "Sad."],
  "ShortestDayNames":["Su", "L", "Mz", "Mc", "Y", "G", "Sa"],    
  "FirstDayOfWeek":1
},
"bs":{ 
  "ShortDatePattern":"d. M. yyyy.",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar", ""],
  "DayNames":["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
  "AbbreviatedDayNames":["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
  "ShortestDayNames":["n", "p", "u", "s", "č", "p", "s"],    
  "FirstDayOfWeek":1
},
"ca":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre", ""],
  "DayNames":["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
  "AbbreviatedDayNames":["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
  "ShortestDayNames":["dg", "dl", "dt", "dc", "dj", "dv", "ds"],    
  "FirstDayOfWeek":1
},
"ca-AD":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre", ""],
  "DayNames":["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
  "AbbreviatedDayNames":["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
  "ShortestDayNames":["dg", "dl", "dt", "dc", "dj", "dv", "ds"],    
  "FirstDayOfWeek":1
},
"ca-ES":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre", ""],
  "DayNames":["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
  "AbbreviatedDayNames":["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
  "ShortestDayNames":["dg", "dl", "dt", "dc", "dj", "dv", "ds"],    
  "FirstDayOfWeek":1
},
"ca-FR":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre", ""],
  "DayNames":["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
  "AbbreviatedDayNames":["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
  "ShortestDayNames":["dg", "dl", "dt", "dc", "dj", "dv", "ds"],    
  "FirstDayOfWeek":1
},
"ca-IT":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre", ""],
  "DayNames":["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
  "AbbreviatedDayNames":["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
  "ShortestDayNames":["dg", "dl", "dt", "dc", "dj", "dv", "ds"],    
  "FirstDayOfWeek":1
},
"ce":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["кӀира", "оршот", "шинара", "кхаара", "еара", "пӀераска", "шуот"],
  "AbbreviatedDayNames":["кӀи", "ор", "ши", "кха", "еа", "пӀе", "шуо"],
  "ShortestDayNames":["кӀ", "о", "ш", "кх", "е", "пӀ", "ш"],    
  "FirstDayOfWeek":1
},
"ce-RU":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["кӀира", "оршот", "шинара", "кхаара", "еара", "пӀераска", "шуот"],
  "AbbreviatedDayNames":["кӀи", "ор", "ши", "кха", "еа", "пӀе", "шуо"],
  "ShortestDayNames":["кӀ", "о", "ш", "кх", "е", "пӀ", "ш"],    
  "FirstDayOfWeek":1
},
"co":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"co-FR":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"cs":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec", ""],
  "DayNames":["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
  "AbbreviatedDayNames":["ne", "po", "út", "st", "čt", "pá", "so"],
  "ShortestDayNames":["N", "P", "Ú", "S", "Č", "P", "S"],    
  "FirstDayOfWeek":1
},
"cs-CZ":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec", ""],
  "DayNames":["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
  "AbbreviatedDayNames":["ne", "po", "út", "st", "čt", "pá", "so"],
  "ShortestDayNames":["N", "P", "Ú", "S", "Č", "P", "S"],    
  "FirstDayOfWeek":1
},
"cu":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"cu-RU":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"cy":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr", ""],
  "DayNames":["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"],
  "AbbreviatedDayNames":["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
  "ShortestDayNames":["S", "Ll", "M", "M", "I", "G", "S"],    
  "FirstDayOfWeek":1
},
"cy-GB":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr", ""],
  "DayNames":["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"],
  "AbbreviatedDayNames":["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
  "ShortestDayNames":["S", "Ll", "M", "M", "I", "G", "S"],    
  "FirstDayOfWeek":1
},
"da":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december", ""],
  "DayNames":["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
  "AbbreviatedDayNames":["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"da-DK":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december", ""],
  "DayNames":["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
  "AbbreviatedDayNames":["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"da-GL":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december", ""],
  "DayNames":["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
  "AbbreviatedDayNames":["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"de":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"de-AT":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"de-BE":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"de-CH":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"de-DE":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"de-IT":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"de-LI":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"de-LU":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  "AbbreviatedDayNames":["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"dv":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":5
},
"dv-MV":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":5
},
"dz":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":" h  mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["སྤྱི་ཟླ་དངཔ་", "སྤྱི་ཟླ་གཉིས་པ་", "སྤྱི་ཟླ་གསུམ་པ་", "སྤྱི་ཟླ་བཞི་པ", "སྤྱི་ཟླ་ལྔ་པ་", "སྤྱི་ཟླ་དྲུག་པ", "སྤྱི་ཟླ་བདུན་པ་", "སྤྱི་ཟླ་བརྒྱད་པ་", "སྤྱི་ཟླ་དགུ་པ་", "སྤྱི་ཟླ་བཅུ་པ་", "སྤྱི་ཟླ་བཅུ་གཅིག་པ་", "སྤྱི་ཟླ་བཅུ་གཉིས་པ་", ""],
  "DayNames":["གཟའ་ཟླ་བ་", "གཟའ་མིག་དམར་", "གཟའ་ལྷག་པ་", "གཟའ་ཕུར་བུ་", "གཟའ་པ་སངས་", "གཟའ་སྤེན་པ་", "གཟའ་ཉི་མ་"],
  "AbbreviatedDayNames":["ཟླ་", "མིར་", "ལྷག་", "ཕུར་", "སངས་", "སྤེན་", "ཉི་"],
  "ShortestDayNames":["ཟླ", "མིར", "ལྷག", "ཕུར", "སངྶ", "སྤེན", "ཉི"],    
  "FirstDayOfWeek":0
},
"dz-BT":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":" h  mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["སྤྱི་ཟླ་དངཔ་", "སྤྱི་ཟླ་གཉིས་པ་", "སྤྱི་ཟླ་གསུམ་པ་", "སྤྱི་ཟླ་བཞི་པ", "སྤྱི་ཟླ་ལྔ་པ་", "སྤྱི་ཟླ་དྲུག་པ", "སྤྱི་ཟླ་བདུན་པ་", "སྤྱི་ཟླ་བརྒྱད་པ་", "སྤྱི་ཟླ་དགུ་པ་", "སྤྱི་ཟླ་བཅུ་པ་", "སྤྱི་ཟླ་བཅུ་གཅིག་པ་", "སྤྱི་ཟླ་བཅུ་གཉིས་པ་", ""],
  "DayNames":["གཟའ་ཟླ་བ་", "གཟའ་མིག་དམར་", "གཟའ་ལྷག་པ་", "གཟའ་ཕུར་བུ་", "གཟའ་པ་སངས་", "གཟའ་སྤེན་པ་", "གཟའ་ཉི་མ་"],
  "AbbreviatedDayNames":["ཟླ་", "མིར་", "ལྷག་", "ཕུར་", "སངས་", "སྤེན་", "ཉི་"],
  "ShortestDayNames":["ཟླ", "མིར", "ལྷག", "ཕུར", "སངྶ", "སྤེན", "ཉི"],    
  "FirstDayOfWeek":0
},
"ee":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"tt 'ga' h:mm",
  "MonthDayPattern":"MMMM d 'lia'",
  "MonthNames":["dzove", "dzodze", "tedoxe", "afɔfĩe", "dama", "masa", "siamlɔm", "deasiamime", "anyɔnyɔ", "kele", "adeɛmekpɔxe", "dzome", ""],
  "DayNames":["kɔsiɖa", "dzoɖa", "blaɖa", "kuɖa", "yawoɖa", "fiɖa", "memleɖa"],
  "AbbreviatedDayNames":["kɔs", "dzo", "bla", "kuɖ", "yaw", "fiɖ", "mem"],
  "ShortestDayNames":["k", "d", "b", "k", "y", "f", "m"],    
  "FirstDayOfWeek":1
},
"ee-GH":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"tt 'ga' h:mm",
  "MonthDayPattern":"MMMM d 'lia'",
  "MonthNames":["dzove", "dzodze", "tedoxe", "afɔfĩe", "dama", "masa", "siamlɔm", "deasiamime", "anyɔnyɔ", "kele", "adeɛmekpɔxe", "dzome", ""],
  "DayNames":["kɔsiɖa", "dzoɖa", "blaɖa", "kuɖa", "yawoɖa", "fiɖa", "memleɖa"],
  "AbbreviatedDayNames":["kɔs", "dzo", "bla", "kuɖ", "yaw", "fiɖ", "mem"],
  "ShortestDayNames":["k", "d", "b", "k", "y", "f", "m"],    
  "FirstDayOfWeek":1
},
"ee-TG":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d 'lia'",
  "MonthNames":["dzove", "dzodze", "tedoxe", "afɔfĩe", "dama", "masa", "siamlɔm", "deasiamime", "anyɔnyɔ", "kele", "adeɛmekpɔxe", "dzome", ""],
  "DayNames":["kɔsiɖa", "dzoɖa", "blaɖa", "kuɖa", "yawoɖa", "fiɖa", "memleɖa"],
  "AbbreviatedDayNames":["kɔs", "dzo", "bla", "kuɖ", "yaw", "fiɖ", "mem"],
  "ShortestDayNames":["k", "d", "b", "k", "y", "f", "m"],    
  "FirstDayOfWeek":1
},
"el":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος", ""],
  "DayNames":["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
  "AbbreviatedDayNames":["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
  "ShortestDayNames":["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"],    
  "FirstDayOfWeek":1
},
"el-CY":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος", ""],
  "DayNames":["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
  "AbbreviatedDayNames":["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
  "ShortestDayNames":["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"],    
  "FirstDayOfWeek":1
},
"el-GR":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος", ""],
  "DayNames":["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
  "AbbreviatedDayNames":["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
  "ShortestDayNames":["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"],    
  "FirstDayOfWeek":1
},
"en":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-AE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":6
},
"en-AG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-AI":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-AS":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-AT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-AU":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["Su.", "M.", "Tu.", "W.", "Th.", "F.", "Sa."],    
  "FirstDayOfWeek":0
},
"en-BB":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-BE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-BI":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-BM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-BS":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-BW":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-BZ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-CA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-CC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-CH":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-CK":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-CM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-CX":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-CY":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-DE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-DK":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-DM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-ER":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-FI":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"H.mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-FJ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-FK":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-FM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-GB":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-GD":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-GG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-GH":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-GI":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-GM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-GU":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-GY":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-HK":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-IE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-IL":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-IM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-IN":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-IO":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-JE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-JM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-KE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-KI":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-KN":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-KY":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-LC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-LR":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-LS":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-MG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-MH":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-MO":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-MP":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-MS":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-MT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-MU":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-MW":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-MY":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-NA":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-NF":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-NG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-NL":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-NR":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-NU":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-NZ":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-PG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-PH":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-PK":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-PN":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-PR":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-PW":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-RW":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SB":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SD":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":6
},
"en-SE":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SG":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-SH":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SI":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SL":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SS":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SX":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-SZ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-TC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-TK":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-TO":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-TT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-TV":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-TZ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-UG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-UM":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-US":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-VC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-VG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-VI":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-VU":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-WS":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-ZA":{ 
  "ShortDatePattern":"yyyy/MM/dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"en-ZM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"en-ZW":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
  "DayNames":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"eo":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro", ""],
  "DayNames":["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"],
  "AbbreviatedDayNames":["di", "lu", "ma", "me", "ĵa", "ve", "sa"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"es":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-AR":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-BO":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-BR":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-BZ":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-CL":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-CO":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["d", "l", "m", "m", "j", "v", "s"],    
  "FirstDayOfWeek":0
},
"es-CR":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-CU":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-DO":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-EC":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-ES":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-GQ":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-GT":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-HN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-MX":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-NI":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-PA":{ 
  "ShortDatePattern":"MM/dd/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-PE":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-PH":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-PR":{ 
  "ShortDatePattern":"MM/dd/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-PY":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-SV":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-US":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"es-UY":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"es-VE":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""],
  "DayNames":["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "AbbreviatedDayNames":["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"et":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember", ""],
  "DayNames":["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
  "AbbreviatedDayNames":["P", "E", "T", "K", "N", "R", "L"],
  "ShortestDayNames":["P", "E", "T", "K", "N", "R", "L"],    
  "FirstDayOfWeek":1
},
"et-EE":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember", ""],
  "DayNames":["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
  "AbbreviatedDayNames":["P", "E", "T", "K", "N", "R", "L"],
  "ShortestDayNames":["P", "E", "T", "K", "N", "R", "L"],    
  "FirstDayOfWeek":1
},
"eu":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua", ""],
  "DayNames":["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
  "AbbreviatedDayNames":["ig.", "al.", "ar.", "az.", "og.", "or.", "lr."],
  "ShortestDayNames":["I", "A", "A", "A", "O", "O", "L"],    
  "FirstDayOfWeek":1
},
"eu-ES":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua", ""],
  "DayNames":["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
  "AbbreviatedDayNames":["ig.", "al.", "ar.", "az.", "og.", "or.", "lr."],
  "ShortestDayNames":["I", "A", "A", "A", "O", "O", "L"],    
  "FirstDayOfWeek":1
},
"fa":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", ""],
  "DayNames":["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
  "AbbreviatedDayNames":["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
  "ShortestDayNames":["ی", "د", "س", "چ", "پ", "ج", "ش"],    
  "FirstDayOfWeek":6
},
"fa-AF":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", ""],
  "DayNames":["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
  "AbbreviatedDayNames":["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
  "ShortestDayNames":["ی", "د", "س", "چ", "پ", "ج", "ش"],    
  "FirstDayOfWeek":6
},
"fa-IR":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", ""],
  "DayNames":["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
  "AbbreviatedDayNames":["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
  "ShortestDayNames":["ی", "د", "س", "چ", "پ", "ج", "ش"],    
  "FirstDayOfWeek":6
},
"ff":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["siilo", "colte", "mbooy", "seeɗto", "duujal", "korse", "morso", "juko", "siilto", "yarkomaa", "jolal", "bowte", ""],
  "DayNames":["dewo", "aaɓnde", "mawbaare", "njeslaare", "naasaande", "mawnde", "hoore-biir"],
  "AbbreviatedDayNames":["dew", "aaɓ", "maw", "nje", "naa", "mwd", "hbi"],
  "ShortestDayNames":["d", "a", "m", "n", "n", "m", "h"],    
  "FirstDayOfWeek":1
},
"fi":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"H.mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu", ""],
  "DayNames":["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
  "AbbreviatedDayNames":["su", "ma", "ti", "ke", "to", "pe", "la"],
  "ShortestDayNames":["S", "M", "T", "K", "T", "P", "L"],    
  "FirstDayOfWeek":1
},
"fi-FI":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"H.mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu", ""],
  "DayNames":["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
  "AbbreviatedDayNames":["su", "ma", "ti", "ke", "to", "pe", "la"],
  "ShortestDayNames":["S", "M", "T", "K", "T", "P", "L"],    
  "FirstDayOfWeek":1
},
"fo":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"],
  "AbbreviatedDayNames":["sun", "mán", "týs", "mik", "hós", "frí", "ley"],
  "ShortestDayNames":["S", "M", "T", "M", "H", "F", "L"],    
  "FirstDayOfWeek":1
},
"fo-DK":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"],
  "AbbreviatedDayNames":["sun", "mán", "týs", "mik", "hós", "frí", "ley"],
  "ShortestDayNames":["S", "M", "T", "M", "H", "F", "L"],    
  "FirstDayOfWeek":1
},
"fo-FO":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"],
  "AbbreviatedDayNames":["sun", "mán", "týs", "mik", "hós", "frí", "ley"],
  "ShortestDayNames":["S", "M", "T", "M", "H", "F", "L"],    
  "FirstDayOfWeek":1
},
"fr":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-BE":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-BF":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-BI":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-BJ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-BL":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-CA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH 'h' mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"fr-CD":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-CF":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-CG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-CH":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-CI":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-CM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-DJ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":6
},
"fr-DZ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":6
},
"fr-FR":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-GA":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-GF":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-GN":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-GP":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-GQ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-HT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-KM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-LU":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-MA":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-MC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-MF":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-MG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-ML":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-MQ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-MR":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-MU":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-NC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-NE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-PF":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-PM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-RE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-RW":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-SC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-SN":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-SY":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":6
},
"fr-TD":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-TG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-TN":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-VU":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-WF":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fr-YT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""],
  "DayNames":["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "AbbreviatedDayNames":["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"fy":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Jannewaris", "Febrewaris", "Maart", "April", "Maaie", "Juny", "July", "Augustus", "Septimber", "Oktober", "Novimber", "Desimber", ""],
  "DayNames":["snein", "moandei", "tiisdei", "woansdei", "tongersdei", "freed", "sneon"],
  "AbbreviatedDayNames":["si", "mo", "ti", "wo", "to", "fr", "so"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"fy-NL":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Jannewaris", "Febrewaris", "Maart", "April", "Maaie", "Juny", "July", "Augustus", "Septimber", "Oktober", "Novimber", "Desimber", ""],
  "DayNames":["snein", "moandei", "tiisdei", "woansdei", "tongersdei", "freed", "sneon"],
  "AbbreviatedDayNames":["si", "mo", "ti", "wo", "to", "fr", "so"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ga":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig", ""],
  "DayNames":["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
  "AbbreviatedDayNames":["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
  "ShortestDayNames":["D", "L", "M", "C", "D", "A", "S"],    
  "FirstDayOfWeek":1
},
"ga-IE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig", ""],
  "DayNames":["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
  "AbbreviatedDayNames":["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
  "ShortestDayNames":["D", "L", "M", "C", "D", "A", "S"],    
  "FirstDayOfWeek":1
},
"gd":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d'mh' MMMM",
  "MonthNames":["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd", ""],
  "DayNames":["DiDòmhnaich", "DiLuain", "DiMàirt", "DiCiadain", "DiarDaoin", "DihAoine", "DiSathairne"],
  "AbbreviatedDayNames":["DiD", "DiL", "DiM", "DiC", "Dia", "Dih", "DiS"],
  "ShortestDayNames":["D", "L", "M", "C", "A", "H", "S"],    
  "FirstDayOfWeek":1
},
"gd-GB":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d'mh' MMMM",
  "MonthNames":["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd", ""],
  "DayNames":["DiDòmhnaich", "DiLuain", "DiMàirt", "DiCiadain", "DiarDaoin", "DihAoine", "DiSathairne"],
  "AbbreviatedDayNames":["DiD", "DiL", "DiM", "DiC", "Dia", "Dih", "DiS"],
  "ShortestDayNames":["D", "L", "M", "C", "A", "H", "S"],    
  "FirstDayOfWeek":1
},
"gl":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro", ""],
  "DayNames":["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"],
  "AbbreviatedDayNames":["Dom.", "Luns", "Mar.", "Mér.", "Xov.", "Ven.", "Sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "X", "V", "S"],    
  "FirstDayOfWeek":1
},
"gl-ES":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro", ""],
  "DayNames":["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"],
  "AbbreviatedDayNames":["Dom.", "Luns", "Mar.", "Mér.", "Xov.", "Ven.", "Sáb."],
  "ShortestDayNames":["D", "L", "M", "M", "X", "V", "S"],    
  "FirstDayOfWeek":1
},
"gn":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"gn-PY":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"gu":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"hh:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટોબર", "નવેમ્બર", "ડિસેમ્બર", ""],
  "DayNames":["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"],
  "AbbreviatedDayNames":["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
  "ShortestDayNames":["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"],    
  "FirstDayOfWeek":0
},
"gu-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"hh:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટોબર", "નવેમ્બર", "ડિસેમ્બર", ""],
  "DayNames":["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"],
  "AbbreviatedDayNames":["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
  "ShortestDayNames":["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"],    
  "FirstDayOfWeek":0
},
"gv":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Jerrey-geuree", "Toshiaght-arree", "Mayrnt", "Averil", "Boaldyn", "Mean-souree", "Jerrey-souree", "Luanistyn", "Mean-fouyir", "Jerrey-fouyir", "Mee Houney", "Mee ny Nollick", ""],
  "DayNames":["Jedoonee", "Jelhein", "Jemayrt", "Jercean", "Jerdein", "Jeheiney", "Jesarn"],
  "AbbreviatedDayNames":["Jed", "Jel", "Jem", "Jerc", "Jerd", "Jeh", "Jes"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"gv-IM":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Jerrey-geuree", "Toshiaght-arree", "Mayrnt", "Averil", "Boaldyn", "Mean-souree", "Jerrey-souree", "Luanistyn", "Mean-fouyir", "Jerrey-fouyir", "Mee Houney", "Mee ny Nollick", ""],
  "DayNames":["Jedoonee", "Jelhein", "Jemayrt", "Jercean", "Jerdein", "Jeheiney", "Jesarn"],
  "AbbreviatedDayNames":["Jed", "Jel", "Jem", "Jerc", "Jerd", "Jeh", "Jes"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ha":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba", ""],
  "DayNames":["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jummaʼa", "Asabar"],
  "AbbreviatedDayNames":["Lah", "Lit", "Tal", "Lar", "Alh", "Jum", "Asa"],
  "ShortestDayNames":["L", "L", "T", "L", "A", "J", "A"],    
  "FirstDayOfWeek":1
},
"ha-GH":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba", ""],
  "DayNames":["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jummaʼa", "Asabar"],
  "AbbreviatedDayNames":["Lah", "Lit", "Tal", "Lar", "Alh", "Jum", "Asa"],
  "ShortestDayNames":["L", "L", "T", "L", "A", "J", "A"],    
  "FirstDayOfWeek":1
},
"ha-NE":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba", ""],
  "DayNames":["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jummaʼa", "Asabar"],
  "AbbreviatedDayNames":["Lah", "Lit", "Tal", "Lar", "Alh", "Jum", "Asa"],
  "ShortestDayNames":["L", "L", "T", "L", "A", "J", "A"],    
  "FirstDayOfWeek":1
},
"ha-NG":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba", ""],
  "DayNames":["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jummaʼa", "Asabar"],
  "AbbreviatedDayNames":["Lah", "Lit", "Tal", "Lar", "Alh", "Jum", "Asa"],
  "ShortestDayNames":["L", "L", "T", "L", "A", "J", "A"],    
  "FirstDayOfWeek":1
},
"he":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d בMMMM",
  "MonthNames":["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר", ""],
  "DayNames":["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"],
  "AbbreviatedDayNames":["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"],
  "ShortestDayNames":["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],    
  "FirstDayOfWeek":0
},
"he-IL":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d בMMMM",
  "MonthNames":["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר", ""],
  "DayNames":["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"],
  "AbbreviatedDayNames":["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"],
  "ShortestDayNames":["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],    
  "FirstDayOfWeek":0
},
"hi":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", "दिसंबर", ""],
  "DayNames":["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  "AbbreviatedDayNames":["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
  "ShortestDayNames":["र", "सो", "मं", "बु", "गु", "शु", "श"],    
  "FirstDayOfWeek":0
},
"hi-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", "दिसंबर", ""],
  "DayNames":["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  "AbbreviatedDayNames":["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
  "ShortestDayNames":["र", "सो", "मं", "बु", "गु", "शु", "श"],    
  "FirstDayOfWeek":0
},
"hr":{ 
  "ShortDatePattern":"dd. MM. yyyy.",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac", ""],
  "DayNames":["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
  "AbbreviatedDayNames":["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
  "ShortestDayNames":["n", "p", "u", "s", "č", "p", "s"],    
  "FirstDayOfWeek":1
},
"hr-BA":{ 
  "ShortDatePattern":"d. M. yyyy.",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac", ""],
  "DayNames":["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
  "AbbreviatedDayNames":["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
  "ShortestDayNames":["N", "P", "U", "S", "Č", "P", "S"],    
  "FirstDayOfWeek":1
},
"hr-HR":{ 
  "ShortDatePattern":"dd. MM. yyyy.",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac", ""],
  "DayNames":["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
  "AbbreviatedDayNames":["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
  "ShortestDayNames":["n", "p", "u", "s", "č", "p", "s"],    
  "FirstDayOfWeek":1
},
"hu":{ 
  "ShortDatePattern":"yyyy. MM. dd.",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"MMMM d.",
  "MonthNames":["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december", ""],
  "DayNames":["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
  "AbbreviatedDayNames":["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  "ShortestDayNames":["V", "H", "K", "Sz", "Cs", "P", "Sz"],    
  "FirstDayOfWeek":1
},
"hu-HU":{ 
  "ShortDatePattern":"yyyy. MM. dd.",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"MMMM d.",
  "MonthNames":["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december", ""],
  "DayNames":["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
  "AbbreviatedDayNames":["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  "ShortestDayNames":["V", "H", "K", "Sz", "Cs", "P", "Sz"],    
  "FirstDayOfWeek":1
},
"hy":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր", ""],
  "DayNames":["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"],
  "AbbreviatedDayNames":["կիր", "երկ", "երք", "չրք", "հնգ", "ուր", "շբթ"],
  "ShortestDayNames":["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"],    
  "FirstDayOfWeek":1
},
"hy-AM":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր", ""],
  "DayNames":["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"],
  "AbbreviatedDayNames":["կիր", "երկ", "երք", "չրք", "հնգ", "ուր", "շբթ"],
  "ShortestDayNames":["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"],    
  "FirstDayOfWeek":1
},
"ia":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["januario", "februario", "martio", "april", "maio", "junio", "julio", "augusto", "septembre", "octobre", "novembre", "decembre", ""],
  "DayNames":["dominica", "lunedi", "martedi", "mercuridi", "jovedi", "venerdi", "sabbato"],
  "AbbreviatedDayNames":["dom", "lun", "mar", "mer", "jov", "ven", "sab"],
  "ShortestDayNames":["d", "l", "m", "m", "j", "v", "s"],    
  "FirstDayOfWeek":1
},
"id":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember", ""],
  "DayNames":["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  "AbbreviatedDayNames":["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  "ShortestDayNames":["M", "S", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":0
},
"id-ID":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember", ""],
  "DayNames":["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  "AbbreviatedDayNames":["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  "ShortestDayNames":["M", "S", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":0
},
"ig":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Jenụwarị", "Febrụwarị", "Maachị", "Epreel", "Mee", "Juun", "Julaị", "Ọgọọst", "Septemba", "Ọktoba", "Novemba", "Disemba", ""],
  "DayNames":["Ụbọchị Ụka", "Mọnde", "Tiuzdee", "Wenezdee", "Tọọzdee", "Fraịdee", "Satọdee"],
  "AbbreviatedDayNames":["Ụka", "Mọn", "Tiu", "Wen", "Tọọ", "Fraị", "Satọdee"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ig-NG":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Jenụwarị", "Febrụwarị", "Maachị", "Epreel", "Mee", "Juun", "Julaị", "Ọgọọst", "Septemba", "Ọktoba", "Novemba", "Disemba", ""],
  "DayNames":["Ụbọchị Ụka", "Mọnde", "Tiuzdee", "Wenezdee", "Tọọzdee", "Fraịdee", "Satọdee"],
  "AbbreviatedDayNames":["Ụka", "Mọn", "Tiu", "Wen", "Tọọ", "Fraị", "Satọdee"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ii":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ꋍꆪ", "ꑍꆪ", "ꌕꆪ", "ꇖꆪ", "ꉬꆪ", "ꃘꆪ", "ꏃꆪ", "ꉆꆪ", "ꈬꆪ", "ꊰꆪ", "ꊰꊪꆪ", "ꊰꑋꆪ", ""],
  "DayNames":["ꑭꆏꑍ", "ꆏꊂꋍ", "ꆏꊂꑍ", "ꆏꊂꌕ", "ꆏꊂꇖ", "ꆏꊂꉬ", "ꆏꊂꃘ"],
  "AbbreviatedDayNames":["ꑭꆏ", "ꆏꋍ", "ꆏꑍ", "ꆏꌕ", "ꆏꇖ", "ꆏꉬ", "ꆏꃘ"],
  "ShortestDayNames":["ꆏ", "ꋍ", "ꑍ", "ꌕ", "ꇖ", "ꉬ", "ꃘ"],    
  "FirstDayOfWeek":0
},
"ii-CN":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ꋍꆪ", "ꑍꆪ", "ꌕꆪ", "ꇖꆪ", "ꉬꆪ", "ꃘꆪ", "ꏃꆪ", "ꉆꆪ", "ꈬꆪ", "ꊰꆪ", "ꊰꊪꆪ", "ꊰꑋꆪ", ""],
  "DayNames":["ꑭꆏꑍ", "ꆏꊂꋍ", "ꆏꊂꑍ", "ꆏꊂꌕ", "ꆏꊂꇖ", "ꆏꊂꉬ", "ꆏꊂꃘ"],
  "AbbreviatedDayNames":["ꑭꆏ", "ꆏꋍ", "ꆏꑍ", "ꆏꌕ", "ꆏꇖ", "ꆏꉬ", "ꆏꃘ"],
  "ShortestDayNames":["ꆏ", "ꋍ", "ꑍ", "ꌕ", "ꇖ", "ꉬ", "ꃘ"],    
  "FirstDayOfWeek":0
},
"is":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember", ""],
  "DayNames":["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"],
  "AbbreviatedDayNames":["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."],
  "ShortestDayNames":["S", "M", "Þ", "M", "F", "F", "L"],    
  "FirstDayOfWeek":1
},
"is-IS":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember", ""],
  "DayNames":["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"],
  "AbbreviatedDayNames":["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."],
  "ShortestDayNames":["S", "M", "Þ", "M", "F", "F", "L"],    
  "FirstDayOfWeek":1
},
"it":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""],
  "DayNames":["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
  "AbbreviatedDayNames":["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  "ShortestDayNames":["D", "L", "M", "M", "G", "V", "S"],    
  "FirstDayOfWeek":1
},
"it-CH":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""],
  "DayNames":["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
  "AbbreviatedDayNames":["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  "ShortestDayNames":["D", "L", "M", "M", "G", "V", "S"],    
  "FirstDayOfWeek":1
},
"it-IT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""],
  "DayNames":["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
  "AbbreviatedDayNames":["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  "ShortestDayNames":["D", "L", "M", "M", "G", "V", "S"],    
  "FirstDayOfWeek":1
},
"it-SM":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""],
  "DayNames":["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
  "AbbreviatedDayNames":["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  "ShortestDayNames":["D", "L", "M", "M", "G", "V", "S"],    
  "FirstDayOfWeek":1
},
"it-VA":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""],
  "DayNames":["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
  "AbbreviatedDayNames":["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  "ShortestDayNames":["D", "L", "M", "M", "G", "V", "S"],    
  "FirstDayOfWeek":1
},
"iu":{ 
  "ShortDatePattern":"MM/dd/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"iu-CA":{ 
  "ShortDatePattern":"MM/dd/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"ja":{ 
  "ShortDatePattern":"yyyy/MM/dd",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"M月d日",
  "MonthNames":["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ""],
  "DayNames":["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
  "AbbreviatedDayNames":["日", "月", "火", "水", "木", "金", "土"],
  "ShortestDayNames":["日", "月", "火", "水", "木", "金", "土"],    
  "FirstDayOfWeek":0
},
"ja-JP":{ 
  "ShortDatePattern":"yyyy/MM/dd",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"M月d日",
  "MonthNames":["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ""],
  "DayNames":["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
  "AbbreviatedDayNames":["日", "月", "火", "水", "木", "金", "土"],
  "ShortestDayNames":["日", "月", "火", "水", "木", "金", "土"],    
  "FirstDayOfWeek":0
},
"jv":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember", ""],
  "DayNames":["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  "AbbreviatedDayNames":["Ahd", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  "ShortestDayNames":["A", "S", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":0
},
"jv-ID":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember", ""],
  "DayNames":["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  "AbbreviatedDayNames":["Ahd", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  "ShortestDayNames":["A", "S", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":0
},
"ka":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი", ""],
  "DayNames":["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
  "AbbreviatedDayNames":["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
  "ShortestDayNames":["კ", "ო", "ს", "ო", "ხ", "პ", "შ"],    
  "FirstDayOfWeek":1
},
"ka-GE":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი", ""],
  "DayNames":["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
  "AbbreviatedDayNames":["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
  "ShortestDayNames":["კ", "ო", "ს", "ო", "ხ", "პ", "შ"],    
  "FirstDayOfWeek":1
},
"ki":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Njenuarĩ", "Mwere wa kerĩ", "Mwere wa gatatũ", "Mwere wa kana", "Mwere wa gatano", "Mwere wa gatandatũ", "Mwere wa mũgwanja", "Mwere wa kanana", "Mwere wa kenda", "Mwere wa ikũmi", "Mwere wa ikũmi na ũmwe", "Ndithemba", ""],
  "DayNames":["Kiumia", "Njumatatũ", "Njumaine", "Njumatana", "Aramithi", "Njumaa", "Njumamothi"],
  "AbbreviatedDayNames":["KMA", "NTT", "NMN", "NMT", "ART", "NMA", "NMM"],
  "ShortestDayNames":["K", "N", "N", "N", "A", "N", "N"],    
  "FirstDayOfWeek":0
},
"ki-KE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Njenuarĩ", "Mwere wa kerĩ", "Mwere wa gatatũ", "Mwere wa kana", "Mwere wa gatano", "Mwere wa gatandatũ", "Mwere wa mũgwanja", "Mwere wa kanana", "Mwere wa kenda", "Mwere wa ikũmi", "Mwere wa ikũmi na ũmwe", "Ndithemba", ""],
  "DayNames":["Kiumia", "Njumatatũ", "Njumaine", "Njumatana", "Aramithi", "Njumaa", "Njumamothi"],
  "AbbreviatedDayNames":["KMA", "NTT", "NMN", "NMT", "ART", "NMA", "NMM"],
  "ShortestDayNames":["K", "N", "N", "N", "A", "N", "N"],    
  "FirstDayOfWeek":0
},
"kk":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан", ""],
  "DayNames":["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"],
  "AbbreviatedDayNames":["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
  "ShortestDayNames":["Ж", "Д", "С", "С", "Б", "Ж", "С"],    
  "FirstDayOfWeek":1
},
"kk-KZ":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан", ""],
  "DayNames":["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"],
  "AbbreviatedDayNames":["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
  "ShortestDayNames":["Ж", "Д", "С", "С", "Б", "Ж", "С"],    
  "FirstDayOfWeek":1
},
"kl":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["januari", "februari", "martsi", "aprili", "maji", "juni", "juli", "augustusi", "septemberi", "oktoberi", "novemberi", "decemberi", ""],
  "DayNames":["sapaat", "ataasinngorneq", "marlunngorneq", "pingasunngorneq", "sisamanngorneq", "tallimanngorneq", "arfininngorneq"],
  "AbbreviatedDayNames":["sap", "ata", "mar", "pin", "sis", "tal", "arf"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"kl-GL":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["januari", "februari", "martsi", "aprili", "maji", "juni", "juli", "augustusi", "septemberi", "oktoberi", "novemberi", "decemberi", ""],
  "DayNames":["sapaat", "ataasinngorneq", "marlunngorneq", "pingasunngorneq", "sisamanngorneq", "tallimanngorneq", "arfininngorneq"],
  "AbbreviatedDayNames":["sap", "ata", "mar", "pin", "sis", "tal", "arf"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"km":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ", ""],
  "DayNames":["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"],
  "AbbreviatedDayNames":["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហ", "សុក្រ", "សៅរ៍"],
  "ShortestDayNames":["អ", "ច", "អ", "ព", "ព", "ស", "ស"],    
  "FirstDayOfWeek":0
},
"km-KH":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ", ""],
  "DayNames":["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"],
  "AbbreviatedDayNames":["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហ", "សុក្រ", "សៅរ៍"],
  "ShortestDayNames":["អ", "ច", "អ", "ព", "ព", "ស", "ស"],    
  "FirstDayOfWeek":0
},
"kn":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"hh:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್", ""],
  "DayNames":["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"],
  "AbbreviatedDayNames":["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
  "ShortestDayNames":["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"],    
  "FirstDayOfWeek":0
},
"kn-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"hh:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್", ""],
  "DayNames":["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"],
  "AbbreviatedDayNames":["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
  "ShortestDayNames":["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"],    
  "FirstDayOfWeek":0
},
"ko":{ 
  "ShortDatePattern":"yyyy. M. d.",
  "ShortTimePattern":"tt h:mm",
  "MonthDayPattern":"MMMM d일",
  "MonthNames":["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월", ""],
  "DayNames":["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  "AbbreviatedDayNames":["일", "월", "화", "수", "목", "금", "토"],
  "ShortestDayNames":["일", "월", "화", "수", "목", "금", "토"],    
  "FirstDayOfWeek":0
},
"ko-KP":{ 
  "ShortDatePattern":"yyyy. M. d.",
  "ShortTimePattern":"tt h:mm",
  "MonthDayPattern":"MMMM d일",
  "MonthNames":["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월", ""],
  "DayNames":["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  "AbbreviatedDayNames":["일", "월", "화", "수", "목", "금", "토"],
  "ShortestDayNames":["일", "월", "화", "수", "목", "금", "토"],    
  "FirstDayOfWeek":1
},
"ko-KR":{ 
  "ShortDatePattern":"yyyy. M. d.",
  "ShortTimePattern":"tt h:mm",
  "MonthDayPattern":"MMMM d일",
  "MonthNames":["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월", ""],
  "DayNames":["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  "AbbreviatedDayNames":["일", "월", "화", "수", "목", "금", "토"],
  "ShortestDayNames":["일", "월", "화", "수", "목", "금", "토"],    
  "FirstDayOfWeek":0
},
"ks":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["جنؤری", "فرؤری", "مارٕچ", "اپریل", "میٔ", "جوٗن", "جوٗلایی", "اگست", "ستمبر", "اکتوٗبر", "نومبر", "دسمبر", ""],
  "DayNames":["اَتھوار", "ژٔندرٕروار", "بۆموار", "بودوار", "برؠسوار", "جُمہ", "بٹوار"],
  "AbbreviatedDayNames":["آتھوار", "ژٔندٕروار", "بۆموار", "بودوار", "برؠسوار", "جُمہ", "بٹوار"],
  "ShortestDayNames":["ا", "ژ", "ب", "ب", "ب", "ج", "ب"],    
  "FirstDayOfWeek":0
},
"ks-IN":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["جنؤری", "فرؤری", "مارٕچ", "اپریل", "میٔ", "جوٗن", "جوٗلایی", "اگست", "ستمبر", "اکتوٗبر", "نومبر", "دسمبر", ""],
  "DayNames":["اَتھوار", "ژٔندرٕروار", "بۆموار", "بودوار", "برؠسوار", "جُمہ", "بٹوار"],
  "AbbreviatedDayNames":["آتھوار", "ژٔندٕروار", "بۆموار", "بودوار", "برؠسوار", "جُمہ", "بٹوار"],
  "ShortestDayNames":["ا", "ژ", "ب", "ب", "ب", "ج", "ب"],    
  "FirstDayOfWeek":0
},
"kw":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["mis Genver", "mis Hwevrer", "mis Meurth", "mis Ebrel", "mis Me", "mis Metheven", "mis Gortheren", "mis Est", "mis Gwynngala", "mis Hedra", "mis Du", "mis Kevardhu", ""],
  "DayNames":["dy Sul", "dy Lun", "dy Meurth", "dy Merher", "dy Yow", "dy Gwener", "dy Sadorn"],
  "AbbreviatedDayNames":["Sul", "Lun", "Mth", "Mhr", "Yow", "Gwe", "Sad"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"kw-GB":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["mis Genver", "mis Hwevrer", "mis Meurth", "mis Ebrel", "mis Me", "mis Metheven", "mis Gortheren", "mis Est", "mis Gwynngala", "mis Hedra", "mis Du", "mis Kevardhu", ""],
  "DayNames":["dy Sul", "dy Lun", "dy Meurth", "dy Merher", "dy Yow", "dy Gwener", "dy Sadorn"],
  "AbbreviatedDayNames":["Sul", "Lun", "Mth", "Mhr", "Yow", "Gwe", "Sad"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ky":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d-MMMM",
  "MonthNames":["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
  "DayNames":["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"],
  "AbbreviatedDayNames":["жек.", "дүй.", "шейш.", "шарш.", "бейш.", "жума", "ишм."],
  "ShortestDayNames":["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"],    
  "FirstDayOfWeek":1
},
"ky-KG":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d-MMMM",
  "MonthNames":["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
  "DayNames":["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"],
  "AbbreviatedDayNames":["жек.", "дүй.", "шейш.", "шарш.", "бейш.", "жума", "ишм."],
  "ShortestDayNames":["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"],    
  "FirstDayOfWeek":1
},
"lb":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"],
  "AbbreviatedDayNames":["Son", "Méi", "Dën", "Mët", "Don", "Fre", "Sam"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"lb-LU":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
  "DayNames":["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"],
  "AbbreviatedDayNames":["Son", "Méi", "Dën", "Mët", "Don", "Fre", "Sam"],
  "ShortestDayNames":["S", "M", "D", "M", "D", "F", "S"],    
  "FirstDayOfWeek":1
},
"lg":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janwaliyo", "Febwaliyo", "Marisi", "Apuli", "Maayi", "Juuni", "Julaayi", "Agusito", "Sebuttemba", "Okitobba", "Novemba", "Desemba", ""],
  "DayNames":["Sabbiiti", "Balaza", "Lwakubiri", "Lwakusatu", "Lwakuna", "Lwakutaano", "Lwamukaaga"],
  "AbbreviatedDayNames":["Sab", "Bal", "Lw2", "Lw3", "Lw4", "Lw5", "Lw6"],
  "ShortestDayNames":["S", "B", "L", "L", "L", "L", "L"],    
  "FirstDayOfWeek":1
},
"lg-UG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janwaliyo", "Febwaliyo", "Marisi", "Apuli", "Maayi", "Juuni", "Julaayi", "Agusito", "Sebuttemba", "Okitobba", "Novemba", "Desemba", ""],
  "DayNames":["Sabbiiti", "Balaza", "Lwakubiri", "Lwakusatu", "Lwakuna", "Lwakutaano", "Lwamukaaga"],
  "AbbreviatedDayNames":["Sab", "Bal", "Lw2", "Lw3", "Lw4", "Lw5", "Lw6"],
  "ShortestDayNames":["S", "B", "L", "L", "L", "L", "L"],    
  "FirstDayOfWeek":1
},
"ln":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé", ""],
  "DayNames":["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"],
  "AbbreviatedDayNames":["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"],
  "ShortestDayNames":["e", "y", "m", "m", "m", "m", "p"],    
  "FirstDayOfWeek":1
},
"ln-AO":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé", ""],
  "DayNames":["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"],
  "AbbreviatedDayNames":["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"],
  "ShortestDayNames":["e", "y", "m", "m", "m", "m", "p"],    
  "FirstDayOfWeek":1
},
"ln-CD":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé", ""],
  "DayNames":["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"],
  "AbbreviatedDayNames":["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"],
  "ShortestDayNames":["e", "y", "m", "m", "m", "m", "p"],    
  "FirstDayOfWeek":1
},
"ln-CF":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé", ""],
  "DayNames":["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"],
  "AbbreviatedDayNames":["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"],
  "ShortestDayNames":["e", "y", "m", "m", "m", "m", "p"],    
  "FirstDayOfWeek":1
},
"ln-CG":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé", ""],
  "DayNames":["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"],
  "AbbreviatedDayNames":["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"],
  "ShortestDayNames":["e", "y", "m", "m", "m", "m", "p"],    
  "FirstDayOfWeek":1
},
"lo":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ", ""],
  "DayNames":["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ", "ວັນພະຫັດ", "ວັນສຸກ", "ວັນເສົາ"],
  "AbbreviatedDayNames":["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"],
  "ShortestDayNames":["ອາ", "ຈ", "ອ", "ພ", "ພຫ", "ສຸ", "ສ"],    
  "FirstDayOfWeek":0
},
"lo-LA":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ", ""],
  "DayNames":["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ", "ວັນພະຫັດ", "ວັນສຸກ", "ວັນເສົາ"],
  "AbbreviatedDayNames":["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"],
  "ShortestDayNames":["ອາ", "ຈ", "ອ", "ພ", "ພຫ", "ສຸ", "ສ"],    
  "FirstDayOfWeek":0
},
"lt":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d 'd'.",
  "MonthNames":["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis", ""],
  "DayNames":["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
  "AbbreviatedDayNames":["sk", "pr", "an", "tr", "kt", "pn", "št"],
  "ShortestDayNames":["S", "P", "A", "T", "K", "P", "Š"],    
  "FirstDayOfWeek":1
},
"lt-LT":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d 'd'.",
  "MonthNames":["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis", ""],
  "DayNames":["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
  "AbbreviatedDayNames":["sk", "pr", "an", "tr", "kt", "pn", "št"],
  "ShortestDayNames":["S", "P", "A", "T", "K", "P", "Š"],    
  "FirstDayOfWeek":1
},
"lu":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ciongo", "Lùishi", "Lusòlo", "Mùuyà", "Lumùngùlù", "Lufuimi", "Kabàlàshìpù", "Lùshìkà", "Lutongolo", "Lungùdi", "Kaswèkèsè", "Ciswà", ""],
  "DayNames":["Lumingu", "Nkodya", "Ndàayà", "Ndangù", "Njòwa", "Ngòvya", "Lubingu"],
  "AbbreviatedDayNames":["Lum", "Nko", "Ndy", "Ndg", "Njw", "Ngv", "Lub"],
  "ShortestDayNames":["L", "N", "N", "N", "N", "N", "L"],    
  "FirstDayOfWeek":1
},
"lu-CD":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ciongo", "Lùishi", "Lusòlo", "Mùuyà", "Lumùngùlù", "Lufuimi", "Kabàlàshìpù", "Lùshìkà", "Lutongolo", "Lungùdi", "Kaswèkèsè", "Ciswà", ""],
  "DayNames":["Lumingu", "Nkodya", "Ndàayà", "Ndangù", "Njòwa", "Ngòvya", "Lubingu"],
  "AbbreviatedDayNames":["Lum", "Nko", "Ndy", "Ndg", "Njw", "Ngv", "Lub"],
  "ShortestDayNames":["L", "N", "N", "N", "N", "N", "L"],    
  "FirstDayOfWeek":1
},
"lv":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris", ""],
  "DayNames":["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
  "AbbreviatedDayNames":["Svētd.", "Pirmd.", "Otrd.", "Trešd.", "Ceturtd.", "Piektd.", "Sestd."],
  "ShortestDayNames":["S", "P", "O", "T", "C", "P", "S"],    
  "FirstDayOfWeek":1
},
"lv-LV":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris", ""],
  "DayNames":["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
  "AbbreviatedDayNames":["Svētd.", "Pirmd.", "Otrd.", "Trešd.", "Ceturtd.", "Piektd.", "Sestd."],
  "ShortestDayNames":["S", "P", "O", "T", "C", "P", "S"],    
  "FirstDayOfWeek":1
},
"mg":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona", "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra", ""],
  "DayNames":["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Asabotsy"],
  "AbbreviatedDayNames":["Alah", "Alats", "Tal", "Alar", "Alak", "Zom", "Asab"],
  "ShortestDayNames":["A", "A", "T", "A", "A", "Z", "A"],    
  "FirstDayOfWeek":1
},
"mg-MG":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona", "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra", ""],
  "DayNames":["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Asabotsy"],
  "AbbreviatedDayNames":["Alah", "Alats", "Tal", "Alar", "Alak", "Zom", "Asab"],
  "ShortestDayNames":["A", "A", "T", "A", "A", "Z", "A"],    
  "FirstDayOfWeek":1
},
"mi":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Kohitātea", "Huitanguru", "Poutūterangi", "Paengawhāwhā", "Haratua", "Pipiri", "Hōngongoi", "Hereturikōkā", "Mahuru", "Whiringa-ā-nuku", "Whiringa-ā-rangi", "Hakihea", ""],
  "DayNames":["Rātapu", "Rāhina", "Rātū", "Rāapa", "Rāpare", "Rāmere", "Rāhoroi"],
  "AbbreviatedDayNames":["Tap", "Hin", "Tū", "Apa", "Par", "Mer", "Hor"],
  "ShortestDayNames":["T", "H", "T", "A", "P", "M", "H"],    
  "FirstDayOfWeek":1
},
"mi-NZ":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Kohitātea", "Huitanguru", "Poutūterangi", "Paengawhāwhā", "Haratua", "Pipiri", "Hōngongoi", "Hereturikōkā", "Mahuru", "Whiringa-ā-nuku", "Whiringa-ā-rangi", "Hakihea", ""],
  "DayNames":["Rātapu", "Rāhina", "Rātū", "Rāapa", "Rāpare", "Rāmere", "Rāhoroi"],
  "AbbreviatedDayNames":["Tap", "Hin", "Tū", "Apa", "Par", "Mer", "Hor"],
  "ShortestDayNames":["T", "H", "T", "A", "P", "M", "H"],    
  "FirstDayOfWeek":1
},
"mk":{ 
  "ShortDatePattern":"dd.M.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември", ""],
  "DayNames":["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
  "AbbreviatedDayNames":["нед.", "пон.", "вто.", "сре.", "чет.", "пет.", "саб."],
  "ShortestDayNames":["н", "п", "в", "с", "ч", "п", "с"],    
  "FirstDayOfWeek":1
},
"mk-MK":{ 
  "ShortDatePattern":"dd.M.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември", ""],
  "DayNames":["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
  "AbbreviatedDayNames":["нед.", "пон.", "вто.", "сре.", "чет.", "пет.", "саб."],
  "ShortestDayNames":["н", "п", "в", "с", "ч", "п", "с"],    
  "FirstDayOfWeek":1
},
"ml":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്‌ടോബർ", "നവംബർ", "ഡിസംബർ", ""],
  "DayNames":["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്‌ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", "ശനിയാഴ്‌ച"],
  "AbbreviatedDayNames":["ഞായർ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "വെള്ളി", "ശനി"],
  "ShortestDayNames":["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"],    
  "FirstDayOfWeek":0
},
"ml-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്‌ടോബർ", "നവംബർ", "ഡിസംബർ", ""],
  "DayNames":["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്‌ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", "ശനിയാഴ്‌ച"],
  "AbbreviatedDayNames":["ഞായർ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "വെള്ളി", "ശനി"],
  "ShortestDayNames":["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"],    
  "FirstDayOfWeek":0
},
"mn":{ 
  "ShortDatePattern":"yyyy.MM.dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM'ын' d",
  "MonthNames":["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долоодугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арван нэгдүгээр сар", "Арван хоёрдугаар сар", ""],
  "DayNames":["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"],
  "AbbreviatedDayNames":["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
  "ShortestDayNames":["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],    
  "FirstDayOfWeek":1
},
"mn-MN":{ 
  "ShortDatePattern":"yyyy.MM.dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM'ын' d",
  "MonthNames":["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долоодугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арван нэгдүгээр сар", "Арван хоёрдугаар сар", ""],
  "DayNames":["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"],
  "AbbreviatedDayNames":["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
  "ShortestDayNames":["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],    
  "FirstDayOfWeek":1
},
"mr":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर", ""],
  "DayNames":["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  "AbbreviatedDayNames":["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"],
  "ShortestDayNames":["र", "सो", "मं", "बु", "गु", "शु", "श"],    
  "FirstDayOfWeek":0
},
"mr-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर", ""],
  "DayNames":["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  "AbbreviatedDayNames":["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"],
  "ShortestDayNames":["र", "सो", "मं", "बु", "गु", "शु", "श"],    
  "FirstDayOfWeek":0
},
"ms":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember", ""],
  "DayNames":["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
  "AbbreviatedDayNames":["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
  "ShortestDayNames":["A", "I", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":1
},
"ms-BN":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember", ""],
  "DayNames":["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
  "AbbreviatedDayNames":["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
  "ShortestDayNames":["A", "I", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":1
},
"ms-MY":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember", ""],
  "DayNames":["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
  "AbbreviatedDayNames":["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
  "ShortestDayNames":["A", "I", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":1
},
"ms-SG":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember", ""],
  "DayNames":["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
  "AbbreviatedDayNames":["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
  "ShortestDayNames":["A", "I", "S", "R", "K", "J", "S"],    
  "FirstDayOfWeek":0
},
"mt":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'ta'’ MMMM",
  "MonthNames":["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru", ""],
  "DayNames":["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"],
  "AbbreviatedDayNames":["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
  "ShortestDayNames":["Ħd", "Tn", "Tl", "Er", "Ħm", "Ġm", "Sb"],    
  "FirstDayOfWeek":0
},
"mt-MT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'ta'’ MMMM",
  "MonthNames":["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru", ""],
  "DayNames":["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"],
  "AbbreviatedDayNames":["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
  "ShortestDayNames":["Ħd", "Tn", "Tl", "Er", "Ħm", "Ġm", "Sb"],    
  "FirstDayOfWeek":0
},
"my":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":" H:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ", ""],
  "DayNames":["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"],
  "AbbreviatedDayNames":["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"],
  "ShortestDayNames":["တ", "တ", "အ", "ဗ", "က", "သ", "စ"],    
  "FirstDayOfWeek":0
},
"my-MM":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":" H:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ", ""],
  "DayNames":["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"],
  "AbbreviatedDayNames":["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"],
  "ShortestDayNames":["တ", "တ", "အ", "ဗ", "က", "သ", "စ"],    
  "FirstDayOfWeek":0
},
"nb":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
  "AbbreviatedDayNames":["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"nb-NO":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
  "AbbreviatedDayNames":["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"nb-SJ":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
  "AbbreviatedDayNames":["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"nd":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Zibandlela", "Nhlolanja", "Mbimbitho", "Mabasa", "Nkwenkwezi", "Nhlangula", "Ntulikazi", "Ncwabakazi", "Mpandula", "Mfumfu", "Lwezi", "Mpalakazi", ""],
  "DayNames":["Sonto", "Mvulo", "Sibili", "Sithathu", "Sine", "Sihlanu", "Mgqibelo"],
  "AbbreviatedDayNames":["Son", "Mvu", "Sib", "Sit", "Sin", "Sih", "Mgq"],
  "ShortestDayNames":["S", "M", "S", "S", "S", "S", "M"],    
  "FirstDayOfWeek":0
},
"nd-ZW":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Zibandlela", "Nhlolanja", "Mbimbitho", "Mabasa", "Nkwenkwezi", "Nhlangula", "Ntulikazi", "Ncwabakazi", "Mpandula", "Mfumfu", "Lwezi", "Mpalakazi", ""],
  "DayNames":["Sonto", "Mvulo", "Sibili", "Sithathu", "Sine", "Sihlanu", "Mgqibelo"],
  "AbbreviatedDayNames":["Son", "Mvu", "Sib", "Sit", "Sin", "Sih", "Mgq"],
  "ShortestDayNames":["S", "M", "S", "S", "S", "S", "M"],    
  "FirstDayOfWeek":0
},
"ne":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर", ""],
  "DayNames":["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"],
  "AbbreviatedDayNames":["आइत", "सोम", "मङ्गल", "बुध", "बिहि", "शुक्र", "शनि"],
  "ShortestDayNames":["आ", "सो", "म", "बु", "बि", "शु", "श"],    
  "FirstDayOfWeek":0
},
"ne-IN":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर", ""],
  "DayNames":["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"],
  "AbbreviatedDayNames":["आइत", "सोम", "मङ्गल", "बुध", "बिहि", "शुक्र", "शनि"],
  "ShortestDayNames":["आ", "सो", "म", "बु", "बि", "शु", "श"],    
  "FirstDayOfWeek":0
},
"ne-NP":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर", ""],
  "DayNames":["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"],
  "AbbreviatedDayNames":["आइत", "सोम", "मङ्गल", "बुध", "बिहि", "शुक्र", "शनि"],
  "ShortestDayNames":["आ", "सो", "म", "बु", "बि", "शु", "श"],    
  "FirstDayOfWeek":0
},
"nl":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nl-AW":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nl-BE":{ 
  "ShortDatePattern":"d/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nl-BQ":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nl-CW":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nl-NL":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nl-SR":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nl-SX":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""],
  "DayNames":["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  "AbbreviatedDayNames":["zo", "ma", "di", "wo", "do", "vr", "za"],
  "ShortestDayNames":["Z", "M", "D", "W", "D", "V", "Z"],    
  "FirstDayOfWeek":1
},
"nn":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["søndag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
  "AbbreviatedDayNames":["søn", "mån", "tys", "ons", "tor", "fre", "lau"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"nn-NO":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember", ""],
  "DayNames":["søndag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
  "AbbreviatedDayNames":["søn", "mån", "tys", "ons", "tor", "fre", "lau"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"nr":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"nr-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"oc":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"oc-FR":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"om":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Amajjii", "Guraandhala", "Bitooteessa", "Elba", "Caamsa", "Waxabajjii", "Adooleessa", "Hagayya", "Fuulbana", "Onkololeessa", "Sadaasa", "Muddee", ""],
  "DayNames":["Dilbata", "Wiixata", "Qibxata", "Roobii", "Kamiisa", "Jimaata", "Sanbata"],
  "AbbreviatedDayNames":["Dil", "Wix", "Qib", "Rob", "Kam", "Jim", "San"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"om-ET":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Amajjii", "Guraandhala", "Bitooteessa", "Elba", "Caamsa", "Waxabajjii", "Adooleessa", "Hagayya", "Fuulbana", "Onkololeessa", "Sadaasa", "Muddee", ""],
  "DayNames":["Dilbata", "Wiixata", "Qibxata", "Roobii", "Kamiisa", "Jimaata", "Sanbata"],
  "AbbreviatedDayNames":["Dil", "Wix", "Qib", "Rob", "Kam", "Jim", "San"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"om-KE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Amajjii", "Guraandhala", "Bitooteessa", "Elba", "Caamsa", "Waxabajjii", "Adooleessa", "Hagayya", "Fuulbana", "Onkololeessa", "Sadaasa", "Muddee", ""],
  "DayNames":["Dilbata", "Wiixata", "Qibxata", "Roobii", "Kamiisa", "Jimaata", "Sanbata"],
  "AbbreviatedDayNames":["Dil", "Wix", "Qib", "Rob", "Kam", "Jim", "San"],
  "ShortestDayNames":["D", "W", "Q", "R", "K", "J", "S"],    
  "FirstDayOfWeek":0
},
"or":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର", ""],
  "DayNames":["ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର"],
  "AbbreviatedDayNames":["ରବି", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ଗୁରୁ", "ଶୁକ୍ର", "ଶନି"],
  "ShortestDayNames":["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"],    
  "FirstDayOfWeek":0
},
"or-IN":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର", ""],
  "DayNames":["ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର"],
  "AbbreviatedDayNames":["ରବି", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ଗୁରୁ", "ଶୁକ୍ର", "ଶନି"],
  "ShortestDayNames":["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"],    
  "FirstDayOfWeek":0
},
"os":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Январь", "Февраль", "Мартъи", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
  "DayNames":["Хуыцаубон", "Къуырисӕр", "Дыццӕг", "Ӕртыццӕг", "Цыппӕрӕм", "Майрӕмбон", "Сабат"],
  "AbbreviatedDayNames":["Хцб", "Крс", "Дцг", "Ӕрт", "Цпр", "Мрб", "Сбт"],
  "ShortestDayNames":["Х", "К", "Д", "Ӕ", "Ц", "М", "С"],    
  "FirstDayOfWeek":1
},
"os-GE":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Январь", "Февраль", "Мартъи", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
  "DayNames":["Хуыцаубон", "Къуырисӕр", "Дыццӕг", "Ӕртыццӕг", "Цыппӕрӕм", "Майрӕмбон", "Сабат"],
  "AbbreviatedDayNames":["Хцб", "Крс", "Дцг", "Ӕрт", "Цпр", "Мрб", "Сбт"],
  "ShortestDayNames":["Х", "К", "Д", "Ӕ", "Ц", "М", "С"],    
  "FirstDayOfWeek":1
},
"os-RU":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Январь", "Февраль", "Мартъи", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
  "DayNames":["Хуыцаубон", "Къуырисӕр", "Дыццӕг", "Ӕртыццӕг", "Цыппӕрӕм", "Майрӕмбон", "Сабат"],
  "AbbreviatedDayNames":["Хцб", "Крс", "Дцг", "Ӕрт", "Цпр", "Мрб", "Сбт"],
  "ShortestDayNames":["Х", "К", "Д", "Ӕ", "Ц", "М", "С"],    
  "FirstDayOfWeek":1
},
"pa":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ", ""],
  "DayNames":["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"],
  "AbbreviatedDayNames":["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨਿੱਚਰ"],
  "ShortestDayNames":["ਐ", "ਸੋ", "ਮੰ", "ਬੁੱ", "ਵੀ", "ਸ਼ੁੱ", "ਸ਼"],    
  "FirstDayOfWeek":0
},
"pl":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień", ""],
  "DayNames":["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
  "AbbreviatedDayNames":["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  "ShortestDayNames":["N", "P", "W", "Ś", "C", "P", "S"],    
  "FirstDayOfWeek":1
},
"pl-PL":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień", ""],
  "DayNames":["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
  "AbbreviatedDayNames":["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  "ShortestDayNames":["N", "P", "W", "Ś", "C", "P", "S"],    
  "FirstDayOfWeek":1
},
"ps":{ 
  "ShortDatePattern":"g yyyy/M/d",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["وری", "غویی", "غبرگولی", "چنگاښ", "زمری", "وږی", "تله", "لړم", "لیندۍ", "مرغومی", "سلواغه", "کب", ""],
  "DayNames":["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"],
  "AbbreviatedDayNames":["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":6
},
"ps-AF":{ 
  "ShortDatePattern":"g yyyy/M/d",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["وری", "غویی", "غبرگولی", "چنگاښ", "زمری", "وږی", "تله", "لړم", "لیندۍ", "مرغومی", "سلواغه", "کب", ""],
  "DayNames":["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"],
  "AbbreviatedDayNames":["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":6
},
"ps-PK":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["جنوري", "فېبروري", "مارچ", "اپریل", "مۍ", "جون", "جولای", "اگست", "سپتمبر", "اکتوبر", "نومبر", "دسمبر", ""],
  "DayNames":["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"],
  "AbbreviatedDayNames":["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"pt":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":0
},
"pt-AO":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"pt-BR":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":0
},
"pt-CH":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"pt-CV":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"pt-GQ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"pt-GW":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"pt-LU":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"pt-MO":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":0
},
"pt-MZ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":0
},
"pt-PT":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":0
},
"pt-ST":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"pt-TL":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d 'de' MMMM",
  "MonthNames":["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
  "DayNames":["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
  "AbbreviatedDayNames":["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
  "ShortestDayNames":["D", "S", "T", "Q", "Q", "S", "S"],    
  "FirstDayOfWeek":1
},
"qu":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
  "DayNames":["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  "AbbreviatedDayNames":["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sab"],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"qu-BO":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
  "DayNames":["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  "AbbreviatedDayNames":["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sab"],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"qu-EC":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
  "DayNames":["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  "AbbreviatedDayNames":["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sab"],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"qu-PE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
  "DayNames":["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  "AbbreviatedDayNames":["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sab"],
  "ShortestDayNames":["D", "L", "M", "X", "J", "V", "S"],    
  "FirstDayOfWeek":0
},
"rm":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["schaner", "favrer", "mars", "avrigl", "matg", "zercladur", "fanadur", "avust", "settember", "october", "november", "december", ""],
  "DayNames":["dumengia", "glindesdi", "mardi", "mesemna", "gievgia", "venderdi", "sonda"],
  "AbbreviatedDayNames":["du", "gli", "ma", "me", "gie", "ve", "so"],
  "ShortestDayNames":["D", "G", "M", "M", "G", "V", "S"],    
  "FirstDayOfWeek":1
},
"rm-CH":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["schaner", "favrer", "mars", "avrigl", "matg", "zercladur", "fanadur", "avust", "settember", "october", "november", "december", ""],
  "DayNames":["dumengia", "glindesdi", "mardi", "mesemna", "gievgia", "venderdi", "sonda"],
  "AbbreviatedDayNames":["du", "gli", "ma", "me", "gie", "ve", "so"],
  "ShortestDayNames":["D", "G", "M", "M", "G", "V", "S"],    
  "FirstDayOfWeek":1
},
"rn":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Nzero", "Ruhuhuma", "Ntwarante", "Ndamukiza", "Rusama", "Ruheshi", "Mukakaro", "Nyandagaro", "Nyakanga", "Gitugutu", "Munyonyo", "Kigarama", ""],
  "DayNames":["Ku w’indwi", "Ku wa mbere", "Ku wa kabiri", "Ku wa gatatu", "Ku wa kane", "Ku wa gatanu", "Ku wa gatandatu"],
  "AbbreviatedDayNames":["cu.", "mbe.", "kab.", "gtu.", "kan.", "gnu.", "gnd."],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"rn-BI":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Nzero", "Ruhuhuma", "Ntwarante", "Ndamukiza", "Rusama", "Ruheshi", "Mukakaro", "Nyandagaro", "Nyakanga", "Gitugutu", "Munyonyo", "Kigarama", ""],
  "DayNames":["Ku w’indwi", "Ku wa mbere", "Ku wa kabiri", "Ku wa gatatu", "Ku wa kane", "Ku wa gatanu", "Ku wa gatandatu"],
  "AbbreviatedDayNames":["cu.", "mbe.", "kab.", "gtu.", "kan.", "gnu.", "gnd."],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ro":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie", ""],
  "DayNames":["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
  "AbbreviatedDayNames":["dum.", "lun.", "mar.", "mie.", "joi", "vin.", "sâm."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"ro-MD":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie", ""],
  "DayNames":["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
  "AbbreviatedDayNames":["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
  "ShortestDayNames":["D", "L", "Ma", "Mi", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"ro-RO":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie", ""],
  "DayNames":["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
  "AbbreviatedDayNames":["dum.", "lun.", "mar.", "mie.", "joi", "vin.", "sâm."],
  "ShortestDayNames":["D", "L", "M", "M", "J", "V", "S"],    
  "FirstDayOfWeek":1
},
"ru":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "AbbreviatedDayNames":["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["В", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"ru-BY":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "AbbreviatedDayNames":["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["В", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"ru-KG":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "AbbreviatedDayNames":["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["В", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"ru-KZ":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "AbbreviatedDayNames":["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["В", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"ru-MD":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "AbbreviatedDayNames":["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["В", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"ru-RU":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "AbbreviatedDayNames":["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["В", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"ru-UA":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "AbbreviatedDayNames":["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["В", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"rw":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Mutarama", "Gashyantare", "Werurwe", "Mata", "Gicuransi", "Kamena", "Nyakanga", "Kanama", "Nzeli", "Ukwakira", "Ugushyingo", "Ukuboza", ""],
  "DayNames":["Ku cyumweru", "Kuwa mbere", "Kuwa kabiri", "Kuwa gatatu", "Kuwa kane", "Kuwa gatanu", "Kuwa gatandatu"],
  "AbbreviatedDayNames":["cyu.", "mbe.", "kab.", "gtu.", "kan.", "gnu.", "gnd."],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"rw-RW":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Mutarama", "Gashyantare", "Werurwe", "Mata", "Gicuransi", "Kamena", "Nyakanga", "Kanama", "Nzeli", "Ukwakira", "Ugushyingo", "Ukuboza", ""],
  "DayNames":["Ku cyumweru", "Kuwa mbere", "Kuwa kabiri", "Kuwa gatatu", "Kuwa kane", "Kuwa gatanu", "Kuwa gatandatu"],
  "AbbreviatedDayNames":["cyu.", "mbe.", "kab.", "gtu.", "kan.", "gnu.", "gnd."],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"sa":{ 
  "ShortDatePattern":"d-MM-yyyy",
  "ShortTimePattern":"hh:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"sa-IN":{ 
  "ShortDatePattern":"d-MM-yyyy",
  "ShortTimePattern":"hh:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"sd":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر", ""],
  "DayNames":["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمعو", "ڇنڇر"],
  "AbbreviatedDayNames":["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمعو", "ڇنڇر"],
  "ShortestDayNames":["آچر", "سو", "اڱارو", "اربع", "خم", "جمعو", "ڇنڇر"],    
  "FirstDayOfWeek":0
},
"sd-PK":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر", ""],
  "DayNames":["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمعو", "ڇنڇر"],
  "AbbreviatedDayNames":["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمعو", "ڇنڇر"],
  "ShortestDayNames":["آچر", "سو", "اڱارو", "اربع", "خم", "جمعو", "ڇنڇر"],    
  "FirstDayOfWeek":0
},
"se":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu", ""],
  "DayNames":["sotnabeaivi", "vuossárga", "maŋŋebárga", "gaskavahkku", "duorasdat", "bearjadat", "lávvardat"],
  "AbbreviatedDayNames":["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
  "ShortestDayNames":["S", "V", "M", "G", "D", "B", "L"],    
  "FirstDayOfWeek":1
},
"se-FI":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu", ""],
  "DayNames":["sotnabeaivi", "mánnodat", "disdat", "gaskavahkku", "duorastat", "bearjadat", "lávvordat"],
  "AbbreviatedDayNames":["so", "má", "di", "ga", "du", "be", "lá"],
  "ShortestDayNames":["S", "M", "D", "G", "D", "B", "L"],    
  "FirstDayOfWeek":1
},
"se-NO":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu", ""],
  "DayNames":["sotnabeaivi", "vuossárga", "maŋŋebárga", "gaskavahkku", "duorasdat", "bearjadat", "lávvardat"],
  "AbbreviatedDayNames":["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
  "ShortestDayNames":["S", "V", "M", "G", "D", "B", "L"],    
  "FirstDayOfWeek":1
},
"se-SE":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ođđajagemánnu", "guovvamánnu", "njukčamánnu", "cuoŋománnu", "miessemánnu", "geassemánnu", "suoidnemánnu", "borgemánnu", "čakčamánnu", "golggotmánnu", "skábmamánnu", "juovlamánnu", ""],
  "DayNames":["sotnabeaivi", "vuossárga", "maŋŋebárga", "gaskavahkku", "duorasdat", "bearjadat", "lávvardat"],
  "AbbreviatedDayNames":["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
  "ShortestDayNames":["S", "V", "M", "G", "D", "B", "L"],    
  "FirstDayOfWeek":1
},
"sg":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Nyenye", "Fulundïgi", "Mbängü", "Ngubùe", "Bêläwü", "Föndo", "Lengua", "Kükürü", "Mvuka", "Ngberere", "Nabändüru", "Kakauka", ""],
  "DayNames":["Bikua-ôko", "Bïkua-ûse", "Bïkua-ptâ", "Bïkua-usïö", "Bïkua-okü", "Lâpôsö", "Lâyenga"],
  "AbbreviatedDayNames":["Bk1", "Bk2", "Bk3", "Bk4", "Bk5", "Lâp", "Lây"],
  "ShortestDayNames":["K", "S", "T", "S", "K", "P", "Y"],    
  "FirstDayOfWeek":1
},
"sg-CF":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Nyenye", "Fulundïgi", "Mbängü", "Ngubùe", "Bêläwü", "Föndo", "Lengua", "Kükürü", "Mvuka", "Ngberere", "Nabändüru", "Kakauka", ""],
  "DayNames":["Bikua-ôko", "Bïkua-ûse", "Bïkua-ptâ", "Bïkua-usïö", "Bïkua-okü", "Lâpôsö", "Lâyenga"],
  "AbbreviatedDayNames":["Bk1", "Bk2", "Bk3", "Bk4", "Bk5", "Lâp", "Lây"],
  "ShortestDayNames":["K", "S", "T", "S", "K", "P", "Y"],    
  "FirstDayOfWeek":1
},
"si":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්", ""],
  "DayNames":["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"],
  "AbbreviatedDayNames":["ඉරිදා", "සඳුදා", "අඟහ", "බදාදා", "බ්‍රහස්", "සිකු", "සෙන"],
  "ShortestDayNames":["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],    
  "FirstDayOfWeek":1
},
"si-LK":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH.mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්", ""],
  "DayNames":["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"],
  "AbbreviatedDayNames":["ඉරිදා", "සඳුදා", "අඟහ", "බදාදා", "බ්‍රහස්", "සිකු", "සෙන"],
  "ShortestDayNames":["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],    
  "FirstDayOfWeek":1
},
"sk":{ 
  "ShortDatePattern":"d. M. yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december", ""],
  "DayNames":["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
  "AbbreviatedDayNames":["ne", "po", "ut", "st", "št", "pi", "so"],
  "ShortestDayNames":["n", "p", "u", "s", "š", "p", "s"],    
  "FirstDayOfWeek":1
},
"sk-SK":{ 
  "ShortDatePattern":"d. M. yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december", ""],
  "DayNames":["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
  "AbbreviatedDayNames":["ne", "po", "ut", "st", "št", "pi", "so"],
  "ShortestDayNames":["n", "p", "u", "s", "š", "p", "s"],    
  "FirstDayOfWeek":1
},
"sl":{ 
  "ShortDatePattern":"d. MM. yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december", ""],
  "DayNames":["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"],
  "AbbreviatedDayNames":["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."],
  "ShortestDayNames":["n", "p", "t", "s", "č", "p", "s"],    
  "FirstDayOfWeek":1
},
"sl-SI":{ 
  "ShortDatePattern":"d. MM. yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december", ""],
  "DayNames":["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"],
  "AbbreviatedDayNames":["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."],
  "ShortestDayNames":["n", "p", "t", "s", "č", "p", "s"],    
  "FirstDayOfWeek":1
},
"sn":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ndira", "Kukadzi", "Kurume", "Kubvumbi", "Chivabvu", "Chikumi", "Chikunguru", "Nyamavhuvhu", "Gunyana", "Gumiguru", "Mbudzi", "Zvita", ""],
  "DayNames":["Svondo", "Muvhuro", "Chipiri", "Chitatu", "China", "Chishanu", "Mugovera"],
  "AbbreviatedDayNames":["Svo", "Muv", "Chp", "Cht", "Chn", "Chs", "Mug"],
  "ShortestDayNames":["S", "M", "C", "C", "C", "C", "M"],    
  "FirstDayOfWeek":0
},
"sn-ZW":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ndira", "Kukadzi", "Kurume", "Kubvumbi", "Chivabvu", "Chikumi", "Chikunguru", "Nyamavhuvhu", "Gunyana", "Gumiguru", "Mbudzi", "Zvita", ""],
  "DayNames":["Svondo", "Muvhuro", "Chipiri", "Chitatu", "China", "Chishanu", "Mugovera"],
  "AbbreviatedDayNames":["Svo", "Muv", "Chp", "Cht", "Chn", "Chs", "Mug"],
  "ShortestDayNames":["S", "M", "C", "C", "C", "C", "M"],    
  "FirstDayOfWeek":0
},
"so":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Jannaayo", "Febraayo", "Maarso", "Abriil", "May", "Juun", "Luuliyo", "Ogost", "Sebtembar", "Oktoobar", "Nofembar", "Desembar", ""],
  "DayNames":["Axad", "Isniin", "Salaasa", "Arbaca", "Khamiis", "Jimce", "Sabti"],
  "AbbreviatedDayNames":["Axd", "Isn", "Slsa", "Arbc", "Khms", "Jmc", "Sbti"],
  "ShortestDayNames":["A", "I", "S", "A", "Kh", "J", "S"],    
  "FirstDayOfWeek":1
},
"so-DJ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Jannaayo", "Febraayo", "Maarso", "Abriil", "May", "Juun", "Luuliyo", "Ogost", "Sebtembar", "Oktoobar", "Nofembar", "Desembar", ""],
  "DayNames":["Axad", "Isniin", "Salaasa", "Arbaca", "Khamiis", "Jimce", "Sabti"],
  "AbbreviatedDayNames":["Axd", "Isn", "Slsa", "Arbc", "Khms", "Jmc", "Sbti"],
  "ShortestDayNames":["A", "I", "S", "A", "Kh", "J", "S"],    
  "FirstDayOfWeek":6
},
"so-ET":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Jannaayo", "Febraayo", "Maarso", "Abriil", "May", "Juun", "Luuliyo", "Ogost", "Sebtembar", "Oktoobar", "Nofembar", "Desembar", ""],
  "DayNames":["Axad", "Isniin", "Salaasa", "Arbaca", "Khamiis", "Jimce", "Sabti"],
  "AbbreviatedDayNames":["Axd", "Isn", "Slsa", "Arbc", "Khms", "Jmc", "Sbti"],
  "ShortestDayNames":["A", "I", "S", "A", "Kh", "J", "S"],    
  "FirstDayOfWeek":0
},
"so-KE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Jannaayo", "Febraayo", "Maarso", "Abriil", "May", "Juun", "Luuliyo", "Ogost", "Sebtembar", "Oktoobar", "Nofembar", "Desembar", ""],
  "DayNames":["Axad", "Isniin", "Salaasa", "Arbaca", "Khamiis", "Jimce", "Sabti"],
  "AbbreviatedDayNames":["Axd", "Isn", "Slsa", "Arbc", "Khms", "Jmc", "Sbti"],
  "ShortestDayNames":["A", "I", "S", "A", "Kh", "J", "S"],    
  "FirstDayOfWeek":0
},
"so-SO":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Jannaayo", "Febraayo", "Maarso", "Abriil", "May", "Juun", "Luuliyo", "Ogost", "Sebtembar", "Oktoobar", "Nofembar", "Desembar", ""],
  "DayNames":["Axad", "Isniin", "Salaasa", "Arbaca", "Khamiis", "Jimce", "Sabti"],
  "AbbreviatedDayNames":["Axd", "Isn", "Slsa", "Arbc", "Khms", "Jmc", "Sbti"],
  "ShortestDayNames":["A", "I", "S", "A", "Kh", "J", "S"],    
  "FirstDayOfWeek":1
},
"sq":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor", ""],
  "DayNames":["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"],
  "AbbreviatedDayNames":["die", "hën", "mar", "mër", "enj", "pre", "sht"],
  "ShortestDayNames":["d", "h", "m", "m", "e", "p", "sh"],    
  "FirstDayOfWeek":1
},
"sq-AL":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor", ""],
  "DayNames":["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"],
  "AbbreviatedDayNames":["die", "hën", "mar", "mër", "enj", "pre", "sht"],
  "ShortestDayNames":["d", "h", "m", "m", "e", "p", "sh"],    
  "FirstDayOfWeek":1
},
"sq-MK":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor", ""],
  "DayNames":["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"],
  "AbbreviatedDayNames":["die", "hën", "mar", "mër", "enj", "pre", "sht"],
  "ShortestDayNames":["d", "h", "m", "m", "e", "p", "sh"],    
  "FirstDayOfWeek":1
},
"sq-XK":{ 
  "ShortDatePattern":"d.M.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor", ""],
  "DayNames":["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"],
  "AbbreviatedDayNames":["die", "hën", "mar", "mër", "enj", "pre", "sht"],
  "ShortestDayNames":["d", "h", "m", "m", "e", "p", "sh"],    
  "FirstDayOfWeek":1
},
"sr":{ 
  "ShortDatePattern":"d.M.yyyy.",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d. MMMM",
  "MonthNames":["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар", ""],
  "DayNames":["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
  "AbbreviatedDayNames":["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
  "ShortestDayNames":["н", "п", "у", "с", "ч", "п", "с"],    
  "FirstDayOfWeek":1
},
"ss":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"ss-SZ":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ss-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"st":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Phesekgong", "Hlakola", "Hlakubele", "Mmese", "Motsheanong", "Phupjane", "Phupu", "Phata", "Leotshe", "Mphalane", "Pundungwane", "Tshitwe", ""],
  "DayNames":["Sontaha", "Mmantaha", "Labobedi", "Laboraru", "Labone", "Labohlane", "Moqebelo"],
  "AbbreviatedDayNames":["Son", "Mma", "Bed", "Rar", "Ne", "Hla", "Moq"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"st-LS":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Phesekgong", "Hlakola", "Hlakubele", "Mmese", "Motsheanong", "Phupjane", "Phupu", "Phata", "Leotshe", "Mphalane", "Pundungwane", "Tshitwe", ""],
  "DayNames":["Sontaha", "Mmantaha", "Labobedi", "Laboraru", "Labone", "Labohlane", "Moqebelo"],
  "AbbreviatedDayNames":["Son", "Mma", "Bed", "Rar", "Ne", "Hla", "Moq"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"st-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Phesekgong", "Hlakola", "Hlakubele", "Mmese", "Motsheanong", "Phupjane", "Phupu", "Phata", "Leotshe", "Mphalane", "Pundungwane", "Tshitwe", ""],
  "DayNames":["Sontaha", "Mmantaha", "Labobedi", "Laboraru", "Labone", "Labohlane", "Moqebelo"],
  "AbbreviatedDayNames":["Son", "Mma", "Bed", "Rar", "Ne", "Hla", "Moq"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"sv":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december", ""],
  "DayNames":["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
  "AbbreviatedDayNames":["sön", "mån", "tis", "ons", "tors", "fre", "lör"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"sv-AX":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december", ""],
  "DayNames":["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
  "AbbreviatedDayNames":["sön", "mån", "tis", "ons", "tors", "fre", "lör"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"sv-FI":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december", ""],
  "DayNames":["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
  "AbbreviatedDayNames":["sön", "mån", "tis", "ons", "tors", "fre", "lör"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"sv-SE":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december", ""],
  "DayNames":["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
  "AbbreviatedDayNames":["sön", "mån", "tis", "ons", "tors", "fre", "lör"],
  "ShortestDayNames":["S", "M", "T", "O", "T", "F", "L"],    
  "FirstDayOfWeek":1
},
"sw":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba", ""],
  "DayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "AbbreviatedDayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"sw-CD":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba", ""],
  "DayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "AbbreviatedDayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"sw-KE":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba", ""],
  "DayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "AbbreviatedDayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"sw-TZ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba", ""],
  "DayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "AbbreviatedDayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"sw-UG":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba", ""],
  "DayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "AbbreviatedDayNames":["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"ta":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"tt h:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்", ""],
  "DayNames":["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
  "AbbreviatedDayNames":["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"],
  "ShortestDayNames":["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],    
  "FirstDayOfWeek":0
},
"ta-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"tt h:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்", ""],
  "DayNames":["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
  "AbbreviatedDayNames":["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"],
  "ShortestDayNames":["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],    
  "FirstDayOfWeek":0
},
"ta-LK":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்", ""],
  "DayNames":["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
  "AbbreviatedDayNames":["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"],
  "ShortestDayNames":["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],    
  "FirstDayOfWeek":1
},
"ta-MY":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"tt h:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்", ""],
  "DayNames":["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
  "AbbreviatedDayNames":["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"],
  "ShortestDayNames":["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],    
  "FirstDayOfWeek":1
},
"ta-SG":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"tt h:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்", ""],
  "DayNames":["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
  "AbbreviatedDayNames":["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"],
  "ShortestDayNames":["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],    
  "FirstDayOfWeek":0
},
"te":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్", ""],
  "DayNames":["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"],
  "AbbreviatedDayNames":["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
  "ShortestDayNames":["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"],    
  "FirstDayOfWeek":0
},
"te-IN":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్", ""],
  "DayNames":["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"],
  "AbbreviatedDayNames":["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
  "ShortestDayNames":["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"],    
  "FirstDayOfWeek":0
},
"tg":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр", ""],
  "DayNames":["Якшанбе", "Душанбе", "Сешанбе", "Чоршанбе", "Панҷшанбе", "Ҷумъа", "Шанбе"],
  "AbbreviatedDayNames":["Яшб", "Дшб", "Сшб", "Чшб", "Пшб", "Ҷмъ", "Шнб"],
  "ShortestDayNames":["Я", "Д", "С", "Ч", "П", "Ҷ", "Ш"],    
  "FirstDayOfWeek":1
},
"tg-TJ":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр", ""],
  "DayNames":["Якшанбе", "Душанбе", "Сешанбе", "Чоршанбе", "Панҷшанбе", "Ҷумъа", "Шанбе"],
  "AbbreviatedDayNames":["Яшб", "Дшб", "Сшб", "Чшб", "Пшб", "Ҷмъ", "Шнб"],
  "ShortestDayNames":["Я", "Д", "С", "Ч", "П", "Ҷ", "Ш"],    
  "FirstDayOfWeek":1
},
"th":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ""],
  "DayNames":["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"],
  "AbbreviatedDayNames":["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  "ShortestDayNames":["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],    
  "FirstDayOfWeek":0
},
"th-TH":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ""],
  "DayNames":["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"],
  "AbbreviatedDayNames":["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  "ShortestDayNames":["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],    
  "FirstDayOfWeek":0
},
"ti":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ጥሪ", "ለካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰነ", "ሓምለ", "ነሓሰ", "መስከረም", "ጥቅምቲ", "ሕዳር", "ታሕሳስ", ""],
  "DayNames":["ሰንበት", "ሰኑይ", "ሠሉስ", "ረቡዕ", "ኃሙስ", "ዓርቢ", "ቀዳም"],
  "AbbreviatedDayNames":["ሰን", "ሰኑ", "ሰሉ", "ረቡ", "ሓሙ", "ዓር", "ቀዳ"],
  "ShortestDayNames":["ሰ", "ሰ", "ሠ", "ረ", "ሓ", "ዓ", "ቀ"],    
  "FirstDayOfWeek":0
},
"ti-ER":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ጥሪ", "ለካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰነ", "ሓምለ", "ነሓሰ", "መስከረም", "ጥቅምቲ", "ሕዳር", "ታሕሳስ", ""],
  "DayNames":["ሰንበት", "ሰኑይ", "ሠሉስ", "ረቡዕ", "ኃሙስ", "ዓርቢ", "ቀዳም"],
  "AbbreviatedDayNames":["ሰን", "ሰኑ", "ሰሉ", "ረቡ", "ሓሙ", "ዓር", "ቀዳ"],
  "ShortestDayNames":["ሰ", "ሰ", "ሰ", "ረ", "ሓ", "ዓ", "ቀ"],    
  "FirstDayOfWeek":1
},
"ti-ET":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["ጥሪ", "ለካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰነ", "ሓምለ", "ነሓሰ", "መስከረም", "ጥቅምቲ", "ሕዳር", "ታሕሳስ", ""],
  "DayNames":["ሰንበት", "ሰኑይ", "ሠሉስ", "ረቡዕ", "ኃሙስ", "ዓርቢ", "ቀዳም"],
  "AbbreviatedDayNames":["ሰን", "ሰኑ", "ሰሉ", "ረቡ", "ሓሙ", "ዓር", "ቀዳ"],
  "ShortestDayNames":["ሰ", "ሰ", "ሠ", "ረ", "ሓ", "ዓ", "ቀ"],    
  "FirstDayOfWeek":0
},
"tk":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun", "Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr", ""],
  "DayNames":["Ýekşenbe", "Duşenbe", "Sişenbe", "Çarşenbe", "Penşenbe", "Anna", "Şenbe"],
  "AbbreviatedDayNames":["Ýek", "Duş", "Siş", "Çar", "Pen", "Ann", "Şen"],
  "ShortestDayNames":["Ý", "D", "S", "Ç", "P", "A", "Ş"],    
  "FirstDayOfWeek":1
},
"tk-TM":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun", "Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr", ""],
  "DayNames":["Ýekşenbe", "Duşenbe", "Sişenbe", "Çarşenbe", "Penşenbe", "Anna", "Şenbe"],
  "AbbreviatedDayNames":["Ýek", "Duş", "Siş", "Çar", "Pen", "Ann", "Şen"],
  "ShortestDayNames":["Ý", "D", "S", "Ç", "P", "A", "Ş"],    
  "FirstDayOfWeek":1
},
"tn":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ferikgong", "Tlhakole", "Mopitlo", "Moranang", "Motsheganang", "Seetebosigo", "Phukwi", "Phatwe", "Lwetse", "Diphalane", "Ngwanatsele", "Sedimonthole", ""],
  "DayNames":["Tshipi", "Mosopulogo", "Labobedi", "Laboraro", "Labone", "Labotlhano", "Matlhatso"],
  "AbbreviatedDayNames":["Tsh", "Mos", "Labb", "Labr", "Labn", "Labt", "Mat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"tn-BW":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ferikgong", "Tlhakole", "Mopitlo", "Moranang", "Motsheganang", "Seetebosigo", "Phukwi", "Phatwe", "Lwetse", "Diphalane", "Ngwanatsele", "Sedimonthole", ""],
  "DayNames":["Tshipi", "Mosopulogo", "Labobedi", "Laboraro", "Labone", "Labotlhano", "Matlhatso"],
  "AbbreviatedDayNames":["Tsh", "Mos", "Labb", "Labr", "Labn", "Labt", "Mat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"tn-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Ferikgong", "Tlhakole", "Mopitlo", "Moranang", "Motsheganang", "Seetebosigo", "Phukwi", "Phatwe", "Lwetse", "Diphalane", "Ngwanatsele", "Sedimonthole", ""],
  "DayNames":["Tshipi", "Mosopulogo", "Labobedi", "Laboraro", "Labone", "Labotlhano", "Matlhatso"],
  "AbbreviatedDayNames":["Tsh", "Mos", "Labb", "Labr", "Labn", "Labt", "Mat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"to":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Sānuali", "Fēpueli", "Maʻasi", "ʻEpeleli", "Mē", "Sune", "Siulai", "ʻAokosi", "Sepitema", "ʻOkatopa", "Nōvema", "Tīsema", ""],
  "DayNames":["Sāpate", "Mōnite", "Tūsite", "Pulelulu", "Tuʻapulelulu", "Falaite", "Tokonaki"],
  "AbbreviatedDayNames":["Sāp", "Mōn", "Tūs", "Pul", "Tuʻa", "Fal", "Tok"],
  "ShortestDayNames":["S", "M", "T", "P", "T", "F", "T"],    
  "FirstDayOfWeek":1
},
"to-TO":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Sānuali", "Fēpueli", "Maʻasi", "ʻEpeleli", "Mē", "Sune", "Siulai", "ʻAokosi", "Sepitema", "ʻOkatopa", "Nōvema", "Tīsema", ""],
  "DayNames":["Sāpate", "Mōnite", "Tūsite", "Pulelulu", "Tuʻapulelulu", "Falaite", "Tokonaki"],
  "AbbreviatedDayNames":["Sāp", "Mōn", "Tūs", "Pul", "Tuʻa", "Fal", "Tok"],
  "ShortestDayNames":["S", "M", "T", "P", "T", "F", "T"],    
  "FirstDayOfWeek":1
},
"tr":{ 
  "ShortDatePattern":"d.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", ""],
  "DayNames":["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
  "AbbreviatedDayNames":["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  "ShortestDayNames":["P", "P", "S", "Ç", "P", "C", "C"],    
  "FirstDayOfWeek":1
},
"tr-CY":{ 
  "ShortDatePattern":"d.MM.yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", ""],
  "DayNames":["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
  "AbbreviatedDayNames":["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  "ShortestDayNames":["P", "P", "S", "Ç", "P", "C", "C"],    
  "FirstDayOfWeek":1
},
"tr-TR":{ 
  "ShortDatePattern":"d.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", ""],
  "DayNames":["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
  "AbbreviatedDayNames":["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  "ShortestDayNames":["P", "P", "S", "Ç", "P", "C", "C"],    
  "FirstDayOfWeek":1
},
"ts":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Sunguti", "Nyenyenyani", "Nyenyankulu", "Dzivamisoko", "Mudyaxihi", "Khotavuxika", "Mawuwani", "Mhawuri", "Ndzhati", "Nhlangula", "Hukuri", "N’wendzamhala", ""],
  "DayNames":["Sonta", "Musumbhunuku", "Ravumbirhi", "Ravunharhu", "Ravumune", "Ravuntlhanu", "Mugqivela"],
  "AbbreviatedDayNames":["Son", "Mus", "Bir", "Har", "Ne", "Tlh", "Mug"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"ts-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Sunguti", "Nyenyenyani", "Nyenyankulu", "Dzivamisoko", "Mudyaxihi", "Khotavuxika", "Mawuwani", "Mhawuri", "Ndzhati", "Nhlangula", "Hukuri", "N’wendzamhala", ""],
  "DayNames":["Sonta", "Musumbhunuku", "Ravumbirhi", "Ravunharhu", "Ravumune", "Ravuntlhanu", "Mugqivela"],
  "AbbreviatedDayNames":["Son", "Mus", "Bir", "Har", "Ne", "Tlh", "Mug"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"tt":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["гыйнвар", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["якшәмбе", "дүшәмбе", "сишәмбе", "чәршәмбе", "пәнҗешәмбе", "җомга", "шимбә"],
  "AbbreviatedDayNames":["якш.", "дүш.", "сиш.", "чәр.", "пәнҗ.", "җом.", "шим."],
  "ShortestDayNames":["Я", "Д", "С", "Ч", "П", "Җ", "Ш"],    
  "FirstDayOfWeek":1
},
"tt-RU":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"H:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["гыйнвар", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь", ""],
  "DayNames":["якшәмбе", "дүшәмбе", "сишәмбе", "чәршәмбе", "пәнҗешәмбе", "җомга", "шимбә"],
  "AbbreviatedDayNames":["якш.", "дүш.", "сиш.", "чәр.", "пәнҗ.", "җом.", "шим."],
  "ShortestDayNames":["Я", "Д", "С", "Ч", "П", "Җ", "Ш"],    
  "FirstDayOfWeek":1
},
"ug":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d-MMMM",
  "MonthNames":["يانۋار", "فېۋرال", "مارت", "ئاپرېل", "ماي", "ئىيۇن", "ئىيۇل", "ئاۋغۇست", "سېنتەبىر", "ئۆكتەبىر", "نويابىر", "دېكابىر", ""],
  "DayNames":["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"],
  "AbbreviatedDayNames":["يە", "دۈ", "سە", "چا", "پە", "جۈ", "شە"],
  "ShortestDayNames":["ي", "د", "س", "چ", "پ", "ج", "ش"],    
  "FirstDayOfWeek":0
},
"ug-CN":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d-MMMM",
  "MonthNames":["يانۋار", "فېۋرال", "مارت", "ئاپرېل", "ماي", "ئىيۇن", "ئىيۇل", "ئاۋغۇست", "سېنتەبىر", "ئۆكتەبىر", "نويابىر", "دېكابىر", ""],
  "DayNames":["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"],
  "AbbreviatedDayNames":["يە", "دۈ", "سە", "چا", "پە", "جۈ", "شە"],
  "ShortestDayNames":["ي", "د", "س", "چ", "پ", "ج", "ش"],    
  "FirstDayOfWeek":0
},
"uk":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень", ""],
  "DayNames":["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"],
  "AbbreviatedDayNames":["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["Н", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"uk-UA":{ 
  "ShortDatePattern":"dd.MM.yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень", ""],
  "DayNames":["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"],
  "AbbreviatedDayNames":["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  "ShortestDayNames":["Н", "П", "В", "С", "Ч", "П", "С"],    
  "FirstDayOfWeek":1
},
"ur":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر", ""],
  "DayNames":["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
  "AbbreviatedDayNames":["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"ur-IN":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر", ""],
  "DayNames":["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
  "AbbreviatedDayNames":["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"ur-PK":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"h:mm tt",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر", ""],
  "DayNames":["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
  "AbbreviatedDayNames":["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"uz":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d-MMMM",
  "MonthNames":["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr", ""],
  "DayNames":["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"],
  "AbbreviatedDayNames":["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"],
  "ShortestDayNames":["Y", "D", "S", "C", "P", "J", "S"],    
  "FirstDayOfWeek":1
},
"ve":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"ve-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"vi":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12", ""],
  "DayNames":["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
  "AbbreviatedDayNames":["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  "ShortestDayNames":["CN", "T2", "T3", "T4", "T5", "T6", "T7"],    
  "FirstDayOfWeek":1
},
"vi-VN":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12", ""],
  "DayNames":["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
  "AbbreviatedDayNames":["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  "ShortestDayNames":["CN", "T2", "T3", "T4", "T5", "T6", "T7"],    
  "FirstDayOfWeek":1
},
"vo":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", ""],
  "DayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "AbbreviatedDayNames":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"wo":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Samwiyee", "Fewriyee", "Mars", "Awril", "Mee", "Suwe", "Sulet", "Ut", "Sàttumbar", "Oktoobar", "Nowàmbar", "Desàmbar", ""],
  "DayNames":["Dibéer", "Altine", "Talaata", "Àlarba", "Alxamis", "Àjjuma", "Aseer"],
  "AbbreviatedDayNames":["Dib", "Alt", "Tal", "Àla", "Alx", "Àjj", "Ase"],
  "ShortestDayNames":["Dib", "Alt", "Tal", "Àla", "Alx", "Àjj", "Ase"],    
  "FirstDayOfWeek":1
},
"wo-SN":{ 
  "ShortDatePattern":"dd-MM-yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Samwiyee", "Fewriyee", "Mars", "Awril", "Mee", "Suwe", "Sulet", "Ut", "Sàttumbar", "Oktoobar", "Nowàmbar", "Desàmbar", ""],
  "DayNames":["Dibéer", "Altine", "Talaata", "Àlarba", "Alxamis", "Àjjuma", "Aseer"],
  "AbbreviatedDayNames":["Dib", "Alt", "Tal", "Àla", "Alx", "Àjj", "Ase"],
  "ShortestDayNames":["Dib", "Alt", "Tal", "Àla", "Alx", "Àjj", "Ase"],    
  "FirstDayOfWeek":1
},
"xh":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janyuwari", "Februwari", "Matshi", "Epreli", "Meyi", "Juni", "Julayi", "Agasti", "Septemba", "Okthoba", "Novemba", "Disemba", ""],
  "DayNames":["Cawe", "Mvulo", "Lwesibini", "Lwesithathu", "Lwesine", "Lwesihlanu", "Mgqibelo"],
  "AbbreviatedDayNames":["Caw", "Mvu", "Bin", "Tha", "Sin", "Hla", "Mgq"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"xh-ZA":{ 
  "ShortDatePattern":"yyyy-MM-dd",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Janyuwari", "Februwari", "Matshi", "Epreli", "Meyi", "Juni", "Julayi", "Agasti", "Septemba", "Okthoba", "Novemba", "Disemba", ""],
  "DayNames":["Cawe", "Mvulo", "Lwesibini", "Lwesithathu", "Lwesine", "Lwesihlanu", "Mgqibelo"],
  "AbbreviatedDayNames":["Caw", "Mvu", "Bin", "Tha", "Sin", "Hla", "Mgq"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":0
},
"yi":{ 
  "ShortDatePattern":"dd/MM/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["יאַנואַר", "פֿעברואַר", "מערץ", "אַפּריל", "מיי", "יוני", "יולי", "אויגוסט", "סעפּטעמבער", "אקטאבער", "נאוועמבער", "דעצעמבער", ""],
  "DayNames":["זונטיק", "מאָנטיק", "דינסטיק", "מיטוואך", "דאנערשטיק", "פֿרײַטיק", "שבת"],
  "AbbreviatedDayNames":["זונטיק", "מאָנטיק", "דינסטיק", "מיטוואך", "דאנערשטיק", "פֿרײַטיק", "שבת"],
  "ShortestDayNames":["S", "M", "T", "W", "T", "F", "S"],    
  "FirstDayOfWeek":1
},
"yo":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:m",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ṣẹ́rẹ́", "Èrèlè", "Ẹrẹ̀nà", "Ìgbé", "Ẹ̀bibi", "Òkúdu", "Agẹmọ", "Ògún", "Owewe", "Ọ̀wàrà", "Bélú", "Ọ̀pẹ̀", ""],
  "DayNames":["Àìkú", "Ajé", "Ìsẹ́gun", "Ọjọ́rú", "Ọjọ́bọ", "Ẹtì", "Àbámẹ́ta"],
  "AbbreviatedDayNames":["Àìk", "Aj", "Ìsẹ́g", "Ọjọ́r", "Ọjọ́b", "Ẹt", "Àbám"],
  "ShortestDayNames":["À", "A", "Ì", "Ọ", "Ọ", "Ẹ", "À"],    
  "FirstDayOfWeek":1
},
"yo-BJ":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:m",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Shɛ́rɛ́", "Èrèlè", "Ɛrɛ̀nà", "Ìgbé", "Ɛ̀bibi", "Òkúdu", "Agɛmɔ", "Ògún", "Owewe", "Ɔ̀wàrà", "Bélú", "Ɔ̀pɛ̀", ""],
  "DayNames":["Àìkú", "Ajé", "Ìsɛ́gun", "Ɔjɔ́rú", "Ɔjɔ́bɔ", "Ɛtì", "Àbámɛ́ta"],
  "AbbreviatedDayNames":["Àìk", "Aj", "Ìsɛ́g", "Ɔjɔ́r", "Ɔjɔ́b", "Ɛt", "Àbám"],
  "ShortestDayNames":["À", "A", "Ì", "Ɔ", "Ɔ", "Ɛ", "À"],    
  "FirstDayOfWeek":1
},
"yo-NG":{ 
  "ShortDatePattern":"d/M/yyyy",
  "ShortTimePattern":"H:m",
  "MonthDayPattern":"d MMMM",
  "MonthNames":["Ṣẹ́rẹ́", "Èrèlè", "Ẹrẹ̀nà", "Ìgbé", "Ẹ̀bibi", "Òkúdu", "Agẹmọ", "Ògún", "Owewe", "Ọ̀wàrà", "Bélú", "Ọ̀pẹ̀", ""],
  "DayNames":["Àìkú", "Ajé", "Ìsẹ́gun", "Ọjọ́rú", "Ọjọ́bọ", "Ẹtì", "Àbámẹ́ta"],
  "AbbreviatedDayNames":["Àìk", "Aj", "Ìsẹ́g", "Ọjọ́r", "Ọjọ́b", "Ẹt", "Àbám"],
  "ShortestDayNames":["À", "A", "Ì", "Ọ", "Ọ", "Ẹ", "À"],    
  "FirstDayOfWeek":1
},
"zh":{ 
  "ShortDatePattern":"yyyy/M/d",
  "ShortTimePattern":"tth:mm",
  "MonthDayPattern":"M月d日",
  "MonthNames":["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""],
  "DayNames":["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  "AbbreviatedDayNames":["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  "ShortestDayNames":["日", "一", "二", "三", "四", "五", "六"],    
  "FirstDayOfWeek":0
},
"zu":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Januwari", "Februwari", "Mashi", "Ephreli", "Meyi", "Juni", "Julayi", "Agasti", "Septhemba", "Okthoba", "Novemba", "Disemba", ""],
  "DayNames":["ISonto", "UMsombuluko", "ULwesibili", "ULwesithathu", "ULwesine", "ULwesihlanu", "UMgqibelo"],
  "AbbreviatedDayNames":["Son", "Mso", "Bil", "Tha", "Sin", "Hla", "Mgq"],
  "ShortestDayNames":["S", "M", "B", "T", "S", "H", "M"],    
  "FirstDayOfWeek":0
},
"zu-ZA":{ 
  "ShortDatePattern":"M/d/yyyy",
  "ShortTimePattern":"HH:mm",
  "MonthDayPattern":"MMMM d",
  "MonthNames":["Januwari", "Februwari", "Mashi", "Ephreli", "Meyi", "Juni", "Julayi", "Agasti", "Septhemba", "Okthoba", "Novemba", "Disemba", ""],
  "DayNames":["ISonto", "UMsombuluko", "ULwesibili", "ULwesithathu", "ULwesine", "ULwesihlanu", "UMgqibelo"],
  "AbbreviatedDayNames":["Son", "Mso", "Bil", "Tha", "Sin", "Hla", "Mgq"],
  "ShortestDayNames":["S", "M", "B", "T", "S", "H", "M"],    
  "FirstDayOfWeek":0
}}

export default locales
// Supplementary Burmese translations, vocabulary, and grammar explanations
// for Unit 12 sections 12A / 12B / 12C. Keyed by section id, mirroring
// `unit1Supplement.ts`, `unit2Supplement.ts`, `unit3Supplement.ts`,
// `unit4Supplement.ts`, `unit5Supplement.ts`, `unit6Supplement.ts`,
// `unit7Supplement.ts`, `unit8Supplement.ts`, `unit9Supplement.ts`,
// `unit10Supplement.ts` and `unit11Supplement.ts`. Units 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// and 11 data are never touched by this module.

export type VocabItem = {
  word: string;
  pronunciation: string; // simple phonetic guide
  meaningMy: string;
  exampleEn?: string;
};

/* ----------------------------- 12A Reading ------------------------------ */

export const partA12A_translations: Record<number, string> = {
  1: "စာပိုဒ်မှ (1) မှ (5) အထိ ဝါကျငါးခုကို ဖယ်ထုတ်ထားသည်။ ဝါကျများ (A-E) တွင် ကွက်လပ် (1-5) တစ်ခုချင်းစီနှင့် အကောင်းဆုံး ကိုက်ညီသော ဝါကျကို ရွေးပါ။",
};

export const partB12A_translations: Record<number, string> = {
  1: "ဆေးကုသမှု ဝန်ဆောင်မှု ပေးသူ",
  2: "ပညာရေး အဖွဲ့အစည်းများ",
  3: "မြို့ပြ သကျေးဇူးတော်များနှင့် အဆင်ပြေမှုများ",
  4: "မြို့ပြပြောင်းလဲမှုကြောင့် ဖြစ်ပေါ်လာသော မလိုလားအပ်သော ရလဒ်များ",
  5: "မြို့ပြ ရာဇဝတ်မှုများ",
};

export const partC12A_translations: Record<number, string> = {
  1: "ကျေးလက်ဒေသတွင် နေထိုင်သူများသည် မည့်သည့်အကြေင်းရင်းများကြောင့် မကြာခဏ ကျေးလက်အိမ်များကို စွန့်ခွာကြသနည်း။",
  2: "စာကြောင်း ၉ ရှိ 'greener pastures' ဟူသော စကားစုသည် အဘယ်နှင့် အဓိပ္ပာယ်တူသနည်း။",
  3: "လူသားများသည် ပိုမိုကောင်းမွန်လိုသောအခါ ၎င်းတို့သည် အဘယ်အရာ ပြုလုပ်ကြသနည်း။",
  4: "ကျေးလက်ဒေသတွင် ခေတ်မီ မွေးမြူရေးနှင့် နို့ထွက်ပစ္စည်း စိုက်ပျိုးရေးများ တည်ထောင်သောအခါ ထိုနေရာရှိ ကျေးလက်လယ်သမားများတွင် အဘယ်အရာ ဖြစ်ပေါ်သနည်း။",
  5: "ကမ္ဘာ့အချို့နေရာများတွင် စစ်ပွဲကြောင့် ရွာသားများသည် အဘယ်အရာ ပြုလုပ်ရသနည်း။",
  6: "မြို့ပြပြောင်းလဲမှုသည် မည်သို့သော မလိုလားအပ်သော ရလဒ်များကို ဖြစ်ပေါ်စေသနည်း။",
  7: "ဆူးပုန်းရွာများ တိုးပွားလာခြင်းနှင့်အတူ လူများသည် အဘယ်နေရာတွင် နေထိုင်ရမည်အဖြစ် အတင်းအကျပ် ဖြစ်ရသနည်း။",
  8: "အလုပ်အကိုင်အခွင့်အလမ်း ပိုမိုဖန်တီးနိုင်ပါက မည်သည့်ပြဿနာကို ဖြေရှင်းနိုင်သနည်း။",
  9: "ရဲတပ်ဖွဲ့ကို မည်မျှအထိ ချဲ့ထွင်သင့်သနည်း။",
  10: "သင်သည် ရွာတစ်ရွာတွင် နေထိုင်လျှင် မြို့ကြီးသို့ ရွှေ့ပြေားမည်လား၊ အဘယ်ကြောင့်နည်း။",
  11: "သင်သည် ရွာတစ်ရွာ သို့မဟုတ် မြို့ကြီးတစ်ခုတွင် နေထိုင်လိုပါသလား၊ အဘယ်ကြောင့်နည်း။",
};

/* ---------------------------- 12B Vocabulary ---------------------------- */

export const vocab12B: VocabItem[] = [
  {
    word: "urbanization",
    pronunciation: "/ˌɜːbənaɪˈzeɪʃn/ — အဘာနိုင်ဇေးရှန်",
    meaningMy: "မြို့ပြပြောင်းလဲမှု၊ မြို့ပြဖြစ်လာမှု ဖြစ်စဉ်",
    exampleEn: "Urbanization is the process by which more and more people leave the countryside to live in cities.",
  },
  {
    word: "infrastructure",
    pronunciation: "/ˈɪnfrəstrʌktʃə(r)/ — အင်ဖရစထရက်ချာ",
    meaningMy: "အခြေခံအဆောက်အအုံ",
    exampleEn: "Urbanization brings about an infrastructure more advanced than the one in the countryside.",
  },
  {
    word: "sanitation",
    pronunciation: "/ˌsænɪˈteɪʃn/ — ဆန်နီတေးရှန်",
    meaningMy: "တိုက်ခန်းသန့်ရှင်းရေး၊ ကျန်းမာရေးသန့်ရှင်းမှု",
    exampleEn: "In slums, sanitation is inadequate.",
  },
  {
    word: "congestion",
    pronunciation: "/kənˈdʒestʃən/ — ကန်ဂျက်ရှန်",
    meaningMy: "ပိတ်ဆို့ခြင်း၊ ရုန်းတိပ်ခြင်း",
    exampleEn: "Traffic congestion is one of the problems of urbanization.",
  },
  {
    word: "slum",
    pronunciation: "/slʌm/ — စလမ်",
    meaningMy: "ဆူးပုန်းရွာ၊ ဆင်းရဲသားရပ်ကွက်",
    exampleEn: "One of the undesirable results of urbanization is the growth of slums.",
  },
  {
    word: "shanty",
    pronunciation: "/ˈʃænti/ — ရှန်တီ",
    meaningMy: "တုတ်ခိုင်အိမ်ငယ်၊ ဆောက်လုပ်အိမ်",
    exampleEn: "In slums, people live in shanties and hovels.",
  },
  {
    word: "hovel",
    pronunciation: "/ˈhɒvl/ — ဟောဗယ်",
    meaningMy: "ပျက်စီးနေသော အိမ်ငယ်၊ ဆင်းရဲသော နေအိမ်",
    exampleEn: "In slums, people live in shanties and hovels.",
  },
  {
    word: "influx",
    pronunciation: "/ˈɪnflʌks/ — အင်ဖလက်စ်",
    meaningMy: "ဝင်ရောက်လာမှု၊ စီးဆင်းမှု",
    exampleEn: "Means to control the influx of people from the countryside may need to be adopted.",
  },
  {
    word: "livelihood",
    pronunciation: "/ˈlaɪvlihʊd/ — လိုင်ဗ်လီဟုဒ်",
    meaningMy: "အသက်မွေးဝမ်းကျွေးမှု၊ အသက်မွေးလမ်း",
    exampleEn: "They move to towns or cities to find new forms of livelihood.",
  },
  {
    word: "prostitution",
    pronunciation: "/ˌprɒstɪˈtjuːʃn/ — ပရော်စတီတူးရှန်",
    meaningMy: "ပြည့်တံဆောင်မှု သို့မဟုတ် လိင်လုပ်ငန်း",
    exampleEn: "Urban crime includes mugging, stealing, drug abusing, prostitution and murder.",
  },
];

/* ----------------------------- 12C Grammar ------------------------------ */

export const partA12C_translations: Record<number, string> = {
  1: "မုန့်ဖုတ်ဆိုင်သို့ သွားပြီး မုန့်ဝယ်ပါ။",
  2: "ကျောင်းသို့ အချိန်မှီ သွားပါ။",
  3: "ဆရာဝန်ထံ သွားပါ။",
  4: "ရေများများ သောက်ပါ။",
  5: "အရက်သောက်ခြင်း ရှောင်ကြဉ်ပါ။",
  6: "တရားဥပဒေကို လိုက်နာပါ။",
  7: "အလုပ်ကို အချိန်မှီ ပြီးမြောက်အောင် လုပ်ပါ။",
  8: "အိပ်ရာဝင့်ချိန် အိပ်ပါ။",
  9: "ပတ်ဝန်းကျင်ကို ထိန်းသိမ်းကာကွယ်ပါ။",
  10: "ကျောင်းသို့ အချိန်မှီ သွားရောက်ပါ။",
};

export const partB12C_translations: Record<number, string> = {
  1: "ကျွန်ုပ်တို့သည် တရားဥပဒေကို လိုက်နာရမည်။",
  2: "သင်သည် မတရားမှုကို ရှောင်ကြဉ်ရမည်။",
  3: "ကျွန်ုပ်တို့သည် လူအချင်းချင်း ကူညီရမည်။",
  4: "သူသည် အလုပ်ကို ပြီးမြောက်အောင် လုပ်ရမည်။",
  5: "ကျွန်ုပ်တို့သည် ပတ်ဝန်းကျင်ကို သန့်ရှင်းစွာ ထိန်းသိမ်းရမည်။",
  6: "သင်သည် အချိန်စောင့်ရမည်။",
  7: "ကျွန်ုပ်တို့သည် လမ်းဥပဒေကို လိုက်နာရမည်။",
  8: "သူမသည် ဆရာ၏ ဆုံးမခြင်းကို နားထောင်ရမည်။",
  9: "ကျွန်ုပ်တို့သည် ငွေကောင်းငွေသား ချမ်းသာရေးအတွက် ကြိုးစားရမည်။",
  10: "သင်သည် မိဘများအား ရိုသေလေးစားရမည်။",
};

export const grammar12C = {
  whatMy:
    "Relative Pronouns 'that' နှင့် 'which' ကို အရာဝတ္ထုများကို ရည်ညွှန်းရာတွင် relative clause တွင် အသုံးပြုသည်။ 'as ... as' ကို နှိုင်းယှဉ်သောအခါ တူညီမှုရှိသည့်အခါ အသုံးပြုပြီး 'not as ... as' ကို တူညီမှုမရှိသည့်အခါ အသုံးပြုသည်။",
  whenMy:
    "'that' သို့မဟုတ် 'which' ကို အရာဝတ္ထုများကို ရည်ညွှန်းသည့် relative clause တွင် အသုံးပြုသည် (e.g. I do not like stories that/which have sad endings.)။ 'as + adjective/adverb + as' ကို တူညီမှုရှိသည့်အခါ အသုံးပြုပြီး (e.g. That cow is as big as a small elephant.) 'not as + adjective/adverb + as' ကို တူညီမှုမရှိသည့်အခါ အသုံးပြုသည် (e.g. Thuta cannot run as fast as Thura.)။",
  whyMy:
    "Relative pronouns 'that' နှင့် 'which' သည် အရာဝတ္ထုများကို ရည်ညွှန်းရန် အသုံးပြုပြီး ဝါကျအမျိုးအစားကို ဆက်စေသည်။ 'as ... as' နှင့် 'not as ... as' သည် နှိုင်းယှဉ်မှုများကို ရှင်းလင်းစွာ ဖော်ပြရန် အသုံးပြုပြီး တူညီမှု သို့မဟုတ် ကွာခြားမှုကို ဖော်ပြသည်။",
  examples: [
    { en: "I do not like stories that/which have sad endings.", phrase: "that/which" },
    { en: "That cow is as big as a small elephant.", phrase: "as ... as" },
    { en: "Thuta cannot run as fast as Thura.", phrase: "not as ... as" },
  ],
};
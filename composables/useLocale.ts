
const locales = {
  "ar_ae": "Arabic (United Arab Emirates)",
  "cs_cz": "Czech (Czech Republic)",
  "de_de": "German (Germany)",
  "default": "English (United States)",
  "el_gr": "Greek (Greece)",
  "en_au": "English (Australia)",
  "en_gb": "English (United Kingdom)",
  "en_ph": "English (Philippines)",
  "en_sg": "English (Singapore)",
  "es_ar": "Spanish (Argentina)",
  "es_es": "Spanish (Spain)",
  "es_mx": "Spanish (Mexico)",
  "fr_fr": "French (France)",
  "hu_hu": "Hungarian (Hungary)",
  "it_it": "Italian (Italy)",
  "ja_jp": "Japanese (Japan)",
  "ko_kr": "Korean (South Korea)",
  "pl_pl": "Polish (Poland)",
  "pt_br": "Portuguese (Brazil)",
  "ro_ro": "Romanian (Romania)",
  "ru_ru": "Russian (Russia)",
  "th_th": "Thai (Thailand)",
  "tr_tr": "Turkish (Turkey)",
  "vi_vn": "Vietnamese (Vietnam)",
  "zh_cn": "Chinese",
  "zh_my": "Chinese (Malaysia)",
  "zh_tw": "Chinese (Taiwan)"
};

const currentLocale = ref(getLocale());

function getLocale(): string {
  var currentLocale: string | null = localStorage.getItem("locale");
  if (currentLocale == null) {
    currentLocale = "default";
    setLocale(currentLocale);
  }
  return currentLocale;
}

function setLocale(locale: string): void {
  localStorage.setItem("locale", locale);
  currentLocale.value = locale;
}

export default function useLocale() {
  return {
    locales,
    currentLocale,
    setLocale
  };
}
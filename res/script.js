(function () {
  const a =
    "https://youtube.fandom.com/api.php?action=query&format=json&meta=siteinfo&formatversion=latest&siprop=statistics";
  const sc = document.createElement("script");

  window.handler = function (data) {
    const ac = data.query.statistics.articles;
    const htmlSwitch = document.getElementById("articleCount");
    htmlSwitch.textContent = ac.toLocaleString();
  };

  sc.src = a + "&callback=handler";
  document.body.appendChild(sc);
})();

const languages = [
  {
    code: "es",
    label: "Español",
    href: "/es",
    message: "¿Desea cambiar el idioma de la página al español?",
  },
  {
    code: "fr",
    label: "Français",
    href: "/fr",
    message: "Voulez-vous changer la langue du site en français ?",
  },
  { code: "hi-latn", label: "Hindi in Latin", href: "/hi-latn", message: "" },
  {
    code: "id",
    label: "Bahasa Indonesia",
    href: "id",
    message:
      "Apakah anda ingin mengubah bahasa dari situs ini ke Bahasa Indonesia?",
  },
];

function isLanguageSupported() {
  for (const lang of languages) {
    if (new RegExp(`^${lang.code}\\b`, "i").test(navigator.language)) {
      return lang;
    }
  }

  return null; // fallback if rejected/unsupported
}

const supportedLanguage = isLanguageSupported();

if (supportedLanguage) {
  const langDiag = document.createElement("dialog");
  const langText = document.createTextNode(supportedLanguage.message);
  const langLink = document.createElement("a");
  langLink.href = supportedLanguage.href;
  langLink.textContent = supportedLanguage.linkText;

  langDiag.appendChild(langText);
  langDiag.appendChild(langLink);

  document.body.appendChild(langDiag);

  langDiag.showModal();
}

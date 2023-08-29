(function() {
  const a = 'https://youtube.fandom.com/api.php?action=query&format=json&meta=siteinfo&formatversion=latest&siprop=statistics';
  const sc = document.createElement('script');

  window.handler = function(data) {
    const ac = data.query.statistics.articles;
    const htmlSwitch = document.getElementById('articleCount');
    htmlSwitch.textContent = ac.toLocaleString();
  };

  sc.src = a + '&callback=handler';
  document.body.appendChild(sc);
})();

if (/^es\b/.test(navigator.language)) {
  const langDiag = document.createElement("dialog");
  const esRedirect = document.createTextNode("¿Desea cambiar el idioma de la página al español?");
  let esLink = document.createElement("a");
  esLink.href = "/es"
}

if (/^hi\b/.test(navigator.language)) {
  const langDiag = document.createElement("dialog");
  const esRedirect = document.createTextNode("क्या आप पेज की भाषा को हिंदी में बदलना चाहते हैं?");
  let esLink = document.createElement("a");
  esLink.href = "/hi"
}
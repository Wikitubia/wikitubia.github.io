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

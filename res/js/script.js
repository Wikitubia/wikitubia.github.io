// @ts-check
console.log(`Like to prod things with a stick? Why not contribute to the wiki, and request membership of our GitHub organization while you're at it? We're always in need of people who aren't afraid to tinker with stuff under the hood.

==> https://github.com/Wikitubia <==`);

/**
 * @param {{ url: URL; attach: HTMLElement; }} cfg
 */
function populateArticleCount(cfg) {
  const urlParams = new Map([
    [ "action", "query" ],
    [ "format", "json" ],
    [ "meta", "siteinfo" ],
    [ "formatversion", "latest" ],
    [ "siprop", "statistics" ],
    [ "origin", "*" ],
    [ "maxlag", "5" ]
  ]);

  urlParams.forEach((param, value) => {
    cfg.url.searchParams.append(value, param);
  });

  fetch(cfg.url)
  .then(response => response.json())
  .then((data) => {
    cfg.attach.textContent = data.query.statistics.articles.toLocaleString();
  })
  .catch(reason => console.log(reason))
}

populateArticleCount({
  url: new URL("https://youtube.fandom.com/api.php"),
  // @ts-ignore
  attach: document.getElementById('articleCount'),
});

"use strict";

const countElem = document.getElementById("articleCount");
fetch(
  "https://youtube.fandom.com/api.php?action=query&format=json&meta=siteinfo&formatversion=latest&siprop=statistics",
  {mode: 'cors'}
)
  .then((response) => response.json())
  .then(data => countElem.textContent = new Intl.NumberFormat().format(data.query.statistics.articles));

"use strict";

function getYoutuberPage() {
  const fetchURL = "https://youtube.fandom.com/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&formatversion=2";
  const response = await fetch(fetchURL);
  const pageTitle = response.json();
  return pageTitle.query.random[0].title.toString();
}

// TODO: Continue this
/*
function getYoutuberInfo() {
  let fetchURL = `https://youtube.fandom.com/api.php?action=query&prop=extracts&exchars=200&explaintext&titles=${getYoutuberPage()}&formatversion=2`;
  const response = await fetch(fetchURL);
  const pageData = response.json();
  return pageData.
}
*/

function getYoutuberImage() {
  const fetchURL = `https://youtube.fandom.com/api.php?action=query&format=json&prop=pageimages&titles=${getYoutuberPage()}&formatversion=2`;
  const response = await fetch(fetchURL);
  const pageImageName = response.json();
  return `https://static.wikia.nocookie.net/youtube/images/1/15/${pageImageName.query.pages[0].pageimage.toString()}/revision/latest/scale-to-width-down/200`;
}
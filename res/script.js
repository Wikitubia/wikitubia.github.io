"use strict";

const countElem = document.getElementById("articleCount");
fetch("count.json", { mode: "no-cors" })
  .then((response) => response.json())
  .then(
    (data) => (countElem.textContent = new Intl.NumberFormat().format(data.int))
  );

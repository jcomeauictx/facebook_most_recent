chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(
    null, 
    {code: "window.location.href = 'https://facebook.com/?sk=h_chr'"},
    null
  );
});

var mostRecent = "https://www.facebook.com/?sk=h_chr";
var selector = 'a[href="https://www.facebook.com/?ref=logo"]';
var nodes = document.querySelectorAll(selector);
// foreach construct doesn't work for some reason I don't understand
for (var i = 0; i < nodes.length; i++) nodes[i].href = mostRecent;

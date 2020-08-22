var mostRecent = "/?sk=h_chr";
var selector = [
	'a[href="/"]',
	'a[href="https://www.facebook.com"]',
	'a[href="https://www.facebook.com/"]',
	'a[href="https://www.facebook.com/?ref=logo"]'
].join(",");
var node = document.querySelector(selector);  // just get first one
var image = node.querySelector("svg,img");
var cleanLink = document.createElement("a");
cleanLink.setAttribute("href", mostRecent);
//cleanLink.appendChild(document.createTextNode("f"));
cleanLink.appendChild(image);
cleanLink.style.border = "1px solid red";
node.parentNode.appendChild(cleanLink);

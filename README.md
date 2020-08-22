This is a very simple Chrome or Chromium extension to keep Facebook posts in
"most recent" order. Default Facebook behavior is to ignore your "Newsfeed"
preference when you click the [f] icon on the top left of the page, and return
you to "top posts". This used to set the [f] icon to return posts in "most
recent" order by changing the querystring from `?ref=logo` to `?sk=h_chr`.
However, the Facebook overhaul in August of 2020 broke it, because their
JavaScript is monitoring the page for changes and will overwrite modified
elements.

So now, to get Most Recent posts, you need to click the extension's icon rather
than the [f] on the Facebook page.

To install the extension:
   1. `git clone` this repository
   2. Open a new tab and visit <chrome://extensions>
   3. At the top right, slide the Developer Mode button to the right if it isn't already there.
   4. At the left, click [Load unpacked] and navigate to the directory of the cloned repository.

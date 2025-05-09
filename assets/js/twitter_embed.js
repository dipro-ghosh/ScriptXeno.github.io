(function () {
  const themeMapper = Theme.getThemeMapper('light', 'dark'); // map your light/dark values
  let currentTheme = themeMapper[Theme.visualState];

  // Function to load a tweet with the correct theme
  function renderTweet() {
    const tweetContainer = document.getElementById('tweet-container');
    const tweetId = tweetContainer.getAttribute('data-tweet-id');
    tweetContainer.innerHTML = ''; // Clear previous tweet

    if (!window.twttr) return;

    window.twttr.widgets
      .createTweet(tweetId, tweetContainer, {
        theme: currentTheme,
        align: 'center' // optional
      })
      .then(function (el) {
        console.log('Tweet render complete with theme:', currentTheme);
      })
      .catch(function (e) {
        console.error('Tweet render failed:', e);
      });
  }

  // Dynamically load Twitter widget if not present
  function loadTwitterWidgets() {
    if (window.twttr && window.twttr.widgets) {
      renderTweet();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = function () {
        renderTweet();
      };
      document.head.appendChild(script);
    }
  }

  // Listen for theme changes (like in Giscus)
  window.addEventListener('message', (event) => {
    if (event.source === window && event.data && event.data.id === Theme.ID) {
      const newTheme = themeMapper[Theme.visualState];

      if (newTheme !== currentTheme) {
        currentTheme = newTheme;
        renderTweet();
      }
    }
  });

  // Wait until page is loaded
  window.addEventListener('load', function () {
    loadTwitterWidgets();
  });
})();

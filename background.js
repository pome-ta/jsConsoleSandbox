chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: './docs/index.html',
    type: 'popup',
    width: 640,
    height: 320,
  });
});

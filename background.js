const convertShortsToNormal = (details) => {
  if (details.frameId !== 0) return;

  const url = details.url;
  const match = url?.match(/youtube\.com\/shorts\/([^/?#]+)/);
  
  if (match) {
    try {
      const videoId = match[1];
      const urlObj = new URL(url);
      const targetUrl = new URL(`https://www.youtube.com/watch?v=${videoId}`);
      
      if (urlObj.search) targetUrl.search = urlObj.search;
      if (urlObj.hash) targetUrl.hash = urlObj.hash;

      chrome.scripting.executeScript({
        target: { tabId: details.tabId, frameIds: [0] },
        func: (url) => { location.replace(url); },
        args: [targetUrl.toString()]
      });
    } catch (error) {
      console.error("URL 변환 중 오류 발생:", error);
    }
  }
};

chrome.webNavigation.onHistoryStateUpdated.addListener(convertShortsToNormal, {
  url: [{ hostSuffix: "youtube.com", pathContains: "/shorts/" }]
});
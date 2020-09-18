
export const openTab = async (page: string) => {
  chrome.tabs.create({ url: chrome.extension.getURL('popup/index.html#mainpage/' + page) })
}

export const attachIncognitoFilter = () => {
  chrome
    .webRequest
    .onBeforeSendHeaders
    .addListener(
      incognitoRequestFilter,
      { urls: ['<all_urls>'] },
      ['blocking', 'requestHeaders', 'extraHeaders']
    );
}

export const removeIncognitoFilter = () => {
  chrome
    .webRequest
    .onBeforeSendHeaders
    .removeListener(
      incognitoRequestFilter
    );
}

export const incognitoRequestFilter = (request: any) => {
  // Apply this filter to our requests only

  if (request.initiator != 'chrome-extension://' + chrome.runtime.id) {
    return;
  }
  if (request.url.match('^https?') == null) {
    return { cancel: true };
  }
  let headers = request.requestHeaders.filter((header: any) => {
    return header.name == 'User-Agent'
  });
  headers.push({
    name: 'Accept',
    value: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0'
  });
  headers.push({
    name: 'Cache-Control',
    value: 'no-cache'
  });
  return {
    requestHeaders: headers
  };
}
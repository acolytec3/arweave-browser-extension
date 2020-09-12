
export const openTab = async (page: string) => {
  chrome.tabs.create({ url: chrome.extension.getURL('popup/index.html#mainpage/' + page) })
}

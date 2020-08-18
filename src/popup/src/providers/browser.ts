import axios from 'axios'
export const openTab = async (page: string) => {
  let url = window.location.hash.substr(17,);
  let source = (await axios.get(url)).data
  localStorage.setItem('pageSource', source)
  console.log(source)
  chrome.tabs.create({ url: chrome.extension.getURL('popup/index.html#mainpage/' + page) })
}

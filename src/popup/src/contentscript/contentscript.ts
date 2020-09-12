import { Store } from 'webext-redux'


(function(){
    
    async function onMessage(message: any, sender: chrome.runtime.MessageSender) {
        console.log(message)
        let store = new Store()
        await store.ready()
        if (message.hasOwnProperty('action')) {
            console.log('sending message')
            let result = await store.dispatch({
                type: 'SET_PAGE_SOURCE',
                payload: {
                title: document.title,
                url: document.location.href,
                html: document.documentElement.outerHTML,
            }})
            console.log(result)
            return Promise.resolve('Hello from content script')
        }
    


    };
    chrome.runtime.onMessage.addListener(onMessage);
    console.log('Waiting for a queue')
})();
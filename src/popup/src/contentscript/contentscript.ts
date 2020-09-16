import { Store } from 'webext-redux'


(function(){
    
    async function onMessage(message: any, sender: chrome.runtime.MessageSender) {
     
        if (message.hasOwnProperty('action')) {

            let store = new Store()
            await store.ready()
            let result = await store.dispatch({
                type: 'SET_PAGE_SOURCE',
                payload: {
                title: document.title,
                url: document.location.href,
                html: document.documentElement.outerHTML,
            }})
            console.log(result)
        } 
    


    };
    chrome.runtime.onMessage.addListener(onMessage);
})();
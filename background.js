import getToken from "./api/getToken.js";


chrome.runtime.onInstalled.addListener(details => {
    getToken();
})

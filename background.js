import getToken from "./api/getToken.js";
import getTrack from "./api/getTrack.js";

chrome.runtime.onInstalled.addListener(details => {
    getToken();
    getTrack();
})

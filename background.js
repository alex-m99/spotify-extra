import getToken from "./api/getToken.js";
import getTrack from "./api/getTrack.js";

chrome.runtime.onInstalled.addListener(async details => {
    // Listen for a message from the popup to indicate that it's ready to receive the token
    const token = await getToken();
    console.log(token)
    // chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    //    if (message.type === "popup_ready") {
    //       sendMessageToPopup({ type: "token", data: token });
    //    }
    // });
 });

// const sendMessageToPopup = (message) => {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, message);
//       });
// }

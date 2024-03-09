async function getTrack(token) {

  const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
  });

  const data = await result.json();
  return data;
}
// Send a message to background.js to indicate that the popup is ready to receive the token
// chrome.runtime.sendMessage({ type: "popup_ready" });

// // Listen for messages from background.js
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.type === "token") {
//     console.log("Message from background:", message.data);
//     // Handle the message here
//   }
// });

document.addEventListener('DOMContentLoaded', async function() {
  const track = await getTrack("BQDOvxWMvUnhQ2X0RbNzeZc2oHk-rx0ooZJAAxSMk7uAM9EJLAZ8pl40tKzNo80evgM2H7m86eDgN0j6OfYakY_zMFXmwqQOMQcCg7yhTh2VAte3pVc");
  console.log("Current track is", track);

});


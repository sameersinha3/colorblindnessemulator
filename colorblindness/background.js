chrome.action.onClicked.addListener(execScript);

async function execScript() {
    chrome.scripting.executeScript({
        target: { tabId: chrome.window.getCurrent, allFrames: true},
        files: ["listener.js"]
    });
}
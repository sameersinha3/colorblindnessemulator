// Inject a javascript file on click event in the extension, the js file applies a filter to simulate colorblindness
window.onload = function () {
    if (!chrome || !chrome.storage || !chrome.storage.local) return;

    chrome.storage.local.get(["key"], function (result) {
        try {
            document.getElementById(result.key).click();
        } catch (e) {
            console.log(e);
        }
    });
};

/* 
 * helper function to capture filter selection
 */
function setFilter(value) {
    try {
        chrome.storage.local.set({key: value}, function () {
            document.getElementById(value).checked = true;
        });
    } catch {}
}

/* 
 * main functionality - creates and applies the filter
 */
function executeFilter(filterName) {
    if (document.getElementById("colorblindness-filter-styling-id")) {
        stylingID = document.getElementById("colorblindness-filter-styling-id").remove();
        filterID = document.getElementById("colorblindness-filter-id").remove();
    }

    stylingID = document.createElement("style");
    stylingID.id = "colorblindness-filter-styling-id";
    document.body.appendChild(stylingID);

    filterID = document.createElement("div");
    filterID.id = "colorblindness-filter-id";
    filterID.setAttribute("style", "height: 0, padding: 0, margin: 0, line-height: 0");
    document.body.appendChild(filterID);

    switch (filterName) {
        case "achromatomaly":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618, 0.320, 0.062, 0, 0,0.163, 0.775, 0.062, 0, 0,0.163, 0.320, 0.516, 0, 0, 0,0,0,1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#achromatomaly);-moz-filter:(#achromatomaly);-ms-filter:(#achromatomaly);-o-filter:(#achromatomaly);filter:(#achromatomaly);}'
            break;
        case "achromatopsia":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299, 0.587, 0.114, 0, 0,0.299, 0.587, 0.114, 0, 0,0.299, 0.587, 0.114, 0, 0,0,0,0,1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#achromatopsia);-moz-filter:(#achromatopsia);-ms-filter:(#achromatopsia);-o-filter:(#achromatopsia);filter:(#achromatopsia);}'
            break;
        case "protanomaly":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanomaly"> <feColorMatrix type="matrix" values="0.817, 0.183, 0,0, 0,0.333, 0.667, 0,0, 0,0,0.125, 0.875, 0, 0,0,0,0,1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#protanomaly);-moz-filter:(#protanomaly);-ms-filter:(#protanomaly);-o-filter:(#protanomaly);filter:(#protanomaly);}'
            break;
        case "protanopia":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0,0.558, 0.442, 0,0, 0,0, 0.242, 0.758, 0, 0,0,0,0,1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#protanopia);-moz-filter:(#protanopia);-ms-filter:(#protanopia);-o-filter:(#protanopia);filter:(#protanopia);}'
            break;
        case "deuteranomaly":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8, 0.2,0, 0, 0,0.258, 0.742, 0,0, 0,0,0.142, 0.858, 0, 0,0,0,0,1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranomaly);-moz-filter:(#deuteranomaly);-ms-filter:(#deuteranomaly);-o-filter:(#deuteranomaly);filter:(#deuteranomaly);}'
            break;
        case "deuteranopia":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0,0.7,  0.3,0,0, 0,0, 0.3,0.7, 0, 0,0,0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranopia);-moz-filter:(#deuteranopia);-ms-filter:(#deuteranopia);-o-filter:(#deuteranopia);filter:(#deuteranopia);}'
            break;
        case "tritanomaly":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanomaly"> <feColorMatrix type="matrix" values="0.967, 0.033, 0,0, 0,0,0.733, 0.267, 0, 0,0,0.183, 0.817, 0, 0,0,0,0,1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#tritanomaly);-moz-filter:(#tritanomaly);-ms-filter:(#tritanomaly);-o-filter:(#tritanomaly);filter:(#tritanomaly);}'
            break;
        case "tritanopia":
            filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanopia"> <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0,0,0.433, 0.567, 0, 0,0, 0.475, 0.525, 0, 0,0,0, 0,1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
            stylingID.innerHTML = 'html{-webkit-filter:url(#tritanopia);-moz-filter:(#tritanopia);-ms-filter:(#tritanopia);-o-filter:(#tritanopia);filter:(#tritanopia);}'
            break;
        case "trichromacy":
            stylingID.innerHTML = 'html{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
            break;
    }
}

/* 
 * helper function to the scripting.executeScript function for passing filter name
 */
function injectFilter(filterName, tab) {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id,
            allFrames: true
        },
        func: executeFilter,
        args: [filterName]
    });
}

/* 
 * helper function to identify and return current tab so we know where to apply filter
 */
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [ tab ] = await chrome.tabs.query(queryOptions);
    return tab;
}

document.querySelectorAll('input[type="radio"]').forEach((radioButton) => {
    const filterName = radioButton.id.replace("-radio", "");

    radioButton.addEventListener("click", async function () {
        const tab = await getCurrentTab();

        setFilter(radioButton.id);
        injectFilter(filterName, tab);
    });
});
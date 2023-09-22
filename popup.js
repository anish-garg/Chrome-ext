const btn = document.querySelector('.title-btn')
const tabTitle = document.querySelector('.tabTitle')
const copybtn = document.querySelector('copy')


btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // console.log(tab);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: titleFinder,
    }, async (injectionResults) => {
        const [data] = injectionResults;
        // console.log(data);
        if (data.documentId) {
            var title = tab.title
            // console.log(title); 
            tabTitle.innerHTML = title;
        }
    });
});

function titleFinder() {
    console.log(document.title);
}

let currentTab = "all";
const tabActive = ["bg-[#4A00FF]", "text-white"];
const tabInactive = ["bg-transparent", "text-neutral/50"];

//tab call with function

const allContainer = findId('btn-all');
const openContainer = findId('btn-open');
const closedContainer = findId('btn-close');

//function for change tab
function toggleTab(tab) {
    
    const tabs = ["all", "open", "close"];
    currentTab = tab;

    for (const button of tabs) {

        const tabName = document.getElementById("btn-" + button);
        if (button === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
}

toggleTab(currentTab);
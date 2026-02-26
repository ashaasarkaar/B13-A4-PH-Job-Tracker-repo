//Toggle between three tabs
const activeTab = ["bg-blue-600", "text-white"];
const inactiveTab = ["bg-transparent", "text-neutral/50"];

function changeTab(tab) {
    const tabs = ['all', 'interview', 'rejected'];

    for(const btn of tabs) {
        const tabName = document.getElementById("tab-" + btn);
        if (btn === tab) {
            tabName.classList.remove(...inactiveTab);
            tabName.classList.add(...activeTab);
        }
        else {
            tabName.classList.remove(...activeTab);
            tabName.classList.add(...inactiveTab);
        }
    }
}

//All tab set as a defalut tabs
let defaultTab = 'all';
changeTab(defaultTab); 
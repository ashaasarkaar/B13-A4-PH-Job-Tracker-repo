//Toggle between three tabs
const activeTab = ["bg-blue-600", "text-white"];
const inactiveTab = ["bg-transparent", "text-neutral/50"];

//cards section toggle between three three TABS
const allContainer = getId('all-container');
const interviewContainer = getId('interview-container');
const rejectedContainer = getId('rejected-container');
const emptyContainer = getId('empty-container');

function changeTab(tab) {
    const tabs = ['all', 'interview', 'rejected'];

    for (const btn of tabs) {
        const tabName = getId("tab-" + btn);
        if (btn === tab) {
            tabName.classList.remove(...inactiveTab);
            tabName.classList.add(...activeTab);
        }
        else {
            tabName.classList.remove(...activeTab);
            tabName.classList.add(...inactiveTab);
        }
    }

    // emptyContainer.classList.add("hidden");
    
    //initially hidden all the webpages
    const webpages = [allContainer, interviewContainer, rejectedContainer];
    for (const webpage of webpages) {
        webpage.classList.add('hidden');
    }
    //remove hidden class from the clickable tabs or pages
    if (tab === 'all') {
        allContainer.classList.remove('hidden');
        if(allContainer.children.length < 1){
            emptyContainer.classList.remove("hidden");
        }
    }
    else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden');
         if(interviewContainer.children.length < 1){
            emptyContainer.classList.remove("hidden");
        }
    }
    else {
        rejectedContainer.classList.remove('hidden');
        if(rejectedContainer.children.length < 1){
            emptyContainer.classList.remove("hidden");
        }
    }
}

//All tab set as a defalut tabs
let defaultTab = 'all';
changeTab(defaultTab);

//Dashboard count Update
const totalCount = getId('total-count');
const interviewCount = getId('interview-count');
const rejectedCount = getId('Rejected-count');


//three buttons work inside card + also changed buttons name after clicking + dashboard update(reject + interview)
document.getElementById("parent-container")
    .addEventListener('click', function (event) {
        const clickElement = event.target;
        const card = clickElement.closest(".card");
        const parent = card.parentNode;
        const changeStatus = card.querySelector(".change-status");

        if (clickElement.classList.contains("interview")) {
            changeStatus.innerText = "Interviewed";
            interviewContainer.appendChild(card);
            updateDashboard();
        }
        if (clickElement.classList.contains("reject")) {
            changeStatus.innerText = "Rejected";
            rejectedContainer.appendChild(card);
            updateDashboard();
        }
        if (clickElement.classList.contains("delete")) {
            parent.removeChild(card);
            updateDashboard();
        }
    })

// finally all the dashboard update
function updateDashboard() {
    totalCount.innerText = allContainer.children.length;
    interviewCount.innerText = interviewContainer.children.length;
    rejectedCount.innerText = rejectedContainer.children.length;
}

updateDashboard();



let currentTab = "all";
const tabActive = ["bg-[#4A00FF]", "text-white"];
const tabInactive = ["bg-transparent", "text-neutral/50"];

//tab call with function

const allContainer = document.getElementById('btn-all');
const openContainer = document.getElementById('btn-open');
const closedContainer = document.getElementById('btn-close');
const allCardContainer = document.getElementById('card-container');
const openCardContainer = document.getElementById('open-card-container');
const closeCardContainer = document.getElementById('close-card-container');
const issueCount = document.getElementById('issue-count');

//function for showing spinner start
const manageSpinner = (status) =>{
    if(status === true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("card-container").classList.add("hidden");
    }
    else{
         document.getElementById("card-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
};
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
    //add hidden class in containers
    const webpages = [allCardContainer, openCardContainer, closeCardContainer]
    for(const webpage of webpages) {
        webpage.classList.add('hidden');
    }
    //remove hidden class in click sections
    if(tab === 'all') {
        allCardContainer.classList.remove('hidden');
    }
    else if(tab === 'open'){
        openCardContainer.classList.remove('hidden');
    }
    else{
        closeCardContainer.classList.remove('hidden');
    }
    changeDashboard();
};

//group of html elements
const createElements = (arr) =>{
    const htmlElements = arr.map((el)=>`
    <span class="btn btn-secondary btn-soft text-sm  w-35 rounded-full
    ${el === "bug" ? 'btn-error'
    : el === "help wanted" ? 'btn-warning'
    : el === "enhancement" ? 'btn-success'
    : el === "documentation" ? 'btn-info'
    : 'btn secondary'
    }">
    ${el === "bug" ? '<i class="fa-solid fa-bug"></i>'
      : el === "help wanted" ? '<i class="fa-solid fa-life-ring"></i>'
      : el === "enhancement" ? '<i class="fa-solid fa-burst"></i>'
      : el === "documentation" ? '<i class="fa-solid fa-file"></i>'
      : '<i class="fa-brands fa-jira"></i>'
    }
     ${el}</span>`);
    return htmlElements.join(" "); //array k string kore
}

// all card api 
const loadCard = () => {
    manageSpinner(true);
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(json =>{
        displayCard(json.data);
    });
};
const displayCard = (cards) =>{
    //console.log(cards);
    //1.get parent element
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    openCardContainer.innerHTML = "";
    closeCardContainer.innerHTML = "";
    //2. get into every cards
    cards.forEach(card => {
             //3. create element
        const newCard= document.createElement("div");
        newCard.innerHTML = `
              <div onclick="cardDetails(${card.id})" class="card-body p-5  shadow-lg space-y-2 rounded-xl border-t-4 ${card.status === 'open'? 'border-green-500' : 'border-purple-500'} overflow-hidden h-96">
                <div class="flex justify-between items-center">
                 <img src="./assets/${card.status === 'open' ? 'Open-Status.png' : 'Closed- Status .png'}" alt="">
                    <button class="${card.priority === 'high'
                         ? 'btn btn-secondary btn-soft'
                        : card.priority === 'medium'
                       ?'btn btn-warning btn-soft'
                       :'btn btn-neutral btn-soft'} rounded-full px-10">${card.priority.toUpperCase()}</button>
                </div>
                <h2 class="font-semibold text-sm ">${card.title}</h2>
                <p class="text-neutral/50 text-sm">${card.description}</p>
                <div class="flex gap-1">
                    ${createElements(card.labels)}
                </div>
                    <div class="divider -mx-5"></div>
                    <p class="text-neutral/50">#1 by ${card.author}</p>
                    <p class="text-neutral/50">${new Date(card.createdAt).toLocaleString()}</p>
            </div>
        `;
        //4. append child
         cardContainer.appendChild(newCard);

         const cloneCard = newCard.cloneNode(true);
        card.status === "open"
        ? openCardContainer.appendChild(cloneCard)
        : closeCardContainer.appendChild(cloneCard)
    })
    manageSpinner(false);
   changeDashboard()
};

const searchInput = document.getElementById('textbox');
searchInput.addEventListener("input",function(){
    const value = searchInput.value.toLowerCase().replace(/\s/g, "");
    if(value === ""){
        loadCard();
        return;
    }
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${value}`)
    .then(res => res.json())
    .then(data =>{
        //displayCard(data.data);
         const filtered = data.data.filter(item => item.title.toLowerCase().replace(/\s/g, "").includes(value));
        displayCard(filtered);
    })
});


// modal 
const cardDetails = async (id) =>{
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displayCardDetails(details.data);
};

const displayCardDetails = (info)=>{
    const detailsBox = document.getElementById('details-container');
    detailsBox.innerHTML = `
    <div class="space-y-3 ">
        <h1 class="font-bold text-2xl">${info.title}</h1>
        <div class="flex space-x-2 items-center">
            <button class="${info.status === 'open'? 'btn btn-success' : 'btn btn-primary'} rounded-full">${info.status}</button>
            <div class="flex items-center gap-1">
                <div class="w-1 h-1 rounded-full bg-gray-500"></div>
                <p class="text-neutral/50">${info.status} by ${info.assignee}</p>
            </div>
           <div class="flex items-center gap-1">
            <div class="w-1 h-1 rounded-full bg-gray-500" ></div>
             <p class="text-neutral/50">${new Date(info.updatedAt).toLocaleString()}</p>
           </div>
        </div>
        <div class="btns flex gap-2 items-center">
           ${createElements(info.labels)}
        </div>
        <p class="text-neutral/50">${info.description}</p>

        <div class="bg-base-200 flex justify-around items-center p-5 rounded-lg">
            <div>
                <p class="text-neutral/50">Assignee:</p>
                <p class="font-semibold">${info.assignee}</p>
            </div>
            <div>
                <p class="text-neutral/50">Priority:</p>
                <button class="${info.priority === 'high'
                         ? 'btn btn-secondary'
                        : info.priority === 'medium'
                       ?'btn btn-warning'
                       :'btn btn-neutral'} rounded-full px-10">${info.priority.toUpperCase()}</button>
            </div>
        </div>
    </div>

     <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>

    `;
    document.getElementById("card_modal").showModal();
};
function changeDashboard() {

    const countObject = {
        all: allCardContainer.children.length,
        open: openCardContainer.children.length,
        close: closeCardContainer.children.length,
    };

   issueCount.innerText = countObject[currentTab];
};


changeDashboard();
loadCard();
toggleTab(currentTab);
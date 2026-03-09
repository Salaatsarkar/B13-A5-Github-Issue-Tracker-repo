
let currentTab = "all";
const tabActive = ["bg-[#4A00FF]", "text-white"];
const tabInactive = ["bg-transparent", "text-neutral/50"];

//tab call with function

const allContainer = document.getElementById('btn-all');
const openContainer = document.getElementById('btn-open');
const closedContainer = document.getElementById('btn-close');

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
};

//group of html elements
const createElements = (arr) =>{
    const htmlElements = arr.map((el)=>`
    <span class="btn btn-secondary btn-soft rounded-full"> ${el}</span>`);
    return htmlElements.join(" "); //array k string kore
}

// all card api 
const loadCard = () => {
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
  // cardContainer.innerHTML = "";
    //2. get into every cards
    cards.forEach(card => {
        //3. create element
        const newCard= document.createElement("div");
        newCard.innerHTML = `
        
              <div class="card-body p-5  shadow-lg space-y-2 rounded-xl border-t-4 ${card.status === 'open'? 'border-green-500' : 'border-purple-500'}">
                <div class="flex justify-between items-center">
                 <img src="./assets/${card.status === 'open' ? 'Open-Status.png' : 'Closed- Status .png'}" alt="">
                
                    <button class="btn btn-secondary btn-soft rounded-full px-10">${card.priority}</button>
                </div>
                <h2 class="font-semibold text-sm ">${card.title}</h2>
                <p class="text-neutral/50 text-sm">${card.description}</p>
                <div class="flex gap-2 ">
                   
                    ${createElements(card.labels)}
                </div>
                    <div class="divider -mx-5"></div>
                    <p class="text-neutral/50">#1 by ${card.author}</p>
                    <p class="text-neutral/50">${card.updatedAt}</p>
            </div>
        
        `;
        //4. append child
        cardContainer.append(newCard);

    })
    
};
loadCard();
 toggleTab(currentTab);
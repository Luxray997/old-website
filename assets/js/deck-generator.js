import cardList from './modules/cardList.json' assert { type: 'json' };
import championList from './modules/championList.json' assert { type: 'json' };
import  { 
   getValueFromRadioButtons, 
   randomInt 
}  from './util.js';

console.log("Deck Generator Script Loaded");

window.rarityMap = new Map();
rarityMap.set("Common", 0);
rarityMap.set("Rare", 1);
rarityMap.set("Epic", 2);
rarityMap.set("Legendary", 3);
rarityMap.set("Champion", 4);

window.mode = "hide";
window.excludeArr = new Map();
window.includeArr = new Map();
window.includeHasChampion = false;
window.cardArr = new Map();
populateFilterCardList()

document.getElementById("filter-form").addEventListener("change", filterOptionClicked);
document.getElementsByClassName("generate-button")[0].addEventListener("click", linkRandomDeck);
document.getElementById("filter-hide-button").addEventListener("click", hideFilterClicked);

function filterOptionClicked(hide) {
   mode = getValueFromRadioButtons(document.getElementsByClassName("filter-option"));
   let cardContainer = document.getElementById("card-filter-container");
   let includeUl = document.getElementById("include-filter-ul");
   let excludeUl = document.getElementById("exclude-filter-ul");
   let noneUl = document.getElementById("none-filter-ul");
   includeUl.classList.remove("selected-filter");
   excludeUl.classList.remove("selected-filter");
   noneUl.classList.remove("grayed-out-container");
   noneUl.classList.remove("grayed-out-champion-container");
   if (hide == "hide") {
      cardContainer.style.display = "none";
      document.getElementById("filter-form").reset();
   } else if ( mode=="include" ) {
      includeUl.classList.add("selected-filter");
      if (includeArr.size >= 8)
         noneUl.classList.add("grayed-out-container");
      if (includeHasChampion)
         noneUl.classList.add("grayed-out-champion-container");
      cardContainer.style.display = "flex";
   } else if ( mode=="exclude" ) {
      excludeUl.classList.add("selected-filter");
      cardContainer.style.display = "flex";
   }
}

function hideFilterClicked() {
   filterOptionClicked("hide");
}

function populateFilterCardList() {
   let cardContainer = document.getElementById("none-filter-ul");
   for (let i = 0; i < cardList.length; i++) {
      const card = cardList[i];
      const li = document.createElement("li");
      const image = document.createElement("img");
      image.setAttribute("src", card.icon);
      if (card.rarity == "Champion")
         image.setAttribute("class", "champion");
      image.setAttribute("alt", card.name);
      image.addEventListener("click", cardClicked);
      li.appendChild(image);
      for (let entry in card) {
         image.dataset[entry] = card[entry];
      }
      cardContainer.appendChild(li);
      cardArr.set(card.name, li);
   }
   bubbleSortCardList(cardContainer, compareRarity);
}



/*
   Bubble sort
*/
function bubbleSortCardList(cardListUl, compareFunction) {
   let switchedOnPass = true;
   let passes = 0;
   while (switchedOnPass) {
      switchedOnPass = false;
      for (let i = 0; i < cardListUl.children.length - 1 - passes; i++) {
         if (compareFunction(cardListUl.children[i].firstChild, cardListUl.children[i + 1].firstChild)) {
            cardListUl.insertBefore(cardListUl.children[i + 1], cardListUl.children[i]);
            switchedOnPass = true;
         }
      }
   }
}

function compareRarity(a, b) {
   return rarityMap.get(a.dataset.rarity) < rarityMap.get(b.dataset.rarity);
}

function cardClicked() {
   if (this.parentNode.parentNode == document.getElementById("none-filter-ul")) {
      if (mode == "include") {
         if (includeHasChampion && this.classList.contains("champion"))
            return;
         if (includeArr.size <= 7) {
            cardArr.delete(this.dataset.name);
            includeArr.set(this.dataset.name, this.parentNode);
            document.getElementById("include-filter-ul").appendChild(this.parentNode);
            if (includeArr.size == 8)
               document.getElementById("none-filter-ul").classList.add("grayed-out-container");
            if (this.classList.contains("champion"))
            {
               document.getElementById("none-filter-ul").classList.add("grayed-out-champion-container");
               includeHasChampion = true;
            }
         } else
            return;
      } else if (mode == "exclude") { 
         if (cardArr.size <= 8)
            return;
         if (cardArr.size == 9) {
            document.getElementById("none-filter-ul").classList.add("grayed-out-container");
         }
         cardArr.delete(this.dataset.name);
         excludeArr.set(this.dataset.name, this.parentNode);
         document.getElementById("exclude-filter-ul").appendChild(this.parentNode);
      }
   } else if (this.parentNode.parentNode == document.getElementById("include-filter-ul")) {
      document.getElementById("none-filter-ul").appendChild(this.parentNode);
      document.getElementById("none-filter-ul").classList.remove("grayed-out-container")
      includeArr.delete(this.dataset.name);
      cardArr.set(this.dataset.name, this.parentNode);
      if (this.classList.contains("champion"))
         document.getElementById("none-filter-ul").classList.remove("grayed-out-champion-container");
         includeHasChampion = false;
      bubbleSortCardList(document.getElementById("none-filter-ul"), compareRarity);
   } else /* exclude */ {
      document.getElementById("none-filter-ul").appendChild(this.parentNode);
      document.getElementById("none-filter-ul").classList.remove("grayed-out-container")
      excludeArr.delete(this.dataset.name);
      cardArr.set(this.dataset.name, this.parentNode);
      bubbleSortCardList(document.getElementById("none-filter-ul"), compareRarity);
   }
}

function createRandomDeck(excludeArr, includeArr, champion) {
   let deck = [];
   let hasChampion = false;

   includeArr.forEach(e => {
      deck.push(e);
      if (e.rarity == "Champion") 
         hasChampion = true;
   });
   if (!hasChampion && champion == 2) {
      let excludedChampionList = championList.filter(e => !excludeArr.some(e2 => e2.id == e.id));
      if (excludedChampionList.length > 0)
         deck.push(excludedChampionList[randomInt(0, excludedChampionList.length)]);
      hasChampion = true
   } else if (champion == 0) {
      hasChampion = true;
   }

   while (deck.length < 8) {
      let card = cardList[randomInt(0, cardList.length)];
      if (!deck.includes(card) && !excludeArr.some(e => e.id == card.id)) {
         if (card.rarity == "Champion") {
            if (hasChampion) continue;
            hasChampion = true;
         }
         deck.push(card);
      }
   }

   return deck;
}

function getLinkFromDeck(deck) {
   let link = "https://link.clashroyale.com/deck/en?deck=";
   deck.forEach(e => {
      link += e.id + ";"
   });
   return link.substring(0, link.length - 1) + "&id=2Q8C888LL"
}


function linkRandomDeck() {
   let cardContainer = document.getElementsByClassName("card-container")[0];
   while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
   }

   let EXCLUDE_LIST = [];
   for (let li of window.excludeArr.values()) {
      EXCLUDE_LIST.push(
         {
            "name" : li.firstChild.dataset.name,
            "elixir" : parseInt(li.firstChild.dataset.elixir),
            "type" : li.firstChild.dataset.type,
            "rarity" : li.firstChild.dataset.rarity,
            "id" : parseInt(li.firstChild.dataset.id),
            "icon" : li.firstChild.dataset.icon,
         }
      );
   }
   let INCLUDE_LIST = [];
   for (let li of window.includeArr.values()) {
      INCLUDE_LIST.push( 
         {
            "name" : li.firstChild.dataset.name,
            "elixir" : parseInt(li.firstChild.dataset.elixir),
            "type" : li.firstChild.dataset.type,
            "rarity" : li.firstChild.dataset.rarity,
            "id" : parseInt(li.firstChild.dataset.id),
            "icon" : li.firstChild.dataset.icon
         }
      );
   }
   const CHAMPION_SETTING = getValueFromRadioButtons(document.getElementsByClassName("champion-option"));
   let deck = createRandomDeck(EXCLUDE_LIST, INCLUDE_LIST, CHAMPION_SETTING);
   let link = getLinkFromDeck(deck);
   let linkOutput = document.getElementById("link");
   linkOutput.innerHTML = "COPY LINK";
   linkOutput.setAttribute("href", link);
   linkOutput.style.display = "inline-block";
   

   deck.forEach(card => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.setAttribute("class", "card-name");
      const text = document.createTextNode(card.name);
      const image = document.createElement("img");
      image.setAttribute("src", card.icon);
      image.setAttribute("class", card.rarity == "Champion" ? "card-img champion" : "card-img");
      image.setAttribute("alt", card.name);
      span.appendChild(text);
      li.appendChild(span);
      li.appendChild(image);
      li.style.opacity = 0;
      cardContainer.appendChild(li);
   });
}


import cardList from './modules/cardList.json' assert { type: 'json' };
import championList from './modules/championList.json' assert { type: 'json' };
import  { 
   getValueFromRadioButtons, 
   randomInt 
}  from './util.js';

window.mode = "hide";
window.excludeArr = [];
window.includeArr = [];
window.cardArr = [];
populateFilterCardList()

document.getElementById("filter-form").addEventListener("change", filterOptionClicked);
document.getElementsByClassName("generate-button")[0].addEventListener("click", linkRandomDeck);

function filterOptionClicked() {
   mode = getValueFromRadioButtons(document.getElementsByClassName("filter-option"));
   let cardContainer = document.getElementById("card-filter-container");
   let includeUl = document.getElementById("include-filter-ul");
   let excludeUl = document.getElementById("exclude-filter-ul");
   includeUl.classList.remove("selected-filter");
   excludeUl.classList.remove("selected-filter");
   if (mode == "hide") {
      cardContainer.style.display = "none";
   } else if ( mode=="include" ) {
      includeUl.classList.add("selected-filter");
      cardContainer.style.display = "block";
   } else if ( mode=="exclude" ) {
      excludeUl.classList.add("selected-filter");
      cardContainer.style.display = "block";
   }


}

function populateFilterCardList() {
   let cardContainer = document.getElementById("none-filter-ul");
   for (let i = 0; i < cardList.length; i++) {
      const card = cardList[i];
      const li = document.createElement("li");
      const image = document.createElement("img");
      image.setAttribute("src", card.icon);
      // image.setAttribute("class", card.rarity == "Champion" ? "card-img champion" : "card-img");
      image.setAttribute("alt", card.name);
      image.addEventListener("click", cardClicked);
      li.appendChild(image);
      cardContainer.appendChild(li);
      cardArr.push({li, card});
   }
}

function cardClicked() {
   let cardPair = cardArr.find(e => e.li == this.parentNode);
   if (mode == "include") {
      document.getElementById("include-filter-ul").appendChild(this.parentNode);
      if (includeArr.length == 6)
         return;
      else if (includeArr.length >= 8)
         return;
   } else if (mode == "exclude") {
      document.getElementById("exclude-filter-ul").appendChild(this.parentNode);
      if (excludeArr.length == 6)
         return;
      else if (excludeArr.length >= 8)
         return;
   }
}

function createRandomDeck(excludeArr, includeArr, champion) {
   let deck = [];
   let hasChampion = false;

   includeArr.forEach(e => {
      deck.push(e);
      if (e.rarity == champion) 
         hasChampion = true;
   });
   if (champion == 2) {
      deck.push(championList[randomInt(0, championList.length)]);
      hasChampion = true
   } else if (champion == 0) {
      hasChampion = true;
   }

   while (deck.length < 8) {
      let card = cardList[randomInt(0, cardList.length)];
      if (!deck.includes(card) && !excludeArr.includes(card)) {
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

   const EXCLUDE_LIST = [];
   const INCLUDE_LIST = [];
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


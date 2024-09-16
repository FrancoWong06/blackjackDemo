let dealerCards = document.querySelector(".dealerCards");
let playerCards = document.querySelector(".playerCards");
let hit = document.querySelector(".hit");
let stand = document.querySelector(".stand");
let total = document.querySelector(".total");
let backCard = document.querySelector(".back");
let dealerTotal = document.querySelector(".dealerTotal");

let dealerImg = document.createElement("img");
let playerImg = document.createElement("img");
let playerImg2 = document.createElement("img");

//Create AllCards
let allCard = [];
function makeCard() {
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "K",
    "Q",
  ];
  let symbol = ["C", "D", "H", "S"];

  for (let i = 0; i < number.length; i += 1) {
    for (let j = 0; j < symbol.length; j += 1) {
      allCard.push(`${number[i]}-${symbol[j]}.png`);
    }
  }
  return allCard;
}
makeCard();

//onpage card
let dealerRandomCard = Math.floor(Math.random() * allCard.length);
dealerImg.src = `cards/${allCard[dealerRandomCard]}`;
dealerCards.appendChild(dealerImg);
let dealerCardN = allCard[dealerRandomCard];
let dealerCardNum = dealerCardN.charAt(0);

//dealer hidden card
// let dealerHiddenRandomCard = Math.floor(Math.random() * allCard.length) +1;

let playerRandomCard = Math.floor(Math.random() * allCard.length);
playerImg.src = `cards/${allCard[playerRandomCard]}`;
playerCards.appendChild(playerImg);

let playerRandomCard2 = Math.floor(Math.random() * allCard.length) + 1;
playerImg2.src = `cards/${allCard[playerRandomCard2]}`;
playerCards.appendChild(playerImg2);

//save player first card value
let firstCardN = allCard[playerRandomCard];
let secondCardN = allCard[playerRandomCard2];
let firstCardNum = firstCardN.charAt(0);
let secondCardNum = secondCardN.charAt(0);

if (
  firstCardNum + secondCardNum === "1A" ||
  firstCardNum + secondCardNum === "JA" ||
  firstCardNum + secondCardNum === "QA" ||
  firstCardNum + secondCardNum === "KA"
) {
  alert("BlackJack You Win");
  location.reload();
} else if (
  firstCardNum + secondCardNum === "A1" ||
  firstCardNum + secondCardNum === "AJ" ||
  firstCardNum + secondCardNum === "AQ" ||
  firstCardNum + secondCardNum === "AQ"
) {
  alert("BlackJack You Win");
  location.reload();
}

function firstCardNumFunc() {
  let firstCardNum = firstCardN.charAt(0);
  if (
    firstCardNum === "2" ||
    firstCardNum === "3" ||
    firstCardNum === "4" ||
    firstCardNum === "5" ||
    firstCardNum === "6" ||
    firstCardNum === "7" ||
    firstCardNum === "8" ||
    firstCardNum === "9"
  ) {
    return (firstCardN = firstCardNum);
  } else if (
    firstCardNum === "J" ||
    firstCardNum === "K" ||
    firstCardNum === "Q" ||
    firstCardNum === "1"
  ) {
    return (firstCardN = "10");
  } else if (firstCardNum === "A") {
    return (firstCardN = "1");
  }
}
firstCardNumFunc();
console.log(firstCardN);

//save player second card value
function secondCardNumFunc() {
  let secondCardNum = secondCardN.charAt(0);
  if (
    secondCardNum === "2" ||
    secondCardNum === "3" ||
    secondCardNum === "4" ||
    secondCardNum === "5" ||
    secondCardNum === "6" ||
    secondCardNum === "7" ||
    secondCardNum === "8" ||
    secondCardNum === "9"
  ) {
    return (secondCardN = secondCardNum);
  } else if (
    secondCardNum === "J" ||
    secondCardNum === "K" ||
    secondCardNum === "Q" ||
    secondCardNum === "1"
  ) {
    return (secondCardN = "10");
  } else if (secondCardNum === "A") {
    return (secondCardN = "1");
  }
}
secondCardNumFunc();
console.log(secondCardN);

let playerTotalNum = parseInt(firstCardN) + parseInt(secondCardN);
total.innerText = `Total: ${playerTotalNum}`;

//hit btn clicked
hit.addEventListener("click", function () {
  let randomCardHit = Math.floor(Math.random() * allCard.length);
  let dealerImgHit = document.createElement("img");
  let playerImgHit = document.createElement("img");
  let hitCardN = allCard[randomCardHit];

  playerImgHit.src = `cards/${allCard[randomCardHit]}`;
  playerCards.appendChild(playerImgHit);
  function hitCardNumFunc() {
    let hitCardNum = hitCardN.charAt(0);
    if (
      hitCardNum === "2" ||
      hitCardNum === "3" ||
      hitCardNum === "4" ||
      hitCardNum === "5" ||
      hitCardNum === "6" ||
      hitCardNum === "7" ||
      hitCardNum === "8" ||
      hitCardNum === "9"
    ) {
      return (hitCardN = hitCardNum);
    } else if (
      hitCardNum === "J" ||
      hitCardNum === "K" ||
      hitCardNum === "Q" ||
      hitCardNum === "1"
    ) {
      return (hitCardN = "10");
    } else if (hitCardNum === "A") {
      return (hitCardN = "1");
    }
  }
  hitCardNumFunc();
  console.log(hitCardN);
  playerTotalNum = playerTotalNum + parseInt(hitCardN);
  if (playerTotalNum > 21) {
    total.innerText = `Total: ${playerTotalNum}`;
    alert(`Your total is ${playerTotalNum}, over 21 you lose`);
    location.reload();
  } else if (playerTotalNum === 21) {
    total.innerText = `Total: ${playerTotalNum}`;
    alert(`Your total is ${playerTotalNum}, You Win`);
    location.reload();
  }
  total.innerText = `Total: ${playerTotalNum}`;
});

//Stand btn clicked && dealer's turn
stand.addEventListener("click", function () {
  total.innerText = `Your total is ${playerTotalNum}, Dealer's turn.`;

  let dealerHiddenRandomCard = Math.floor(Math.random() * allCard.length);
  backCard.src = `cards/${allCard[dealerHiddenRandomCard]}`;

  let dealerHiddenCardN = allCard[dealerHiddenRandomCard];
  let dealerHiddenCardNum = dealerHiddenCardN.charAt(0);

  if (
    dealerHiddenCardNum + dealerCardNum === "1A" ||
    dealerHiddenCardNum + dealerCardNum === "JA" ||
    dealerHiddenCardNum + dealerCardNum === "QA" ||
    dealerHiddenCardNum + dealerCardNum === "KA"
  ) {
    alert("Dealer BlackJack You Lost");
    location.reload();
  } else if (
    dealerHiddenCardNum + dealerCardNum === "A1" ||
    dealerHiddenCardNum + dealerCardNum === "AJ" ||
    dealerHiddenCardNum + dealerCardNum === "AQ" ||
    dealerHiddenCardNum + dealerCardNum === "AQ"
  ) {
    alert("Dealer BlackJack You Lost");
    location.reload();
  }

  //hidden card value
  function dealerHiddenCardNumFunc() {
    let dealerHiddenCardNum = dealerHiddenCardN.charAt(0);
    if (
      dealerHiddenCardNum === "2" ||
      dealerHiddenCardNum === "3" ||
      dealerHiddenCardNum === "4" ||
      dealerHiddenCardNum === "5" ||
      dealerHiddenCardNum === "6" ||
      dealerHiddenCardNum === "7" ||
      dealerHiddenCardNum === "8" ||
      dealerHiddenCardNum === "9"
    ) {
      return (dealerHiddenCardN = dealerHiddenCardNum);
    } else if (
      dealerHiddenCardNum === "J" ||
      dealerHiddenCardNum === "K" ||
      dealerHiddenCardNum === "Q" ||
      dealerHiddenCardNum === "1"
    ) {
      return (dealerHiddenCardN = "10");
    } else if (dealerHiddenCardNum === "A") {
      return (dealerHiddenCardN = "1");
    }
  }
  dealerHiddenCardNumFunc();
  console.log(dealerHiddenCardN);

  //shown card value
  function dealerShownCardNumFunc() {
    let dealerCardNum = dealerCardN.charAt(0);
    if (
      dealerCardNum === "2" ||
      dealerCardNum === "3" ||
      dealerCardNum === "4" ||
      dealerCardNum === "5" ||
      dealerCardNum === "6" ||
      dealerCardNum === "7" ||
      dealerCardNum === "8" ||
      dealerCardNum === "9"
    ) {
      return (dealerCardN = dealerCardNum);
    } else if (
      dealerCardNum === "J" ||
      dealerCardNum === "K" ||
      dealerCardNum === "Q" ||
      dealerCardNum === "1"
    ) {
      return (dealerCardN = "10");
    } else if (dealerCardNum === "A") {
      return (dealerCardN = "1");
    }
  }
  dealerShownCardNumFunc();
  console.log(dealerCardN);

  let dealerTotalNum = parseInt(dealerHiddenCardN) + parseInt(dealerCardN);
  dealerTotal.innerText = `Total: ${dealerTotalNum}`;

  while (dealerTotalNum < 17) {
    let dealerNew = document.createElement("img");
    let dealerNewCard = Math.floor(Math.random() * allCard.length) + 1;
    dealerNew.src = `cards/${allCard[dealerNewCard]}`;
    dealerCards.appendChild(dealerNew);
    let dealerNewCardN = allCard[dealerNewCard];
    let dealerNewCardNum = dealerNewCardN.charAt(0);

    function dealerNewCardNumFunc() {
      let dealerNewCardNum = dealerNewCardN.charAt(0);
      if (
        dealerNewCardNum === "2" ||
        dealerNewCardNum === "3" ||
        dealerNewCardNum === "4" ||
        dealerNewCardNum === "5" ||
        dealerNewCardNum === "6" ||
        dealerNewCardNum === "7" ||
        dealerNewCardNum === "8" ||
        dealerNewCardNum === "9"
      ) {
        return (dealerNewCardN = dealerNewCardNum);
      } else if (
        dealerNewCardNum === "J" ||
        dealerNewCardNum === "K" ||
        dealerNewCardNum === "Q" ||
        dealerNewCardNum === "1"
      ) {
        return (dealerNewCardN = "10");
      } else if (dealerNewCardNum === "A") {
        return (dealerNewCardN = "1");
      }
    }
    dealerNewCardNumFunc();
    console.log(dealerNewCardN);
    let int = parseInt(dealerNewCardN);

    dealerTotalNum = dealerTotalNum + int;
    dealerTotal.innerText = `Total: ${dealerTotalNum}`;
  }
  if (dealerTotalNum > 21) {
    alert(
      `Dealer Total: ${dealerTotalNum}. Your Total: ${playerTotalNum} You Win`
    );
  } else if (dealerTotalNum === 21) {
    alert(
      `Dealer Total: ${dealerTotalNum}. Your Total: ${playerTotalNum} You Lost`
    );
  } else if (dealerTotalNum > playerTotalNum) {
    alert(
      `Dealer Total: ${dealerTotalNum}. Your Total: ${playerTotalNum} You Lost`
    );
  } else if (dealerTotalNum < playerTotalNum) {
    alert(
      `Dealer Total: ${dealerTotalNum}. Your Total: ${playerTotalNum} You Win`
    );
  } else if (dealerTotalNum === playerTotalNum) {
    alert(`Dealer Total: ${dealerTotalNum}. Your Total: ${playerTotalNum} Tie`);
  }
});

startGame();
let flippedCards = [];
let isChecking = false;

function startGame() {
    // let cardTypeCount = 8;//二乗
    let rows = 5; //縦
    let cols = 6; //横
    let cardTypeCount = rows * cols / 2;



    const numbers = createNumbers(cardTypeCount);
    const shufflednumbers = shuffle(numbers);
    const cards = makeCards(rows, cols, shufflednumbers);
    drawCards(rows, cols, cards);
    
}

function createNumbers(_cardTypeCount){
    let tmp = [];
    for(let i = 1; i <= _cardTypeCount; i++) {
        for(let j = 0; j < 2; j++) {
            tmp.push(i);
        }
    }
    return tmp;
}

function shuffle(_numbers){
    for(let i = _numbers.length - 1; i > 0;i--) {
        let randomPos = Math.floor(Math.random() * (i + 1));
        let tmp = _numbers[i];
        _numbers[i] = _numbers[randomPos];
        _numbers[randomPos] = tmp;
    }
    return _numbers;
}

function makeCards(x, y, z) {// x 縦, y 横,z 初期値
    let tmp = [];
    for(let i = 0; i < x; i++) {
        tmp[i] = [];
        for(let j = 0; j < y; j++) {
            tmp[i][j] = z[j + i * y];
        }
    }
    return tmp;
}

function drawCards(_rows,_cols,_cards){
    const cardArea = document.getElementById("cardArea");
    cardArea.style.display = "grid";
    cardArea.style.gridTemplateColumns = `repeat(${_cols}, 100px)`;
    for(let i = 0;i<_rows;i++) {
        for(let j = 0;j<_cols;j++) {
            let card = document.createElement("button")
            card.dataset.state = "closed";
            card.textContent = "?";
            card.addEventListener("click", () => {
                flipCard(card,_cards[i][j]);
            });
            cardArea.appendChild(card);
        }
    }
}

function flipCard(_card, value) {
    if(isChecking) return; //カードを元に戻すまで
    if(_card.textContent != "?") return; //すでに表のカードをクリックしたとき
    _card.dataset.state = "open";
    _card.textContent = value;
    flippedCards.push(_card);
    if(flippedCards.length == 2) {
        isChecking = true;
        if(isMatched(flippedCards)) {
            flippedCards = [];
            isChecking = false;
            return;
        }
    
        setTimeout(() => {
            isChecking = false;
            flipCardsBack();
            flippedCards = [];
        }, 500);
    }

}

function flipCardsBack() {
    flippedCards.forEach((card) => {
        card.dataset.state = "closed";
        card.textContent = "?";
    });
}   

function isMatched(_flippedCards) {
    anser = false;
    firstCardNum = _flippedCards[0].textContent;
    SecondCardNum = _flippedCards[1].textContent;
    if(firstCardNum === SecondCardNum) {
        anser = true;
        console.log("seikai")
    }


    return anser;
}

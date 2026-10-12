startGame();
let flippedCards = [];

function startGame() {
    // let cardTypeCount = 8;//二乗
    let rows = 3; //縦
    let cols = 4; //横
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
    if(_card.textContent != "?") return;
    if(flippedCards.length == 2){
        flippedCards = [];
        flipCardsBack(_card)
        return;
    } 
    _card.dataset.state = "open";
    _card.textContent = value;

    flippedCards = value;
}

function flipCardsBack(_card) {

}
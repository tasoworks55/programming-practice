const button1 = document.getElementById("helloButton");
let answer = Math.floor(Math.random() * 100) + 1;
let hint = document.getElementById("hint");
let tryCount = document.getElementById("tryCount");

console.log(answer);


const difficultyButton = document.querySelectorAll(".difficultyButton");
let difficultyLevel = document.getElementById("difficultyLevel");

button1.addEventListener("click", function() {
    
    let guessNum = document.getElementById('guess');

    tryCount.textContent = Number(tryCount.textContent) + 1; //試行回数

    console.log(Number(tryCount.textContent));

    if(answer > Number(guessNum.value)) {
        hint.textContent = ("もっと大きい！")
    }else if(answer < Number(guessNum.value)) {
        hint.textContent = ("もっと小さい！")
    }else {
        hint.textContent = ("正解！")
    }
});


difficultyButton.forEach((button) => {
    button.addEventListener("click", () => {
        difficultyLevel.textContent = (button.textContent)
        if(button.textContent == ("Easy")) {
            answer = Math.floor(Math.random() * 100) + 1;
        }else if(button.textContent == ("Medium")) {
            answer = Math.floor(Math.random() * 1000) + 1;
        }else {
            answer = Math.floor(Math.random() * 10000) + 1;
        }
        tryCount.textContent = 0;
        console.log(answer);
    });
});

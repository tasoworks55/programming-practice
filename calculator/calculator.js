const formula = document.getElementById("formula");
const result = document.getElementById("result");


const numButtons = document.querySelectorAll(".num");
const arithmetic = document.querySelectorAll(".arithmetic");

let currentInput = "";   // 今入力中の数(文字列)
let firstNumber = null;  // 1つ目の数
let operator = null;     // 選ばれた演算子
let justCalculated = false;

document.getElementById("clear").addEventListener("click", () => {
    currentInput = "";
    firstNumber = null;
    operator = null;
    formula.textContent = "";
    result.textContent = "";
    justCalculated = true;
});

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (justCalculated) {
            currentInput = "";
            formula.textContent = "";
            justCalculated = false;
        }   
        currentInput += button.textContent;   
        formula.textContent += button.textContent;
            
    });
});


arithmetic.forEach((button) => {
    button.addEventListener("click", () => {
        const type = button.dataset.type;


        if(type === "equals") {
            if(operator !== null && firstNumber !== null && currentInput !=="") {
                if (operator === "divide" && Number(currentInput) === 0) {
                    result.textContent = "エラー";
                    return;
                }
                const answer = compute(firstNumber, Number(currentInput), operator);
                if (answer === null) {
                    result.textContent = "エラー";
                    return;
                }
                result.textContent = answer;
                formula.textContent = String(answer);
                currentInput = String(answer);
                firstNumber = null;
                operator = null;
            }
            
            return;
        }
        
        
        if(currentInput === "") return;
        justCalculated = false; 
    
        
        if (operator === null) {
            // 1つ目の演算子: 今の入力を保存するだけ
            firstNumber = Number(currentInput);
        }else {
            // 2つ目以降: 先に前の計算を実行して、結果を firstNumber にする
            firstNumber = compute(firstNumber, Number(currentInput), operator);
            result.textContent = firstNumber;
        }

        operator = type;
        currentInput = "";
        formula.textContent += button.textContent;
    });
});


function compute(a, b, op) {
    if (op === "add") return a + b;
    if (op === "subtract") return a - b;
    if (op === "multiply") return a * b;
    if (op === "divide") {
        if (b === 0) return null;   // 0割りは null を返す
        return a / b;
    }

}
const button = document.getElementById("calculator");
const message = document.getElementById("result");
let ary = [];

const numButtons = document.querySelectorAll(".num");

button.addEventListener("click", function() {

    const result = add(Number(message.textContent))
    message.textContent = result;
    // console.log(Number(message.textContent))
});

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        message.textContent += button.textContent;
    });
});


function add(a) {
    let sum = 0;
    ary.push(a);
    if(ary.length == 1) {

    }
    if(ary.length >= 2) {
        ary.forEach(i => sum += i);
        return sum;
    }
    
}
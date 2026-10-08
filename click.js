// alert("JavaScriptが動きました！");
const button1 = document.getElementById("helloButton");
const button2 = document.getElementById("reset");
const message1 = document.getElementById("message");
const message2 = document.getElementById("clickcounter");
let messageIndex = 0;
let clickCount = 0;


button1.addEventListener("click", function() {
    const result = sayHello("そうし");
    console.log(result);


    clickCount++;
    message2.textContent = clickCount;
    if(messageIndex === 0) {
        message1.textContent = "こんにちは！そうしです！";
        messageIndex++;
    }else if(messageIndex === 1) {
        message1.textContent = "プログラミングを勉強中です！";
        messageIndex++;
    }else if(messageIndex === 2) {
        message1.textContent = "Webアプリを作れるようになりたい！";
        messageIndex = 0;
    }

});

button2.addEventListener("click", function() {
    clickCount = 0;
    messageIndex = 0;
    message1.textContent = "クリックしてみて！";
    message2.textContent = clickCount;
});

function sayHello(name) {

    return "Hello!" + name

}


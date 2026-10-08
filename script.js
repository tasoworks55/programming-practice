// alert("JavaScriptが動きました！");
const button = document.getElementById("helloButton");
const message = document.getElementById("message");
let count = 0;


button.addEventListener("click", function() {
    if(count == 0) {
        message.textContent = "こんにちは！そうしです！";
        count++;
    }else if(count == 1) {
        message.textContent = "プログラミングを勉強中です！";
        count++;
    }else if(count == 2) {
        message.textContent = "Webアプリを作れるようになりたい！";
    }

});
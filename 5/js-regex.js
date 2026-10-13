let winMsg = null;

function loadjs() {
    let jsMsg = document.getElementById("js-msg");
    jsMsg.insertAdjacentHTML("afterend",
    `<h5><u>Javascript input box</u></h5>
    <input type="text" id="js-regex" title="Five letters then 3 numbers. Ex: hello123"><br>
    <button id="js-button" onclick=checkRegex()>Submit</button>`
    );
    jsMsg.remove();
}

function checkRegex() {
    const jsRegex = document.getElementById("js-regex");
    const jsButton = document.getElementById("js-button"); 
    if (!winMsg) {
        winMsg = document.createElement("p");
        jsButton.after(winMsg);
    } 
    if (jsRegex.value.match("[A-Za-z]{5,5}[0-9]{3,3}")) {
        winMsg.textContent = `Congrats, you got it right! Your input was ${jsRegex.value}`;
    } else {
        winMsg.textContent = `Oops, try again. Five letters then 3 numbers`;
    }
}

loadjs();

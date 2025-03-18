let numButtonClicks = 0;
function buttonClicked1() {
    numButtonClicks = Math.floor(Math.random() * 4)+ 1;
    document.getElementById("d4").textContent =
        "d4:    " + numButtonClicks;
}

function buttonClicked2() {
    numButtonClicks = Math.floor(Math.random() * 6)+ 1;
    document.getElementById("d6").textContent =
        "d6:    " + numButtonClicks;
}

function buttonClicked3() {
    numButtonClicks = Math.floor(Math.random() * 8)+ 1;
    document.getElementById("d8").textContent =
        "d8:    " + numButtonClicks;
}

function buttonClicked4() {
    numButtonClicks = Math.floor(Math.random() * 10)+ 1;
    document.getElementById("d10").textContent =
        "d10:    " + numButtonClicks;
}

function buttonClicked5() {
    numButtonClicks = Math.floor(Math.random() * 12)+ 1;
    document.getElementById("d12").textContent =
        "d12:    " + numButtonClicks;
}

function buttonClicked6() {
    numButtonClicks = Math.floor(Math.random() * 20)+ 1;
    document.getElementById("d20").textContent =
        "d20:    " + numButtonClicks;
}

function buttonClicked7() {
    numButtonClicks = Math.floor(Math.random() * 100)+ 1;
    document.getElementById("d100").textContent =
        "d100:    " + numButtonClicks;
}








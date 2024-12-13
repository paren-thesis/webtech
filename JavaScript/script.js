
function showHead() {
    document.getElementById("title").textContent = "Hello, Programmer";
}

function hideHead() {
    document.getElementById("title").textContent = "";
}

function changeStyle() {
    document.getElementById('title').style = "color: blue";
}

function changeFontSize() {
    document.getElementById('title').style.fontSize = "20px";
}

function printPage() {
    window.print();
}
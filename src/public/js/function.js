function PopUpOpen(obj) {
    document.getElementById(obj).style.display = "block";
    document.getElementById(obj).style.height = "200px";
}

function PopUpClose(obj) {
    document.getElementById(obj).style.height = "0px";
    document.getElementById(obj).style.display = "none";
}
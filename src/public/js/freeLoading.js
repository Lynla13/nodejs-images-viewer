//An thanh phan trang
function freeLoad(url, hide, show) {
    history.pushState({}, "", url);
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
}

//Tao ham bat duong dan
function catchUrl(find, hide, show) {
    if (findWorld(window.location.href, find)) {
        document.getElementById(hide).style.display = "none";
        document.getElementById(show).style.display = "block";
    }
}
function findWorld(str, find) {
    return str.includes(find, 0);
}
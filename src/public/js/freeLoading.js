//An thanh phan trang
function freeLoad(url) {
    history.pushState({}, "", url);
    window.history.replaceState({}, "", url);
}

function freeLoad(url, hide, show) {
    history.pushState({}, "", url);
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
}
function processAjaxData(response, urlPath) {
    document.getElementById("content").innerHTML = response.ejs;
    document.title = response.pageTitle;
    window.history.pushState({ "html": login.ejs, "pageTitle": response.pageTitle }, "", urlPath);
}
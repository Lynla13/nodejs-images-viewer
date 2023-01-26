
//Menu thay đổi để load tag
  function picFramelShow () {
    document.getElementById("picture-frame").style.display = "block";
  }
  function picFrameHide () {
    document.getElementById("picture-frame").style.display = "none";
  }
  function cancelPost() {
    window.location.href = '/' 
    const element = document.getElementById("post-landing");
    element.remove();
  }
  
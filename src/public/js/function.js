
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
  
  function showLoadingIcon() {
    document.getElementById("loading-img").style.display ="block";
   }

   function displayNone(id,closest) {
    const element = document.getElementById(id);
    const closest = element.closest(closest);
   }
  
function scollOnTop () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function reLoad () {
  location.reload();
}

function DoSubmit(sel)
{
     if(sel.val()!='select') this.form.submit();
}
 


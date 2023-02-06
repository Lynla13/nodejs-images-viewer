
// ajax post IMage
$(document).ready(function(){
  var fileData;
  var myFile;
  $('#file').change(function(){
      var filereader = new FileReader();
      filereader.onload = function(event){
      fileData  = event.target.result;
      document.getElementById("update-image").click();
      };
      myFile = $('#file').prop('files')[0];  
      console.log('myfile',myFile)
     filereader.readAsDataURL(myFile)
     
     
  });
  $('#update-image').click(function(){
      $.ajax({
          method:"post",
          url:"/post",
          dataType:"JSON",
          data:{'filename':myFile.name,'file':fileData},
          success:function(response){
              if(response.msg=="success"){
                 $('#file').val('');
                 $('.add-imgs-show').append(`<div id="picture-frame"><img src="../files/imgs/`+response.imageName+`" class ="imgs-post" style ="float: left">
                  <input type="hidden" id ="image-name" value ="`+response.imageName+`">
                   </div>
                   <script> const element = document.getElementById("file");
                   element.style.display ="none"
                   const element1 = document.getElementById("post-pics");
                   element1.style.display ="block"</script>
                  <br> `)
                  //deletePics
                  $(document).on('click','#cancel-post',function(e){
                    $.ajax({    
                      type: "DELETE",
                      url: "/post",             
                      dataType: "text", 
                      data: {
                        imageName:response.imageName,
                      } ,  
                      success: function(data){     
                        $("#landing-page-content").html(data);        
                      }
                  });
                  });

                 
              }
               
          },
          
      });
  });
});

//Post-add
$(document).on('click','#post-pics',function(e){
  e.preventDefault();
  if ( $(this).data('requestRunning') ) {
      return;
  }
  $(this).data('requestRunning', true);
  $.ajax({    
    type: "POST",
    url: "/post-add",             
    dataType: "text", 
    data: {
      imageName:$("#image-name").val(),
      postTag: $("#post-tag").val(),
      postContent: $("#post-content").val(),
    } ,  
    success: function(data){     
      $("#landing-page-content").html(data);        
    },
    complete: function() {
      $(this).data('requestRunning', false);
  }
});
});

// Load api pic to database;
$(document).on('click','#postapi-add',function(e){
  $('#postShow').append(`<style>  #loading-img { display:block }   #image-show-out-div { display:none; }  </style>`)
  $.ajax({    
    type: "GET",
    url: "/postapi",             
    dataType: "text", 
     success: function(data){     
      $("#postShow").html(data);         
    }
});
});



//ONLoad Event
$(document).ready(function(){
    currentPage =1;
  loadTags()
  loadMore(currentPage);
  $(window).scroll(function () {
    // End of the document reached?
    if ($(window).scrollTop() >= $(document).height()- $(window).height()&& currentPage <= $('#max-page').val()&&$('#is-tag-click').val()=="false") {
        currentPage++
        $('#postShow').append(`<style> #loading-img { display:block } </style>`)
        loadMore(currentPage);
    }
  }); 
});

function loadMore(currentPage){
  $.ajax({    
    type: "GET",
    url: "/postshow/page="+currentPage,             
    dataType: "text", 
    success: function(data){    
        $("#postShow").html(data); 
    }
});
}

function loadTags(){
  $.ajax({    
    type: "GET",
    url: "/postshow/tags",             
    dataType: "text", 
    success: function(data){    
        $(".app-follow-show").html(data); 
    }
});
}



//load by tags
function submitTag (tag) {
  currentPageTags =1;
  // $('#postShow').load(location.href + "#postShow");
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  loadMoreByTags(currentPageTags,tag);
} 

//load page
function submitPage(currentPageTags) {
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  loadMoreByTags(currentPageTags,$('#post-tags').val())
}



function loadMoreByTags(currentPageTags,tags){
    $.ajax({    
      type: "GET",
      url: "/postshow/page="+currentPageTags+"/tags="+tags,           
      dataType: "text", 
      success: function(data){    
          $("#postShow").html(data);
      } 
  });       
  }


///Load Api On load 

function loadAPi() {
  $('#postShow').append(`<style> #loading-img { display:block } </style>`)
    if ( $(this).data('requestRunning') ) {
        return;
    }
    $(this).data('requestRunning', true);
  $.ajax({    
    type: "POST",
    url: "/post/loadApi",           
    dataType: "text", 
    complete: function() {
      $(this).data('requestRunning', false);
  }
});       
}

//Delete die image 
// function deletePost (imgName) {
//   e.preventDefault();
//     if ( $(this).data('requestRunning') ) {
//         return;
//     }
//     $(this).data('requestRunning', true);
//   setTimeout (deletePostPerTime,5000,imgName)
// }
// function deletePostPerTime(imgName){
//   setTimeout(() => {  
//     alert(imgName)
//   $.ajax({    
//     type: "POST",
//     url: "/postshow/image",           
//     dataType: "html", 
//       data:{
//       imgName: imgName,
//     },
//     success: function(data){    
//     },complete: function() {
//       $(this).data('requestRunning', false);
//   }
// });   ; }, 5000);
      
// }




//imag Detail function
function imgDetail(id) {
  window.location.href = '/post/'+id
}
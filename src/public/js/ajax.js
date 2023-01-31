//Ajax load page on click

$(document).on('click','#login-show',function(e){
  e.preventDefault();

  if ( $(this).data('requestRunning') ) {
      return;
  }

  $(this).data('requestRunning', true);
  $.ajax({    
    type: "GET",
    url: "/l",             
    dataType: "html",                  
    success: function(data){                    
        $("#page-body").html(data); 
        $('#landing-page-content').append(`
        <style> 
        #postShow {
          display:none
        }
        </style>
        `)
    },complete: function() {
      $(this).data('requestRunning', false);
  }
});
});



$(document).on('click','#home-show',function(e){
  e.preventDefault();

  if ( $(this).data('requestRunning') ) {
      return;
  }

  $(this).data('requestRunning', true);
  $.ajax({    
    type: "GET",
    url: "/",             
    dataType: "html",                  
    success: function(data){                    
        $("#page-body").html(data); 
       
    },complete: function() {
      $(this).data('requestRunning', false);
  }
});
});

$(document).on('click','#signin-show',function(e){
  e.preventDefault();
  if ( $(this).data('requestRunning') ) {
      return;
  }
  $(this).data('requestRunning', true);
  $.ajax({    
    type: "GET",
    url: "/s",             
    dataType: "html",                  
    success: function(data){                    
        $("#page-body").html(data); 
        $('#landing-page-content').append(`
        <style> 
        #postShow {
          display:none
        }
        </style>
        `)
       
    }
});
});










//Ajax load login function

$(document).on('click','#login-submit',function(e){
  $.ajax({    
    type: "POST",
    url: "/login",             
    dataType: "html", 
    data: {
      username: $("#username").val(),
      password: $("#pass").val()
    } ,    
    //Print Login Authentication result in HTML <p>          
    success: function(data){                    
        $("#login-auth").html(data); 
    }
});
});
//Ajax load signin fuction 
$(document).on('click','#signin-submit',function(e){
  e.preventDefault();
  if ( $(this).data('requestRunning') ) {
      return;
  }
  $(this).data('requestRunning', true);
  $.ajax({    
    type: "POST",
    url: "/signin",             
    dataType: "html", 
    data: {
      username: $("#username").val(),
      password: $("#pass").val(),
      email: $("#email").val()
    } ,    
    //Print SignIn Authentication result in HTML <p>          
    success: function(data){                    
        $("#signin-auth").html(data); 
    }
});
});




//Ajax load profile fuction 

//Ajax load profile fuction 
$(document).on('click','#profile-show',function(e){
  $.ajax({    
    type: "GET",
    url: $("#profile-path").val(),             
    dataType: "text", 
    success: function(data){    
        $("#page-body").html(data); 
        $('#landing-page-content').append(`
        <style> 
        #postShow {
          display:none
        }
        </style>
        `)
    }
});
});


//post-add-show
$(document).on('click','#post-add-show',function(e){
  $.ajax({    
    type: "GET",
    url: "/post",             
    dataType: "text", 
    success: function(data){    
        $("#landing-page-content").html(data); 
        //Hide post show due it is in onload call
        $('#landing-page-content').append(`
        <style> 
        #postShow {
          display:none
        }
        </style>
        `)
    }
});
});
//Ajax log out function
$(document).on('click','#logout',function(e){
  $.ajax({    
    type: "GET",
    url: "/logout",             
    dataType: "html", 
    success: function(data){                    
        $("#logout").html(data); 
       
    }
});
});

//
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





//load post
$(document).ready(function(){
  $.ajax({    
    type: "GET",
    url: "/postshow",             
    dataType: "text", 
    success: function(data){    
        $("#postShow").html(data); 
       
    }
});
});
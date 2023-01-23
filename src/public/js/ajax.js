//Ajax load page on click
$(document).on('click','#login-show',function(e){
    $.ajax({    
      type: "GET",
      url: "/l",             
      dataType: "html",                  
      success: function(data){                    
          $("#page-body").html(data); 
         
      }
  });
});

$(document).on('click','#home-show',function(e){
    $.ajax({    
      type: "GET",
      url: "/",             
      dataType: "html",                  
      success: function(data){                    
          $("#page-body").html(data); 
         
      }
  });
});

$(document).on('click','#signin-show',function(e){
  $.ajax({    
    type: "GET",
    url: "/s",             
    dataType: "html",                  
    success: function(data){                    
        $("#page-body").html(data); 
       
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
$(document).on('click','#add-imgs',function(e){
  $.ajax({    
    type: "POST",
    url: "/post",             
    dataType: "html", 
    data: {
      postContent: $("#post-content").val(),
      username: $("#username").val(),
      mypic: $("#add-imgs").val()
    } ,    
    //Print SignIn Authentication result in HTML <p>          
    success: function(data){                    
        $("#add-imgs-show").html(data); 
       
    }
});
});




// ajax post IMage
$(document).ready(function(){
  var fileData;
  var myFile;
  $('#file').change(function(){
      var filereader = new FileReader();
      filereader.onload = function(event){
         fileData  = event.target.result;
      };
      myFile = $('#file').prop('files')[0];  
      console.log('myfile',myFile)
     filereader.readAsDataURL(myFile)
  });
  $('#upload').click(function(){
      $.ajax({
          method:"post",
          url:"/post",
          dataType:"JSON",
          data:{'filename':myFile.name,'file':fileData},
          success:function(response){
              if(response.msg=="success"){
                 $('#file').val('');
                 $('.img').append('<img src="../files/imgs/'+response.imageName+'" style="max-width:300px;height:300px;margin:10px 10px 10px 10px;">')
              }
          },
          error:function(){
              alert('server error');
          }
      });
  });
});
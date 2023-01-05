//Ajax load page on click
$(document).on('click','#login-show',function(e){
    $.ajax({    
      type: "GET",
      url: "/login",             
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
    url: "/signin",             
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


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
    loadAPi()
    e.preventDefault();
    if ( $(this).data('requestRunning') ) {
        return;
    }
    freeLoad ('/')
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
         
      },complete: function() {
        $(this).data('requestRunning', false);
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
          #loading-img { display:none }
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

  
  
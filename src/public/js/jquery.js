//Ajax load page on click

  $(document).on('click','#home-show',function(e){
    loadAPi();
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
  $(document).on('click','#signin-submit',function(){
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
        //Nếu đăng kí thành công sẽ chạy chức năng load trang chọn tag và followings    
        if (data == 'success') {
          $('#refresh-section').load(location.href + " #refresh-section");
        }   else {
          $("#signin-auth").html(data); 
        }
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

  
  
//Ajax load page on click

$(document).on('click', '#home-show', function (e) {
  loadAPi();
  e.preventDefault();
  if ($(this).data('requestRunning')) {
    return;
  }
  freeLoad('/')
  $(this).data('requestRunning', true);
  $.ajax({
    type: "GET",
    url: "/",
    dataType: "html",
    success: function (data) {
      $("#page-body").html(data);

    }, complete: function () {
      $(this).data('requestRunning', false);
    }
  });
});

//Ajax load login function

$(document).on('click', '#login-submit', function (e) {
  $.ajax({
    type: "POST",
    url: "/login",
    dataType: "html",
    data: {
      username: $("#username").val(),
      password: $("#pass").val()
    },
    //Print Login Authentication result in HTML <p>          
    success: function (data) {
      $("#login-auth").html(data);
    }
  });
});
//Ajax load signin fuction 
$(document).on('click', '#signin-submit', function () {
      $.ajax({
        type: "POST",
        url: "/signin",
        dataType: "html",
        data: {
          username: $("#username").val(),
          password: $("#pass").val(),
          email: $("#email").val()
        },
        //Print SignIn Authentication result in HTML <p>          
        success: function (data) {
          if (data=='Invalid email address or an account already exists!' || data =='Please enter all information!') {
            $("#signin-auth").html(data);
          }else {
            $(".app-follow-show").html(data);
          }
        }
      });
});


//Chọn hướng đi cho người dùng
//Chọn thiên thần
function choiceAngel () {
  $.ajax({
    type: "POST",
    url: '/choiceAngel',
    dataType: "text",
    success: function (data) {
      $('#refresh-section').load(location.href + " #refresh-section");
    }
  });
} 


//Chọn ác quỉ
function choiceDevil () {
  $.ajax({
    type: "POST",
    url: '/choiceDevil',
    dataType: "text",
    success: function (data) {
      $('#refresh-section').load(location.href + " #refresh-section");
    }
  });
} 

//Ajax load profile fuction 
$(document).on('click', '#profile-show', function (e) {
  $.ajax({
    type: "GET",
    url: $("#profile-path").val(),
    dataType: "text",
    success: function (data) {
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
$(document).on('click', '#logout', function (e) {
  $.ajax({
    type: "GET",
    url: "/logout",
    dataType: "html",
    success: function (data) {
      $("#logout").html(data);

    }
  });
});

  //
  $(document).on('click','#signin-show',function(){
    $.ajax({    
      type: "POSt",
      url: "/s",             
      dataType: "html",                  
      success: function(data){                    
          $('.app-follow-show').html(data)
      }
  });
  });
  


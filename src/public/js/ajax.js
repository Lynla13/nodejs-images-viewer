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

$(document).on('click','#sigin-show',function(e){
  $.ajax({    
    type: "GET",
    url: "/sigin",             
    dataType: "html",                  
    success: function(data){                    
        $("#page-body").html(data); 
       
    }
});
});

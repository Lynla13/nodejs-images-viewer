$(document).ready(function(){
    currentPage =1;
    let currentPath = window.location.pathname;
    let post_id = currentPath.substring(6);
    loadDetail (post_id)
  setTimeout (loadMore,2000,currentPage)
  $(window).scroll(function () {
    // End of the document reached?
    if ($(window).scrollTop() >= $(document).height()- $(window).height()&& currentPage <= $('#max-page').val()&&$('#is-tag-click').val()=='false') {
        currentPage++
        setTimeout (loadMore,500,currentPage)
    }
    if ($(window).scrollTop() >= $(document).height()- $(window).height()&& currentPage <= $('#max-page').val()&&$('#is-tag-click').val()=='true') {
        currentPage++
        setTimeout (loadMoreByTag,500,$('#postTag').val(),currentPage)
    }
  }); 
});

function loadMore(currentPage){
    $.ajax({    
      type: "GET",
      url: "/page="+currentPage,             
      dataType: "text", 
      success: function(data){    
        $("#landing-page-content").html(data); 
    }
  });
  }

function loadTags(){
    $.ajax({    
      type: "GET",
      url: "/postshow/tags",             
      dataType: 'text', 
      success: function(data){    
          $(".app-follow-show").html(data); 
      }
  });
  }

function loadApi (){
    $.ajax({    
        type: "POST",
        url: "/post/loadApi",             
        dataType: 'text'
    });
}
function loadMoreByTag (tag,page=1) {
    $.ajax({    
        type: "GET",
        url: "/postshow/tags/"+tag+"/"+page,             
        dataType: 'text', 
        success: function(data){    
            $("#landing-page-content").html(data); 
        }
    });
}
  //imag Detail function
  function imgDetail(id) {
    window.location.href = '/post/'+id;
  }
  
//Load LoginPage
$(document).on('click','#login-show',function(){
  $.ajax({    
    type: "GET",
    url: "/l",             
    dataType: "html",                  
    success: function(data){                    
        $('.app-follow-show').html(data)
    }
});
});

$(document).on('click','#signin-show',function(){
  $.ajax({    
    type: "GET",
    url: "/home/s",             
    dataType: "html",                  
    success: function(data){                    
        $('.app-follow-show').html(data)
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
          $('.app-follow-show').html(data); 
      }
  });
  });


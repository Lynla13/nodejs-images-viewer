$(document).ready(function(){
    currentPage =1;
    let currentPath = window.location.pathname;
    if (currentPath.includes('post') >0) {
      let post_id = currentPath.substring(6);
      loadDetail (post_id);
    }else if (currentPath.includes('user') >0) {
      //LoadUserDetail here
      loadUserDetail ()
    }
    else {
      loadTags()
    }
    if (currentPath.includes('tags') >0) {
      setTimeout (loadMoreByTag,3000,currentPage)
    }else if (currentPath.includes('user') >0) {
      setTimeout (loadUser,3000,currentPage)
    }else {
      setTimeout (loadMore,3000,currentPage)
    }
  $(window).scroll(function () {
    // End of the document reached?
    if ($(window).scrollTop() >= $(document).height()- $(window).height()&& currentPage <= $('#max-page').val()&&$('#is-tag-click').val()=='false') {
        currentPage++
        setTimeout (loadMore,100,currentPage)
    }else if ($(window).scrollTop() >= $(document).height()- $(window).height()&& currentPage <= $('#max-page').val()&&$('#is-tag-click').val()=='true') {
        currentPage++
        setTimeout (loadMoreByTag,300,currentPage)
    }else if ($(window).scrollTop() >= $(document).height()- $(window).height()&& currentPage <= $('#max-page').val()&&$('#is-tag-click').val()=='profile'){
      currentPage++
      loadUser(currentPage)
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

  function loadPostBySimilar(tags='hentai',author='akaneko',page=1) {
    $.ajax({    
      type: "POST",
      url: "/post/similar"+page+"/"+tags,             
      dataType: 'text', 
      data :{
        author:author,
      },
      success: function(data){    
          $(".app-follow-show").html(data); 
          document.getElementById ('detail-show').style.display ='inline-block'
          document.getElementById ('similar-show').style.display ='none'
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
    url: "/s",             
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

  //Xóa ảnh lỗi 
   function deleteFailPics (image) {
    $.ajax({    
      type: "POST",
      url: "/deleteFailPics",             
      dataType: "text",
      data:{
        image:image
      }
    });
   }

   //Load tự động tạo tài khoản 
function autoCreateUser (author) {
    $.ajax({    
      type: "POST",
      url: "/autoCreateUser",             
      dataType: "text",
      data:{
        username:author
      }
    });
  }


  //tải nội dung cho user
function loadUser(currentPage=1){
  let path = window.location.pathname;
  let username = path.substring(6);
    $.ajax({    
      type: "POST",
      url: "/getUserPost",        
      dataType: 'text', 
      data:{
        page: currentPage,
        username:username
      },
      success: function(data){    
          $("#landing-page-content-for-user").html(data); 
      }
  });
  }

  //Tải nội dung cho Tags
  function loadMoreByTag(currentPage=1){
    let path = window.location.pathname;
    let tags = path.substring(6);
      $.ajax({    
        type: "POST",
        url: "/post/tags",        
        dataType: 'text', 
        data:{
          page: currentPage,
          tags:tags
        },
        success: function(data){    
            $("#landing-page-content").html(data); 
        }
    });
    }

    function loadMor (tag,page=1) {
      $.ajax({    
          type: "GET",
          url: "/postshow/tags/"+tag+"/"+page,             
          dataType: 'text', 
          success: function(data){    
              $("#landing-page-content").html(data); 
          }
      });
  }
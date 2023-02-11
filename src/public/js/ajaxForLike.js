  //Hiện số like
  function showLikeCount (sth) {
    let path = window.location.pathname;
    let post_id = path.substring(6);
    $.ajax({    
        type: "POST",
        url: "/showAllLike",             
        dataType: "text", 
        data : {
            post_id : post_id
        },
        success: function(data){     
            let fixedbase = data.replace('{"Like":', '')
            let fixed = fixedbase.replace('}', '');
            let toLikeNum = parseInt(fixed) 
            //Nếu vừa ấnlike thì +1 vào nếu ấn dislike thì -1 
            $("#showAllLike").html('Likes: '+(toLikeNum));    
        }
    });  
  }


  function showLikeOnload() {
    let path = window.location.pathname;
    let post_id = path.substring(6);
    $.ajax({    
        type: "POST",
        url: "/showLikeOnLoad",             
        dataType: "text", 
        data : {
            post_id : post_id
        },
        success: function(data){     
            $("#show-like").val(data);   
            if(data =='Liked') {
                document.getElementById ('like-insert').style.backgroundColor = '#6e6e6e';
                document.getElementById ('like-insert').style.color = 'white';
            }
        }
    });
  }

   function likeRemove() {
    let path = window.location.pathname;
    let post_id = path.substring(6);
    $.ajax({    
      type: "POST",
      url: "/removeLike",             
      dataType: "text", 
      data: {
        post_id: post_id,
      }
  });
  document.getElementById ('like-insert').style.display = 'inline';
  document.getElementById ('like-remove').style.display = 'none';
  }

  function likeInsert() {
    let path = window.location.pathname;
    let post_id = path.substring(6);
    $.ajax({    
      type: "POST",
      url: "/insertLike",             
      dataType: "text", 
      data: {
        post_id: post_id,
      },
      success: function(data){     
          $("#like-insert").val(data);   
          if(data =='like') {
              document.getElementById ('like-insert').style.backgroundColor = '#6e6e6e';
              showLikeCount (data)
          }else if(data =='nolike') {
            document.getElementById ('like-insert').style.backgroundColor = '#222222';
            showLikeCount (data)
          }
      }
  });
  }





//Dislike
function showDislikeCount () {
    let path = window.location.pathname;
    let post_id = path.substring(6);
    $.ajax({    
        type: "POST",
        url: "/showAllDislike",             
        dataType: "text", 
        data : {
            post_id : post_id
        },
        success: function(data){     
            let fixedbase = data.replace('{"Dislike":', '')
            let fixed = fixedbase.replace('}', '')
            $("#showAllDislike").html('Dislikes: '+fixed);    
        }
    });  
  }


function showDislikeOnload() {
    let path = window.location.pathname;
    let post_id = path.substring(6);
    $.ajax({    
        type: "POST",
        url: "/showDislikeOnLoad",             
        dataType: "text", 
        data : {
            post_id : post_id
        },
        success: function(data){     
            $("#show-dislike").val(data);   
            if(($('#show-dislike').val()) =='Disliked') {
                document.getElementById ('dislike-insert').style.display = 'none';
                document.getElementById ('dislike-remove').style.display = 'inline';
            }else {
                document.getElementById ('dislike-insert').style.display = 'inline';
                document.getElementById ('dislike-remove').style.display = 'none';
            }
        }
    });
    
  }


  function dislikeInsert(post_id) {
    $.ajax({    
      type: "POST",
      url: "/insertDislike",             
      dataType: "text", 
      data: {
        post_id: post_id,
      }
  });
  document.getElementById ('dislike-insert').style.display = 'none';
  document.getElementById ('dislike-remove').style.display = 'inline';
  }
  
  function dislikeRemove(post_id) {
    $.ajax({    
      type: "POST",
      url: "/removeDislike",             
      dataType: "text", 
      data: {
        post_id: post_id,
      }
  });
  document.getElementById ('dislike-insert').style.display = 'inline';
  document.getElementById ('dislike-remove').style.display = 'none';
  }
      
  


  
  //Post-add
  function showLikeCount () {
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
            let fixed = fixedbase.replace('}', '')
            $("#showAllLike").html('Likes: '+fixed);    
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
            if(($('#show-like').val()) =='Liked') {
                document.getElementById ('like-insert').style.display = 'none';
                document.getElementById ('like-remove').style.display = 'inline';
            }else {
                document.getElementById ('like-insert').style.display = 'inline';
                document.getElementById ('like-remove').style.display = 'none';
            }
        }
    });
    
  }



   function likeRemove(post_id) {
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

  function likeInsert(post_id) {
    $.ajax({    
      type: "POST",
      url: "/insertLike",             
      dataType: "text", 
      data: {
        post_id: post_id,
      }
  });
  document.getElementById ('like-insert').style.display = 'none';
  document.getElementById ('like-remove').style.display = 'inline';
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
      
  


  
  //Hiện số follow
  function showFollowCount () {
    $.ajax({    
        type: "POST",
        url: "/showAllFollow",             
        dataType: "text", 
        success: function(data){     
            $('.app-follow-show').html(data); 
        }
    });  
  }

  function showfollowOnload(follow) {
    $.ajax({    
        type: "POST",
        url: "/showfollowOnLoad",             
        dataType: "text", 
        data : {
            follow : follow
        },
        success: function(data){     
            $("#show-follow").val(data);   
            if(($('#show-follow').val()) =='follow') {
                document.getElementById ('follow-insert').style.display = 'none';
                document.getElementById ('follow-remove').style.display = 'inline';
            }else {
                document.getElementById ('follow-insert').style.display = 'inline';
                document.getElementById ('follow-remove').style.display = 'none';
            }
        }
    });
    
  }



   function followRemove(follow) {
    $.ajax({    
      type: "POST",
      url: "/removefollow",             
      dataType: "text", 
      data: {
        follow : follow
      }
  });
  document.getElementById ('follow-insert').style.display = 'inline';
  document.getElementById ('follow-remove').style.display = 'none';
  }

  function followInsert(follow) {
    $.ajax({    
      type: "POST",
      url: "/insertfollow",             
      dataType: "text", 
      data: {
        follow : follow
      }
  });
  document.getElementById ('follow-insert').style.display = 'none';
  document.getElementById ('follow-remove').style.display = 'inline';
  }


//Sử lý insert
// các trường hợp, like, bình luận và theo dõi và chia sẻ

function insertNofi (username, content) {
          $.ajax({    
            type: "POST",
            url: "/insertNofi",        
            dataType: 'text', 
            data:{
              content: content,
              username:username
            }
        });
 }

 //Sử lý showNofi
 function showNofi () {
    $.ajax({    
      type: "POST",
      url: "/showNofi",        
      dataType: 'text', 
      success: function(data){    
            $(".app-follow-show").html(data); 
        }
  });
}

//Sử lý updateNofi
function updateNofi () {
    $.ajax({    
      type: "POST",
      url: "/updateNofi",        
      dataType: 'text', 
      success: function(data){    
            $(".app-follow-show").html(data); 
        }
  });
}

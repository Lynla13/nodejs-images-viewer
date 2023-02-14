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
            detleteNofi ()
            document.getElementById('show-nofi').style.color = "#9d9d9d"
        }
  });
}

//Sử lý updateNofi
function detleteNofi () {
    $.ajax({    
      type: "POST",
      url: "/deleteNofi",        
      dataType: 'text', 
  });
}

function showNofiIcon () {
  $.ajax({    
    type: "POST",
    url: "/showNofiIcon",        
    dataType: 'text', 
    success: function(data){    
      if (data == 'unRead')
        document.getElementById('show-nofi').style.color = "red"
      }
});
}

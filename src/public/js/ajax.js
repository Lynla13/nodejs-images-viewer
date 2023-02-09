function loadDetail(post_id){
    if (post_id) {
        $.ajax({    
            type: "GET",
            url: "/postshow/detail/"+post_id,             
            dataType: 'text', 
            success: function(data){    
                $(".app-follow-show").html(data); 
            }
        });
    }else {
        loadTags()
    }
    
  }




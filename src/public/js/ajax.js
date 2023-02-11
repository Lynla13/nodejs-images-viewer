function loadDetail(post_id){
   
        $.ajax({    
            type: "GET",
            url: "/postshow/detail/"+post_id,             
            dataType: 'text', 
            success: function(data){    
                $(".app-follow-show").html(data); 
                document.getElementById ('detail-show').style.display ='none'
                document.getElementById ('similar-show').style.display ='inline-block'
            }
        });
    
  }

//Tạo chức năng gọi detail User và sử lý nếu user=== session hiện tại
function loadUserDetail (){
    let path = window.location.pathname;
    let username = path.substring(6);
    $.ajax({    
        type: "POST",
        url: "/showUserDetail",            
        dataType: 'text', 
        data:{
            username :username
        },
        success: function(data){    
            $(".app-follow-show").html(data); 
            document.getElementById ('detail-show').style.display ='none'
        }
    });

}




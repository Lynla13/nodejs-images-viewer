$(document).ready(function(){
    var fileData;
    var myFile;
    $(document).on('input','#file', function () {
        var filereader = new FileReader();
        filereader.onload = function(event){
        fileData  = event.target.result;
        document.getElementById("update-image").click();
        };
        myFile = $('#file').prop('files')[0];  
        console.log('myfile',myFile)
       filereader.readAsDataURL(myFile)
    });
$(document).on('click','#update-image', function () {
        $.ajax({
            type:"POST",
            url:"/uploadcontent",
            dataType:"JSON",
            data:{'filename':myFile.name,'file':fileData},
            success:function(response){
                if(response.msg=="success"){
                   $('#file').val('');
                   $('.add-imgs-show').html(`<div id="picture-frame"><img src="../files/imgs/`+response.imageName+`" class ="imgs-post" style ="float: left">
                    <input type="hidden" id ="image-name" value ="`+response.imageName+`">
                     </div>  <script> const element = document.getElementById("file");  element.style.display ="none"
                     const element1 = document.getElementById("post-pics");  element1.style.display ="block"</script>  <br> <hr> `)
                    //deletePics
                    $(document).on('click','#cancel-post',function(){
                      $.ajax({    
                        type: "DELETE",
                        url: "/deletepost",             
                        dataType: "text", 
                        data: {
                          imageName:response.imageName,
                        } ,  
                        success: function(data){     
                          $("#landing-page-content").html(data);        
                        }
                    });
                    });
  
                   
                }
                 
            },
            
        });
    });
  });
  
  //Post-add
  $(document).on('click','#post-pics',function(e){
    e.preventDefault();
    if ( $(this).data('requestRunning') ) {
        return;
    }
    $(this).data('requestRunning', true);
    $.ajax({    
      type: "POST",
      url: "/post-add",             
      dataType: "text", 
      data: {
        imageName:$("#image-name").val(),
        postTag: $("#upload-post-tags").val(),
        postContent: $("#upload-post-content").val(),
      } ,  
      success: function(data){     
        $("#landing-page-content").html(data);        
      },
      complete: function() {
        $(this).data('requestRunning', false);
    }
  });
  });
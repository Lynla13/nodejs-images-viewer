  //Hiện số follow
  function showFollowCount () {
    let path = window.location.pathname;
    let username = path.substring(6);
    $.ajax({    
        type: "POST",
        url: "/showFollowCount",             
        dataType: "text", 
        data : {
          username : username
        },
        success: function(data){     
            let fixedbase = data.replace('{"follow":', '')
            let fixed = fixedbase.replace('}', '');
            let toLikeNum = parseInt(fixed) 
            //Nếu vừa ấnlike thì +1 vào nếu ấn dislike thì -1 
            $("#showAllFollow").html('Nguời theo dõi: '+(toLikeNum));    
        }
    });  
  }

  function showFollowOnload() {
    let path = window.location.pathname;
    let username = path.substring(6);
    $.ajax({    
        type: "POST",
        url: "/showFollowOnLoad",             
        dataType: "text", 
        data : {
          follow : username
        },
        success: function(data){     
            $("#show-follow").val(data);  
            if(data =='Follow') {
                document.getElementById ('follow-insert').style.backgroundColor = '#6e6e6e';
                document.getElementById('follow-insert').innerHTML = "Đã theo dõi";
            }
        }
    });
  }

  function followInsert() {
    let path = window.location.pathname;
    let username = path.substring(6);
    $.ajax({    
      type: "POST",
      url: "/insertFollow",             
      dataType: "text", 
      data: {
        follow: username,
      },
      success: function(data){     
          if(data =='follow') {
              document.getElementById ('follow-insert').style.backgroundColor = '#6e6e6e';
              document.getElementById('follow-insert').innerHTML = "Đã theo dõi";
              showFollowCount ()
              var content = "Người dùng " + $('#session').val() + " đã theo dõi bạn";
              insertNofi (username, content)
          }else if(data =='nofollow') {
            document.getElementById ('follow-insert').style.backgroundColor = '#222222';
            document.getElementById('follow-insert').innerHTML = "Theo dõi";
            showFollowCount ()
          }
      }
  });
  }



//Một số chức năng của profileController đc gọi ở đây
//Hiện người theo dõi của User
function showFollower () {
  let path = window.location.pathname;
  let username = path.substring(6);
  $.ajax({    
    type: "POST",
    url: "/showAllFollower",             
    dataType: "text", 
    data: {
      username: username
    },success: function (data) {
      $('.app-follow-show').html(data);
      document.getElementById ('detail-show').style.display = 'inline';
      document.getElementById ('follower-show').style.display = 'none';
    }
});
}

function showFollowing () {
  let path = window.location.pathname;
  let username = path.substring(6);
  $.ajax({    
    type: "POST",
    url: "/showAllFollowing",             
    dataType: "text", 
    data: {
      username: username
    },success: function (data) {
      $('.app-follow-show').html(data);
      document.getElementById ('detail-show').style.display = 'inline';
      document.getElementById ('following-show').style.display = 'none';
    }
});
}


//
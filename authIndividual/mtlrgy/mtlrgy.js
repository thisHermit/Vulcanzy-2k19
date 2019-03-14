 
// referance message collection

var messageRef=firebase.database().ref('mtlrgy');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('mtlrgy').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var ONET=document.getElementById("cbx1").checked;
    var RIDDLE=document.getElementById("cbx2").checked;
    var WAX=document.getElementById("cbx3").checked;
    var BEYOND=document.getElementById("cbx4").checked;
    
    checkUserPresent(username,ONET RIDDLE, WAX,BEYOND);
}
function checkUserPresent(username,ONET RIDDLE, WAX,BEYOND){
      var leadsRef = firebase.database().ref('mtlrgy');
      leadsRef.on('value', function(snapshot) {
          var all=[];
          snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
              var str=childData.username;
              usernames.push(str+"");
              all.push(str+"");
              usernames.push(str+"");
              var key=childSnapshot.key+"";
              keys.push(key+"");
          });
          if(usernames.includes(username)&&flag){
              flag=false;
              main_key=keys[usernames.indexOf(username)];
              writeUserData(username,ONET RIDDLE, WAX,BEYOND,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,ONET RIDDLE, WAX,BEYOND,false,"");
          }

      });
}

function writeUserData(username,ONET RIDDLE, WAX,BEYOND,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('mtlrgy').child(u_key+"").set({
             ONET:ONET,
         RIDDLE:RIDDLE,
         WAX:WAX,
         BEYOND:BEYOND,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('mtlrgy').child(u_key+"").set({
          username: username,
           ONET:ONET,
         RIDDLE:RIDDLE,
         WAX:WAX,
         BEYOND:BEYOND,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}


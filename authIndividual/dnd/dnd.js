var messageRef=firebase.database().ref('dnd');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('dnd').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var MEME=document.getElementById("cbx1").checked;
    var BOOMERANG=document.getElementById("cbx2").checked;
    var TELL=document.getElementById("cbx3").checked;
    var SHORT=document.getElementById("cbx4").checked;
    var DANCECOMP=document.getElementById("cbx5").checked;
	var DRAMACOMP=document.getElementById("cbx6").checked;
    checkUserPresent(username,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP);
}
function checkUserPresent(username,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP){
      var leadsRef = firebase.database().ref('dnd');
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
              writeUserData(username,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP,false,"");
          }

      });
}

function writeUserData(username,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('dnd').child(u_key+"").set({
            username: username,
             MEME:MEME,
        BOOMERANG:BOOMERANG,
        TELL:TELL,
        SHORT:SHORT,
        DANCECOMP:DANCECOMP,
        DRAMACOMP:DRAMACOMP,
            paid:0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('dnd').child(u_key+"").set({
          username: username,
          MEME:MEME,
        BOOMERANG:BOOMERANG,
        TELL:TELL,
        SHORT:SHORT,
        DANCECOMP:DANCECOMP,
        DRAMACOMP:DRAMACOMP,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}


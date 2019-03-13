var messageRef=firebase.database().ref('l&d');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('l&d').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var TALK=document.getElementById("cbx1").checked;
    var SHOW=document.getElementById("cbx2").checked;
    var THE=document.getElementById("cbx3").checked;
    checkUserPresent(username,TALK,SHOW,THE);
}
function checkUserPresent(username,TALK,SHOW,THE){
      var leadsRef = firebase.database().ref('l&d');
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
              writeUserData(username,TALK,SHOW,THE,lantern,rtw,nb,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,TALK,SHOW,THE,lantern,rtw,nb,false,"");
          }

      });
}

function writeUserData(username,TALK,SHOW,THE,lantern,rtw,nb,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('l&d').child(u_key+"").set({
            username: username,
             bestwaste:best,
            lazyh:lazy,
            vandegraff:vdg,
            lanternm:lantern,
           run:rtw,
		nippy:nb,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('l&d').child(u_key+"").set({
          username: username,
           bestwaste:best,
            lazyh:lazy,
            vandegraff:vdg,
            lanternm:lantern,
           run:rtw,
		nippy:nb,
            paid: 0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}

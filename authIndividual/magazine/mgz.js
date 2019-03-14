 // Initialize Firebase
 
// referance message collection


var messageRef=firebase.database().ref('magzine');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('magzine').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var BOOKFIE=document.getElementById("cbx1").checked;
    var ILLUSION=document.getElementById("cbx2").checked;
    
    checkUserPresent(username,BOOKFIE,ILLUSION);
}
function checkUserPresent(username,BOOKFIE,ILLUSION){
      var leadsRef = firebase.database().ref('magzine');
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
              writeUserData(username,BOOKFIE,ILLUSION,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,BOOKFIE,ILLUSION,false,"");
          }

      });
}

function writeUserData(username,BOOKFIE,ILLUSION,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('magzine').child(u_key+"").set({
            username: username,
            BOOKFIE:BOOKFIE,
         ILLUSION:ILLUSION,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('magzine').child(u_key+"").set({
          username: username,
          BOOKFIE:BOOKFIE,
         ILLUSION:ILLUSION,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}

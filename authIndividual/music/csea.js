 // Initialize Firebase
 


var messageRef=firebase.database().ref('music');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('music').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var TALENT=document.getElementById("cbx1").checked;
    var LYRICAL=document.getElementById("cbx2").checked;
    var GUESS=document.getElementById("cbx3").checked;
    var INSTA=document.getElementById("cbx4").checked;
   
    checkUserPresent(username,TALENT,LYRICAL,GUESS,INSTA);
}
function checkUserPresent(username,TALENT,LYRICAL,GUESS,INSTA){
      var leadsRef = firebase.database().ref('music');
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
              writeUserData(username,TALENT,LYRICAL,GUESS,INSTA,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,TALENT,LYRICAL,GUESS,INSTA,false,"");
          }

      });
}

function writeUserData(username,TALENT,LYRICAL,GUESS,INSTA,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('music').child(u_key+"").set({
            username: username,
            TALENT:TALENT,
         LYRICAL:LYRICAL,
         GUESS:GUESS,
         INSTA:INSTA,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('music').child(u_key+"").set({
          username: username,
          TALENT:TALENT,
         LYRICAL:LYRICAL,
         GUESS:GUESS,
         INSTA:INSTA,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}


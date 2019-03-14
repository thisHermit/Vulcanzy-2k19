 // Initialize Firebase

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyB3urwbUhycDY6jUTCiFloudGHBj7629M4",
        authDomain: "fir-auth-fb5c8.firebaseapp.com",
        databaseURL: "https://fir-auth-fb5c8.firebaseio.com",
        projectId: "fir-auth-fb5c8",
        storageBucket: "fir-auth-fb5c8.appspot.com",
        messagingSenderId: "143950457061"
      };
      firebase.initializeApp(config);
   
// referance message collection


var messageRef=firebase.database().ref('eeea');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('eeea').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var CKTS=document.getElementById("cbx1").checked;
    var ARCHI=document.getElementById("cbx2").checked;
    var ORIGIN=document.getElementById("cbx3").checked;
    var AMALG=document.getElementById("cbx4").checked;
    var DECEPTION=document.getElementById("cbx5").checked;
	var EXPO=document.getElementById("cbx5").checked;
	var PAPER=document.getElementById("cbx5").checked;
    checkUserPresent(username,CKTS, ARCHI, ORIGIN,AMALG,DECEPTION,EXPO,PAPER);
}
function checkUserPresent(username,CKTS, ARCHI, ORIGIN,AMALG,DECEPTION,EXPO,PAPER){
      var leadsRef = firebase.database().ref('eeea');
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
              writeUserData(username,CKTS, ARCHI, ORIGIN,AMALG,DECEPTION,EXPO,PAPER,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,CKTS, ARCHI, ORIGIN,AMALG,DECEPTION,EXPO,PAPER,false,"");
          }

      });
}

function writeUserData(username,CKTS, ARCHI, ORIGIN,AMALG,DECEPTION,EXPO,PAPER,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('eeea').child(u_key+"").set({
            username: username,
           CKTS:CKTS,
         ARCHI:ARCHI,
         ORIGIN:ORIGIN,
         AMALG:AMALG,
         DECEPTION:DECEPTION,
         EXPO:EXPO,
         PAPER:PAPER,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('eeea').child(u_key+"").set({
          username: username,
          CKTS:CKTS,
         ARCHI:ARCHI,
         ORIGIN:ORIGIN,
         AMALG:AMALG,
         DECEPTION:DECEPTION,
         EXPO:EXPO,
         PAPER:PAPER,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}

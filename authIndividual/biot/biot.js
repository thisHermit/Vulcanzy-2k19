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

var messageRef=firebase.database().ref('biot');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('biot').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var LUMI=document.getElementById("cbx1").checked;
    var FOREN=document.getElementById("cbx2").checked;
    var GARDEN=document.getElementById("cbx3").checked;
   
    checkUserPresent(username,LUMI,FOREN,GARDEN);
}
function checkUserPresent(username,LUMI,FOREN,GARDEN){
      var leadsRef = firebase.database().ref('biot');
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
              writeUserData(username,LUMI,FOREN,GARDEN,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,LUMI,FOREN,GARDEN,false,"");
          }

      });
}

function writeUserData(username,LUMI,FOREN,GARDEN,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('biot').child(u_key+"").set({
            username: username,
            LUMI: LUMI,
         FOREN : FOREN,
         GARDEN : GARDEN,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('biot').child(u_key+"").set({
          username: username,
          LUMI: LUMI,
         FOREN : FOREN,
         GARDEN : GARDEN,
		paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}


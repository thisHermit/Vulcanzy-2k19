 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD712_13o8h2iWa6T9eD6GFzDwBTg97fX8",
    authDomain: "vulcanzy-chem.firebaseapp.com",
    databaseURL: "https://vulcanzy-chem.firebaseio.com",
    projectId: "vulcanzy-chem",
    storageBucket: "vulcanzy-chem.appspot.com",
    messagingSenderId: "906261838083"
  };
  firebase.initializeApp(config);

var messageRef=firebase.database().ref('chem');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('chem').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
	
    var username=document.getElementById("username").value;
    var LECT=document.getElementById("cbx1").checked;
    var AC=document.getElementById("cbx2").checked;
    var EQ=document.getElementById("cbx3").checked;
    var PH=document.getElementById("cbx4").checked;
    var BD=document.getElementById("cbx5").checked;
	var QG=document.getElementById("cbx6").checked;
    checkUserPresent(username,LECT,AC,EQ,PH,BD,QG);
}
function checkUserPresent(username,LECT,AC,EQ,PH,BD,QG){
      var leadsRef = firebase.database().ref('chem');
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
              writeUserData(username,LECT,AC,EQ,PH,BD,QGLECT,AC,EQ,PH,BD,QGLECT,AC,EQ,PH,BD,QG,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,LECT,AC,EQ,PH,BD,QGLECT,AC,EQ,PH,BD,QG,false,"");
          }

      });
}

function writeUserData(username,LECT,AC,EQ,PH,BD,QG,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('chem').child(u_key+"").set({
            username: username,
            LECT: LECT,
         AC: AC,
         EQ: EQ,
         PH:PH,
	  BD:BD,
      QG:QG,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('chem').child(u_key+"").set({
          username: username,
          LECT: LECT,
         AC: AC,
         EQ: EQ,
         PH:PH,
	  BD:BD,
      QG:QG,
            paid: 0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}



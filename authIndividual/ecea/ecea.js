 // Initialize Firebase
//  var config = {
//     apiKey: "AIzaSyB3urwbUhycDY6jUTCiFloudGHBj7629M4",
//     authDomain: "fir-auth-fb5c8.firebaseapp.com",
//     databaseURL: "https://fir-auth-fb5c8.firebaseio.com",
//     projectId: "fir-auth-fb5c8",
//     storageBucket: "fir-auth-fb5c8.appspot.com",
//     messagingSenderId: "143950457061"
//   };
//   firebase.initializeApp(config);


var messageRef=firebase.database().ref('ecea');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
console.log(uname);
document.getElementById('ecea').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var FORESEE=document.getElementById("cbx1").checked;
    var ELECTRO=document.getElementById("cbx2").checked;
    var WORKSHOP=document.getElementById("cbx3").checked;
    var PAPER=document.getElementById("cbx4").checked;
    var MURMAZE=document.getElementById("cbx5").checked;
	 var QUIZ=document.getElementById("cbx6").checked;
	 var CAZZLE=document.getElementById("cbx7").checked;
    checkUserPresent(username,FORESEE,ELECTRO,WORKSHOP,PAPER,MURMAZE,QUIZ,CAZZLE);
}
function checkUserPresent(username,FORESEE,ELECTRO,WORKSHOP,PAPER,MURMAZE,QUIZ,CAZZLE){
      var leadsRef = firebase.database().ref('ecea');
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
              writeUserData(username,FORESEE,ELECTRO,WORKSHOP,PAPER,MURMAZE,QUIZ,CAZZLE,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,FORESEE,ELECTRO,WORKSHOP,PAPER,MURMAZE,QUIZ,CAZZLE,false,"");
          }

      });
}

function writeUserData(username,FORESEE,ELECTRO,WORKSHOP,PAPER,MURMAZE,QUIZ,CAZZLE,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('ecea').child(u_key+"").set({
            username: username,
             FORESEE:FORESEE,
         ELECTRO:ELECTRO,
         WORKSHOP:WORKSHOP,
         PAPER:PAPER,
         MURMAZE: MURMAZE,
         QUIZ:QUIZ,
         CAZZLE:CAZZLE,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('ecea').child(u_key+"").set({
          username: username,
           FORESEE:FORESEE,
         ELECTRO:ELECTRO,
         WORKSHOP:WORKSHOP,
         PAPER:PAPER,
         MURMAZE: MURMAZE,
         QUIZ:QUIZ,
         CAZZLE:CAZZLE,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}


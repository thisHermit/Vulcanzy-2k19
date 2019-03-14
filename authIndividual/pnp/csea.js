 // Initialize Firebase
 // Initialize Firebase


var messageRef=firebase.database().ref('pnp');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('pnp').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	
    var HAND=document.getElementById("cbx1").checked;
    var ART=document.getElementById("cbx2").checked;
    var ARTATHON=document.getElementById("cbx3").checked;
    var  PAINT=document.getElementById("cbx4").checked;
    var ADV=document.getElementById("cbx5").checked;
	var MANNEQUIN=document.getElementById("cbx6").checked;
    checkUserPresent(username,HAND,ART,ARTATHON, PAINT,ADV,MANNEQUIN);
}
function checkUserPresent(username,HAND,ART,ARTATHON, PAINT,ADV,MANNEQUIN){
      var leadsRef = firebase.database().ref('pnp');
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
              writeUserData(username,HAND,ART,ARTATHON, PAINT,ADV,MANNEQUIN,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,HAND,ART,ARTATHON, PAINT,ADV,MANNEQUIN,false,"");
          }

      });
}

function writeUserData(username,HAND,ART,ARTATHON, PAINT,ADV,MANNEQUIN,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('pnp').child(u_key+"").set({
            username: username,
            HAND:HAND,
        ART:ART,
        ARTATHON:ARTATHON,
        PAINT:PAINT,
        ADV:ADV,
        PHOTO:PHOTO,
        MANNEQUIN:MANNEQUIN,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('pnp').child(u_key+"").set({
          username: username,
          HAND:HAND,
        ART:ART,
        ARTATHON:ARTATHON,
        PAINT:PAINT,
        ADV:ADV,
        PHOTO:PHOTO,
        MANNEQUIN:MANNEQUIN,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}


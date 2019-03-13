var messageRef=firebase.database().ref('mech');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('mech').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var AMMC=document.getElementById("cbx1").checked;
    var GISS=document.getElementById("cbx2").checked;
    var MARC=document.getElementById("cbx3").checked;
    var ROBO=document.getElementById("cbx4").checked;
    var wor=document.getElementById("cbx5").checked;
    checkUserPresent(username,AMMC,GISS,MARC,ROBO,wor);
}
function checkUserPresent(username,AMMC,GISS,MARC,ROBO,wor){
      var leadsRef = firebase.database().ref('mech');
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
              writeUserData(username,AMMC,GISS,MARC,ROBO,wor,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,AMMC,GISS,MARC,ROBO,wor,false,"");
          }

      });
}

function writeUserData(username,AMMC,GISS,MARC,ROBO,wor,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('mech').child(u_key+"").set({
            username: username,
            colloquium:col,
            code_sprint:cod,
            cryptoceon:cry,
            virtually_true:vir,
            workshop_on_cryptograpgy:wor,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('mech').child(u_key+"").set({
          username: username,
          colloquium:col,
          code_sprint:cod,
          cryptoceon:cry,
          virtually_true:vir,
          workshop_on_cryptograpgy:wor,
            paid:0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}

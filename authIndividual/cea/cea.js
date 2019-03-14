 // Intialize Firebase
 

var messageRef=firebase.database().ref('cea');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('cea').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
	CIVIL:CIVIL,
         CRACK:CRACK,
         CONCRETE:CONCRETE,
         :PAPER,
         ASKME:ASKME,
         VILLE:VILLE
    var CIVIL=document.getElementById("cbx1").checked;
    var CRACK=document.getElementById("cbx2").checked;
    var CONCRETE=document.getElementById("cbx3").checked;
    var PAPER=document.getElementById("cbx4").checked;
    var ASKME=document.getElementById("cbx5").checked;
	var VILLE=document.getElementById("cbx6").checked;
    checkUserPresent(username,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE);
}
function checkUserPresent(username,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE){
      var leadsRef = firebase.database().ref('cea');
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
              writeUserData(username,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE,false,"");
          }

      });
}

function writeUserData(username,,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('cea').child(u_key+"").set({
            username: username,
           CIVIL:CIVIL,
         CRACK:CRACK,
         CONCRETE:CONCRETE,
         PAPER:PAPER,
         ASKME:ASKME,
         VILLE:VILLE,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('cea').child(u_key+"").set({
          username: username,
           CIVIL:CIVIL,
         CRACK:CRACK,
         CONCRETE:CONCRETE,
         PAPER:PAPER,
         ASKME:ASKME,
         VILLE:VILLE,
            paid: 0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}


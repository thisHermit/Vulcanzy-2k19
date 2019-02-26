var messageRef=firebase.database().ref('cse');
//event listener for form submit
var usernames=[];
document.getElementById('cse').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var col=document.getElementById("cbx1").checked;
    var cod=document.getElementById("cbx2").checked;
    var cry=document.getElementById("cbx3").checked;
    var vir=document.getElementById("cbx4").checked;
    var wor=document.getElementById("cbx5").checked;
    checkUserPresent(username,col,cod,cry,vir,wor);
}
function checkUserPresent(username,col,cod,cry,vir,wor){
      var leadsRef = firebase.database().ref('cse');
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
              writeUserData(username,cod,col,cry,vir,wor,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,cod,col,cry,vir,wor,false,"");
          }

      });
}

function writeUserData(username,cod,col,cry,vir,wor,isTrue,u_key) {
  if(isTrue){
        window.alert("already");
        firebase.database().ref('cse').child(u_key).set({
            username: username,
            colloquium:col,
            code_sprint:cod,
            cryptoceon:cry,
            virtually_true:vir,
            workshop_on_cryptograpgy:wor
        });
    }
    else{
        window.alert("new");
        firebase.database().ref('cse').push({
          username: username,
          colloquium:col,
          code_sprint:cod,
          cryptoceon:cry,
          virtually_true:vir,
          workshop_on_cryptograpgy:wor
        });
    }
    flag=true;
}

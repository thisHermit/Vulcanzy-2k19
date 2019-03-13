var messageRef=firebase.database().ref('snh');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('snh').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var best=document.getElementById("cbx1").checked;
    var lazy=document.getElementById("cbx2").checked;
    var vdg=document.getElementById("cbx3").checked;
    var lantern=document.getElementById("cbx4").checked;
    var rtw=document.getElementById("cbx5").checked;
	var nb=document.getElementById("cbx6").checked;
    checkUserPresent(username,best,lazy,vdg,lantern,rtw,nb);
}
function checkUserPresent(username,best,lazy,vdg,lantern,rtw,nb){
      var leadsRef = firebase.database().ref('snh');
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
              writeUserData(username,best,lazy,vdg,lantern,rtw,nb,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,best,lazy,vdg,lantern,rtw,nb,false,"");
          }

      });
}

function writeUserData(username,best,lazy,vdg,lantern,rtw,nb,isTrue,u_key) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('snh').child(u_key+"").set({
            username: username,
             bestwaste:best,
            lazyh:lazy,
            vandegraff:vdg,
            lanternm:lantern,
           run:rtw,
		nippy:nb,
            paid: 0
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('snh').child(u_key+"").set({
          username: username,
           bestwaste:best,
            lazyh:lazy,
            vandegraff:vdg,
            lanternm:lantern,
           run:rtw,
		nippy:nb,
            paid: 0
        });
    }
    flag=true;
    window.location.href = "../index.html";
}

var messageRef=firebase.database().ref('cse');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('cse').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
var total_fee=0;
function submitForm(e){
    e.preventDefault();
    var total_fee=0;
    var username=document.getElementById("username").value;
    var col=document.getElementById("cbx1").checked;
    var col_fee=100;
    var cod=document.getElementById("cbx2").checked;
    var  cod_fee=100;
    var cry=document.getElementById("cbx3").checked;
    var cry_fee=100;
    var vir=document.getElementById("cbx4").checked;
    var vir_fee=100;
    var wor=document.getElementById("cbx5").checked;
    var wor_fee=100;
    total_fee+=return_true(col,col_fee)+return_true(cod,cod_fee)+return_true(cry,cry_fee)+return_true(vir,vir_fee)+return_true(wor,wor_fee);
    checkUserPresent(username,col,cod,cry,vir,wor,total_fee);
}
function checkUserPresent(username,col,cod,cry,vir,wor){
      var leadsRef = firebase.database().ref('cse/'+uname);
    var flag=false;
      leadsRef.on('value', function(snapshot) {
//           var all=[];
//           snapshot.forEach(function(childSnapshot) {
//               var childData = childSnapshot.val();
//               var str=childData.username;
//               usernames.push(str+"");
//               all.push(str+"");
//               usernames.push(str+"");
//               var key=childSnapshot.key+"";
//               keys.push(key+"");
                var child = snapshot.val();
                if(child!=null) {flag=true;writeUserData(username,cod,col,cry,vir,wor,true,flag);}
          });
//           if(usernames.includes(username)&&flag){
//               flag=false;
//               main_key=keys[usernames.indexOf(username)];
//               writeUserData(username,cod,col,cry,vir,wor,true,main_key);
//           }
//           else if(flag){
//               flag=false;
//               console.log("new here");
//               writeUserData(username,cod,col,cry,vir,wor,false,"");
//           }

     // });
}

function writeUserData(username,cod,col,cry,vir,wor,isTrue,totalFee) {
  if(isTrue){
        window.alert("already registered");
        firebase.database().ref('cse').child(username+"").set({
            username: username,
            colloquium:col,
            code_sprint:cod,
            cryptoceon:cry,
            virtually_true:vir,
            workshop_on_cryptograpgy:wor,
            paid: 0,
            totalFee:totalFee
        });
    }
    else{
        window.alert("new regitration successful");
        firebase.database().ref('cse').child(username+"").set({
          username: username,
          psycharena:col,
          code_sprint:cod,
          cryptoceon:cry,
          virtually_true:vir,
          workshop_on_cryptograpgy:wor,
            paid:0,
            totalFee:totalFee
        });
    }
   
    window.location.href = "../index.html";
}

function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}
    

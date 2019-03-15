 // Intialize Firebase


var messageRef=firebase.database().ref('civil');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('cea').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var civil=document.getElementById("cbx1").checked;
    var civil_fee=100;
    var crack=document.getElementById("cbx2").checked;
    var crack_fee=100;
    var concrete=document.getElementById("cbx3").checked;
    var concrete_fee=100;
    var askme=document.getElementById("cbx4").checked;
    var askme_fee=100;
	  var ville=document.getElementById("cbx5").checked;
    var ville_fee=100;
    total_fee+=return_true(civil,civil_fee)+return_true(crack,crack_fee)+return_true(concrete,concrete_fee)+return_true(askme,askme_fee)+return_true(ville,ville_fee);
    console.log(total_fee +" much need to be paid");
    writeUserData(username,civil,crack,concrete,askme,ville,total_fee);
}

function writeUserData(username,civil,crack,concrete,askme,ville,total_fee) {
      firebase.database().ref('civil').child(username+"").set({
          username: username,
          CIVILOPEDIA: civil,
          CRACK_THE_STRUCTURE:crack,
          CON_CREATE:concrete,
          ASK_ME_ANYTHING:askme,
          VILLE_INTELLIGENTE:ville,
          paid: 0,
          totalFee:total_fee
      });
      window.alert("Registered Successfully");
      window.location.href='../../../../index.html';
}
function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

function fetchData(username){
      var leadsRef = firebase.database().ref('civil/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.CIVILOPEDIA;
                  document.getElementById("cbx2").checked=child.CRACK_THE_STRUCTURE;
                  document.getElementById("cbx3").checked=child.CON_CREATE;
                  document.getElementById("cbx4").checked=child.ASK_ME_ANYTHING;
                  document.getElementById("cbx5").checked=child.VILLE_INTELLIGENTE;
                }
        });
}

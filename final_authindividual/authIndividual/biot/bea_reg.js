

var messageRef=firebase.database().ref('biotech');

var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('biot').addEventListener('submit',submitForm);
const scriptURL = 'https://script.google.com/macros/s/AKfycbwSJ-RjlxO5Rby8TTjBUobEdxOJgyvWamWiN5Pr-m2FZZP3ycu3/exec'
  const form = document.forms['biot-form']
var total_fee=0;
fetchData(uname);
function submitForm(e){

    e.preventDefault();
    var username=document.getElementById("username").value;
    var foren=document.getElementById("cbx1").checked;
    var foren_fee=50;
    var lumi=document.getElementById("cbx2").checked;
    var lumi_fee=0;
    var garden=document.getElementById("cbx3").checked;
    var garden_fee=0;
    total_fee+=return_true(lumi,lumi_fee)+return_true(foren,foren_fee)+return_true(garden,garden_fee)
    writeUserData(username,foren,lumi,garden,total_fee);
}

function writeUserData(username,foren,lumi,garden,total_fee) {
  firebase.database().ref('biotech').child(username+"").set({
      username: username,
      FORENSICS:foren,
      LUMIERE:lumi,
      GARDEN_SCAVENGERS:garden,
      paid: 0,
      totalfee:total_fee
  });
    if(total_fee==0){
       window.alert("Registered Successfully");   
    }
    else{
       window.alert("Registered Successfully\nYou have to pay total of Rs. "+total_fee);
    }
        window.location.href='../../../index.html';
}
function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

function fetchData(username){
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    
      var leadsRef = firebase.database().ref('biotech/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.FORENSICS;
                  document.getElementById("cbx2").checked=child.LUMIERE;
                  document.getElementById("cbx3").checked=child.GARDEN_SCAVENGERS;
                }
        });
}

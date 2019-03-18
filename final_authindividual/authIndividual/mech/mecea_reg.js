var messageRef=firebase.database().ref('mech');

var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('mec').addEventListener('submit',submitForm);
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRLM9whFMC9n53gb1kcWhmYKHwe6BLVzFpm2RnMOjD1aEMnEw1/exec'
  const form = document.forms['mech-form']
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var ammc=document.getElementById("cbx1").checked;
    var ammc_fee=500;
    var giss=document.getElementById("cbx2").checked;
    var giss_fee=0;
    var marc=document.getElementById("cbx3").checked;
    var marc_fee=0;
    var robo=document.getElementById("cbx4").checked;
    var robo_fee=200;
    var wor=document.getElementById("cbx5").checked;
    var wor_fee=0;
    total_fee=return_true(ammc,ammc_fee)+return_true(giss,giss_fee)+return_true(marc,marc_fee)+return_true(robo,robo_fee)+return_true(wor,wor_fee);
    writeUserData(username,ammc,giss,marc,robo,wor,total_fee);
}
function writeUserData(username,ammc,giss,marc,robo,wor,total_fee) {
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

        firebase.database().ref('mech').child(username+"").set({
            username: username,
            AMMC_AIRCRAFT_MODELLING_AND_MANEUVERING_CHALLANGE:ammc,
            GISS_GODAVARI_INNOVATION_FOR_SOCIETY_SUMMIT:giss,
            MARC_MECHANISM_AND_ROBOTICS_CHAMPIONSHIP:marc,
            ROBO_WAR:robo,
            WHAT_S_BEYOND:wor,
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
      var leadsRef = firebase.database().ref('mech/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.AMMC_AIRCRAFT_MODELLING_AND_MANEUVERING_CHALLANGE;
                  document.getElementById("cbx2").checked=child.GISS_GODAVARI_INNOVATION_FOR_SOCIETY_SUMMIT;
                  document.getElementById("cbx3").checked=child.MARC_MECHANISM_AND_ROBOTICS_CHAMPIONSHIP;
                  document.getElementById("cbx4").checked=child.ROBO_WAR;
                  document.getElementById("cbx5").checked=child.WHAT_S_BEYOND;
                }
        });
}

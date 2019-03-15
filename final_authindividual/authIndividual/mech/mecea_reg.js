var messageRef=firebase.database().ref('mech');

var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('mec').addEventListener('submit',submitForm);

var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var ammc=document.getElementById("cbx1").checked;
    var ammc_fee=100;
    var giss=document.getElementById("cbx2").checked;
    var giss_fee=100;
    var marc=document.getElementById("cbx3").checked;
    var marc_fee=100;
    var robo=document.getElementById("cbx4").checked;
    var robo_fee=100;
    var wor=document.getElementById("cbx5").checked;
    var wor_fee=100;
    total_fee=return_true(ammc,ammc_fee)+return_true(giss,giss_fee)+return_true(marc,marc_fee)+return_true(robo,robo_fee)+return_true(wor,wor_fee);
    writeUserData(username,ammc,giss,marc,robo,wor,total_fee);
}
function writeUserData(username,ammc,giss,marc,robo,wor,total_fee) {

        firebase.database().ref('mech').child(username+"").set({
            username: username,
            AMMC_Aircraft_Modelling_and_Maneuvering_Challange_:ammc,
            GISS_Godavari_Innovation_for_Society_Summit_:giss,
            MARC_Mechanism_and_Robotics_Championship_:marc,
            ROBO_WAR:robo,
            WORKSHOP___QUIZES:wor,
            paid: 0,
            totalfee:total_fee
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
      var leadsRef = firebase.database().ref('mech/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.AMMC_Aircraft_Modelling_and_Maneuvering_Challange_;
                  document.getElementById("cbx2").checked=child.GISS_Godavari_Innovation_for_Society_Summit_;
                  document.getElementById("cbx3").checked=child.MARC_Mechanism_and_Robotics_Championship_;
                  document.getElementById("cbx4").checked=child.ROBO_WAR;
                  document.getElementById("cbx5").checked=child.WORKSHOP___QUIZES;
                }
        });
}

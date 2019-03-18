var messageRef=firebase.database().ref('cse');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('cse').addEventListener('submit',submitForm);
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRLM9whFMC9n53gb1kcWhmYKHwe6BLVzFpm2RnMOjD1aEMnEw1/exec'
  const form = document.forms['submit-to-google-sheet']
var total_fee=0;
fetchData(uname)
function submitForm(e){
    e.preventDefault();
    var total_fee=0;
    var username=document.getElementById("username").value;
    var psych=document.getElementById("cbx1").checked;
    var psych_fee=50;
    var cod=document.getElementById("cbx2").checked;
    var  cod_fee=0;
    var cry=document.getElementById("cbx3").checked;
    var cry_fee=0;
    var vir=document.getElementById("cbx4").checked;
    var vir_fee=50;
    var wor=document.getElementById("cbx5").checked;
    var wor_fee=100;
    var and=document.getElementById("cbx6").checked;
    var and_fee=100;
    total_fee+=return_true(psych,psych_fee)+return_true(cod,cod_fee)+return_true(cry,cry_fee)+return_true(vir,vir_fee)+return_true(wor,wor_fee)+return_true(and,and_fee);
    console.log(total_fee+" much need to be paid");
    writeUserData(username,psych,cod,cry,vir,wor,and,total_fee);
}

function writeUserData(username,psych,cod,cry,vir,wor,and,total_fee) {
       
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    
        firebase.database().ref('cse').child(username+"").set({
            username: username,
            PSYCH_ARENA:psych,
            CODE_SPRINT:cod,
            CRYPTACTAEON:cry,
            VIRTUALLY_TRUE:vir,
            WORKSHOP_ON_CRYPTOGRAPHY:wor,
            ANDROID_INNOVATOR:and,
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
      var leadsRef = firebase.database().ref('cse/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.PSYCH_ARENA;
                  document.getElementById("cbx2").checked=child.CODE_SPRINT;
                  document.getElementById("cbx3").checked=child.CRYPTACTAEON;
                  document.getElementById("cbx4").checked=child.VIRTUALLY_TRUE;
                  document.getElementById("cbx5").checked=child.WORKSHOP_ON_CRYPTOGRAPHY;
                  document.getElementById("cbx6").checked=child.ANDROID_INNOVATOR;
                }
        });
}

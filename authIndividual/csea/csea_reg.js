var messageRef=firebase.database().ref('cse');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('cse').addEventListener('submit',submitForm);

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
    console.log(total_fee+" much need to be paid");
    checkUserPresent(username,col,cod,cry,vir,wor,total_fee);
}
function checkUserPresent(username,col,cod,cry,vir,wor,total_fee){

      var leadsRef = firebase.database().ref('cse/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                window.alert(child);
                if(child==null &&flag) {
                  flag=false;
                  writeUserData(username,cod,col,cry,vir,wor,total_fee);

                }
                else if(flag){
                  flag=false;
                  window.alert("you have already registered");
                }
        });
}

function writeUserData(username,cod,col,cry,vir,wor,totalFee) {
        window.alert("registered successfully");
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

function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

var messageRef=firebase.database().ref('eee');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('eeea').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;

    var ckts=document.getElementById("cbx1").checked;
    var ckts_fee=0;
    var archi=document.getElementById("cbx2").checked;
    var archi_fee=0;
    var origin=document.getElementById("cbx3").checked;
    var origin_fee=50;
    var amalg=document.getElementById("cbx4").checked;
    var amalg_fee=0;
    var deception=document.getElementById("cbx5").checked;
    var deception_fee=50;
  	var expo=document.getElementById("cbx6").checked;
    var expo_fee=0;

    total_fee=return_true(ckts,ckts_fee)+return_true(archi,archi_fee)+return_true(origin,origin_fee)+return_true(amalg,amalg_fee)+return_true(deception,deception_fee)+return_true(expo,expo_fee);
    writeUserData(username,ckts, archi, origin,amalg,deception,expo,total_fee);
}

function writeUserData(username,ckts, archi, origin,amalg,deception,expo,total_fee) {

        firebase.database().ref('eee').child(username+"").set({
            username: username,
            ALL_ABOUT_CIRCUITS:ckts,
            ARCHIPELAGO:archi,
            BACK_TO_THE_ORIGIN:origin,
            AMALGAMATE:amalg,
            DECEPTION:deception,
            PROJECT_EXPO:expo,
            paid: 0,
            totalfee:total_fee
        });
        window.alert("Registered Successfully");
        window.location.href='../index.html';
}
function fetchData(username){
      var leadsRef = firebase.database().ref('eee/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.ALL_ABOUT_CIRCUITS;
                  document.getElementById("cbx2").checked=child.ARCHIPELAGO;
                  document.getElementById("cbx3").checked=child.BACK_TO_THE_ORIGIN;
                  document.getElementById("cbx4").checked=child.AMALGAMATE;
                  document.getElementById("cbx5").checked=child.DECEPTION;
                  document.getElementById("cbx6").checked=child.PROJECT_EXPO;
                }
        });
}
function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

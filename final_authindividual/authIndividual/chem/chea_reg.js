
var messageRef=firebase.database().ref('chem');

var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('chem').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var lect=document.getElementById("cbx1").checked;
    var lect_fee=100;
    var ac=document.getElementById("cbx2").checked;
    var ac_fee=100;
    var eq=document.getElementById("cbx3").checked;
    var eq_fee=100;
    var ph=document.getElementById("cbx4").checked;
    var ph_fee=100;
    var bd=document.getElementById("cbx5").checked;
    var bd_fee=100;
	  var qg=document.getElementById("cbx6").checked;
    var qg_fee=100;
    total_fee=return_true(lect,lect_fee)+return_true(ac,ac_fee)+return_true(eq,eq_fee)+return_true(ph,ph_fee)+return_true(bd,bd_fee)+return_true(qg,qg_fee);
    writeUserData(username,lect,ac,eq,ph,bd,qg,total_fee);
}

function writeUserData(username,lect,ac,eq,ph,bd,qg,total_fee) {
  firebase.database().ref('chem').child(username+"").set({
      username: username,
      LECTURES:lect,
      ALCHEMY:ac,
      EXQUIZITE:eq,
      PHEONIX:ph,
      BLAST_DARTS:bd,
      QUICKG:qg,
      paid: 0,
      totalfee:total_fee
  });
  window.alert("registered successfully");
}
function fetchData(username){
      var leadsRef = firebase.database().ref('chem/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.LECTURES;
                  document.getElementById("cbx2").checked=child.ALCHEMY;
                  document.getElementById("cbx3").checked=child.EXQUIZITE;
                  document.getElementById("cbx4").checked=child.PHEONIX;
                  document.getElementById("cbx5").checked=child.BLAST_DARTS;
                  document.getElementById("cbx6").checked=child.QUICKG;
                }
        });
}
function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

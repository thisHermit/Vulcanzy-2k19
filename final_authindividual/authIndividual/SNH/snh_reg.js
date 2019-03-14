var messageRef=firebase.database().ref('dsh');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('snh').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var best=document.getElementById("cbx1").checked;
    var best_fee=100;
    var lazy=document.getElementById("cbx2").checked;
    var lazy_fee=100;
    var vdg=document.getElementById("cbx3").checked;
    var vdg_fee=100;
    var lantern=document.getElementById("cbx4").checked;
    var lantern_fee=100;
    var rtw=document.getElementById("cbx5").checked;
    var rtw_fee=100;
  	var nb=document.getElementById("cbx6").checked;
    var nb_fee=100;
    total_fee=return_true(best,best_fee)+return_true(lazy,lazy_fee)+return_true(vdg,vdg_fee)+return_true(lantern,lantern_fee)+return_true(rtw,rtw_fee)+return_true(nb,nb_fee);
    writeUserData(username,best,lazy,vdg,lantern,rtw,nb,total_fee);
}
function writeUserData(username,best,lazy,vdg,lantern,rtw,nb,total_fee) {

        firebase.database().ref('dsh').child(username+"").set({
            username: username,
            BEST_OUT_OF_WASTE:best,
            LAZY_HOVER_V1_0:lazy,
            VAN_DE_GRAFF_GENERATOR:vdg,
            LANTERN_MAKING:lantern,
            RUN_TO_WIN:rtw,
            NIPPY_BUZZ:nb,
            paid: 0,
            totalfee:total_fee
        });
        window.alert("registered successfully");
}

function fetchData(username){
      var leadsRef = firebase.database().ref('dsh/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.PSYBEST_OUT_OF_WASTECH_ARENA;
                  document.getElementById("cbx2").checked=child.LAZY_HOVER_V1_0;
                  document.getElementById("cbx3").checked=child.VAN_DE_GRAFF_GENERATOR;
                  document.getElementById("cbx4").checked=child.LANTERN_MAKING;
                  document.getElementById("cbx5").checked=child.RUN_TO_WIN;
                  document.getElementById("cbx6").checked=child.NIPPY_BUZZ;
                }
        });
}
function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

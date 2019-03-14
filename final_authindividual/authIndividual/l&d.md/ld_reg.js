var messageRef=firebase.database().ref('lnd');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('ld').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);

function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var talk=document.getElementById("cbx1").checked;
    var talk_fee=100;
    var show=document.getElementById("cbx2").checked;
    var show_fee=100;
    var the=document.getElementById("cbx3").checked;
    var the_fee=100;
    total_fee=return_true(talk,talk_fee)+return_true(show,show_fee)+return_true(the,the_fee);
    writeUserData(username,talk,show,the,total_fee);
}
function writeUserData(username,talk,show,the,total_fee) {

        firebase.database().ref('lnd').child(username+"").set({
            username: username,
            TALKING_TITANS:talk,
            SHOW_TYM:show,
            THE_ULTIMATE_TREASURE_HUNT:the,
            paid: 0,
            totalfee:total_fee
        });
        window.alert("Registered Successfully");
        window.location.href='../index.html';
}

function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

function fetchData(username){
      var leadsRef = firebase.database().ref('lnd/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.TALKING_TITANS;
                  document.getElementById("cbx2").checked=child.SHOW_TYM;
                  document.getElementById("cbx3").checked=child.THE_ULTIMATE_TREASURE_HUNT;
                }
        });
}

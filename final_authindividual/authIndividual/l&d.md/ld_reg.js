var messageRef=firebase.database().ref('lnd');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('ld').addEventListener('submit',submitForm);
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRLM9whFMC9n53gb1kcWhmYKHwe6BLVzFpm2RnMOjD1aEMnEw1/exec'
  const form = document.forms['lnd-form']
var total_fee=0;
fetchData(uname);

function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var talk=document.getElementById("cbx1").checked;
    var talk_fee=0;
    var show=document.getElementById("cbx2").checked;
    var show_fee=0;
    var the=document.getElementById("cbx3").checked;
    var the_fee=0;
    var ext=document.getElementById("cbx4").checked;
    var ext_fee=0;
    var talkm=document.getElementById("cbx5").checked;
    var talkm_fee=0;
    total_fee=return_true(talk,talk_fee)+return_true(show,show_fee)+return_true(the,the_fee)++return_true(ext,ext_fee)eturn_true(talkm,talkm_fee)+return_true(the,the_fee);
    writeUserData(username,talk,show,the,ext,talkm,total_fee);
}
function writeUserData(username,talk,show,the,ext,talkm,total_fee) {
    
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

        firebase.database().ref('lnd').child(username+"").set({
            username: username,
            TALKING_TITANS:talk,
            SHOW_TYM:show,
            THE_AMAZING_RACE:the,
            EXTEMPORE:ext,
            TALK_MASTERS:talkm,
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
                  document.getElementById("cbx3").checked=child.THE_AMAZING_RACE;
                  document.getElementById("cbx4").checked=child.EXTEMPORE;
                  document.getElementById("cbx5").checked=child.TALKING_MASTERS;
                }
        });
}

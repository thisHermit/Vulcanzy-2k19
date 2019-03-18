var messageRef=firebase.database().ref('dnd');

var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('dnd').addEventListener('submit',submitForm);
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRLM9whFMC9n53gb1kcWhmYKHwe6BLVzFpm2RnMOjD1aEMnEw1/exec'
  const form = document.forms['dnd-form']
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;

    var meme=document.getElementById("cbx1").checked;
    var meme_fee=0;
    var boom=document.getElementById("cbx2").checked;
    var boom_fee=0;
    var tell=document.getElementById("cbx3").checked;
    var tell_fee=0;
    var short=document.getElementById("cbx4").checked;
    var short_fee=50;
    var dance=document.getElementById("cbx5").checked;
    var dance_fee=0;
	  var drama=document.getElementById("cbx6").checked;
    var drama_fee=0;
    total_fee=return_true(meme,meme_fee)+return_true(boom,boom_fee)+return_true(tell,tell_fee)+return_true(short,short_fee)+return_true(dance,dance_fee)+return_true(drama,drama_fee);
    writeUserData(username,meme,boom,tell,short,dance,drama,total_fee);
}

function writeUserData(username,meme,boom,tell,short,dance,drama,total_fee) {
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
	
  firebase.database().ref('dnd').child(username+"").set({
      username: username,
      MEME_FINITY_WAR:meme,
      BOOMERANG:boom,
      TELL_A_TALE:tell,
      LIGHTS_CAMERA_ACTION:short,
      DANZOMANIO:dance,
      DRAMEBAAZ:drama,
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
      var leadsRef = firebase.database().ref('dnd/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.MEME_FINITY_WAR;
                  document.getElementById("cbx2").checked=child.BOOMERANG;
                  document.getElementById("cbx3").checked=child.TELL_A_TALE;
                  document.getElementById("cbx4").checked=child.LIGHTS_CAMERA_ACTION;
                  document.getElementById("cbx5").checked=child.DANZOMANIO;
                  document.getElementById("cbx6").checked=child.DRAMEBAAZ;
                }
        });
}

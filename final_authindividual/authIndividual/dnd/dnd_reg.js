var messageRef=firebase.database().ref('dnd');

var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('dnd').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;

    var meme=document.getElementById("cbx1").checked;
    var meme_fee=100;
    var boom=document.getElementById("cbx2").checked;
    var boom_fee=100;
    var tell=document.getElementById("cbx3").checked;
    var tell_fee=100;
    var short=document.getElementById("cbx4").checked;
    var short_fee=100;
    var dance=document.getElementById("cbx5").checked;
    var dance_fee=100;
	  var drama=document.getElementById("cbx6").checked;
    var drama_fee=100;
    total_fee=return_true(meme,meme_fee)+return_true(boom,boom_fee)+return_true(tell,tell_fee)+return_true(short,short_fee)+return_true(dance,dance_fee)+return_true(drama,drama_fee);
    writeUserData(username,meme,boom,tell,short,dance,drama,total_fee);
}

function writeUserData(username,meme,boom,tell,short,dance,drama,total_fee) {
  firebase.database().ref('dnd').child(username+"").set({
      username: username,
      MEME_FINITY_WAR:meme,
      BOOMERANG:boom,
      TELL_A_TALE:tell,
      LIGHTS_CAMERA_ACTION:short,
      DANZOMANIA:dance,
      DRAMEBAAZ:drama,
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
                  document.getElementById("cbx5").checked=child.DANZOMANIA;
                  document.getElementById("cbx6").checked=child.DRAMEBAAZ;
                }
        });
}

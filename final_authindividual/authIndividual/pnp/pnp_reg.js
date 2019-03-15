
var messageRef=firebase.database().ref('pnp');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('pnp').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;

    var hand=document.getElementById("cbx1").checked;
    var hand_fee=20;
    var art=document.getElementById("cbx2").checked;
    var art_fee=0;
    var artathon=document.getElementById("cbx3").checked;
    var artathon_fee=0;
    var paint=document.getElementById("cbx4").checked;
    var paint_fee=0;
    var adv=document.getElementById("cbx5").checked;
    var adv_fee=0;
  	var photo=document.getElementById("cbx6").checked;
    var photo_fee=0;
  	var mannequin=document.getElementById("cbx7").checked;
    var mannequin_fee=0;
    var foto=document.getElementById("cbx8").checked;
    var foto_fee=0;
    total_fee=return_true(hand,hand_fee)+return_true(mannequin,mannequin_fee)+return_true(art,art_fee)+
    return_true(artathon,artathon_fee)+return_true(paint,paint_fee)+return_true(adv,adv_fee)+return_true(photo,photo_fee)+return_true(foto,foto_fee);
    writeUserData(username,hand,art,artathon,paint,adv,photo,mannequin,foto,total_fee);
}
function writeUserData(username,hand,art,artathon,paint,adv,photo,mannequin,foto,total_fee) {

        firebase.database().ref('pnp').child(username+"").set({
            username: username,
            HAND_PAINTING:hand,
            ART_IN_LINE:art,
            ART_A_THON:artathon,
            PAINT_WITHOUT_BRUSH:paint,
            ADV_MAKING_COMPETITION:adv,
            PHOTO_CONTEST:photo,
            FROZEN_MANNEQUIN_CHALLENGE:mannequin,
            FOTO_RECIT:foto,
            paid: 0,
            totalfee:total_fee
        });
        window.alert("Registered Successfully");
        window.location.href='../index.html';
}

function fetchData(username){
      var leadsRef = firebase.database().ref('pnp/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.HAND_PAINTING;
                  document.getElementById("cbx2").checked=child.ART_IN_LINE;
                  document.getElementById("cbx3").checked=child.ART_A_THON;
                  document.getElementById("cbx4").checked=child.PAINT_WITHOUT_BRUSH;
                  document.getElementById("cbx5").checked=child.ADV_MAKING_COMPETITION;
                  document.getElementById("cbx6").checked=child.PHOTO_CONTEST;
                  document.getElementById("cbx7").checked=child.FROZEN_MANNEQUIN_CHALLENGE;
                  document.getElementById("cbx8").checked=child.FOTO_RECIT;
                }
        });
}
function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

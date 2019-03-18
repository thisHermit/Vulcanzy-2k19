var messageRef=firebase.database().ref('music');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('music').addEventListener('submit',submitForm);
const scriptURL = 'https://script.google.com/macros/s/AKfycbxiUJ5SqN3pH7dseM0c4XcmMpudE8X0JNuJ7rgUDNYbV14lu4-6/exec'
  const form = document.forms['music-form']
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var talent=document.getElementById("cbx1").checked;
    var talent_fee=0;
    var lyrical=document.getElementById("cbx2").checked;
    var lyrical_fee=0;
    var guess=document.getElementById("cbx3").checked;
    var guess_fee=0;
    var insta=document.getElementById("cbx4").checked;
    var insta_fee=0;
    total_fee=return_true(talent,talent_fee)+return_true(lyrical,lyrical_fee)+return_true(guess,guess_fee)+return_true(insta,insta_fee);
    writeUserData(username,talent,lyrical,guess,insta,total_fee);
}
function writeUserData(username,talent,lyrical,guess,insta,total_fee) {

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    
    
        firebase.database().ref('music').child(username+"").set({
            username: username,
            VULCANZY_IDOL:talent,
            LYRICAL_MAESTRO:lyrical,
            GUESS_IT_WIN_IT:guess,
            SONG_SLAM:insta,
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
      var leadsRef = firebase.database().ref('music/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.VULCANZY_IDOL;
                  document.getElementById("cbx2").checked=child.LYRICAL_MAESTRO;
                  document.getElementById("cbx3").checked=child.GUESS_IT_WIN_IT;
                  document.getElementById("cbx4").checked=child.SONG_SLAM;
                }
        });
}

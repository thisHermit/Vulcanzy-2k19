var messageRef=firebase.database().ref('magazine');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('mgz').addEventListener('submit',submitForm);
var total_fee=0;
fetchData(uname);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var book=document.getElementById("cbx1").checked;
    var book_fee=0;
    var ill=document.getElementById("cbx2").checked;
    var ill_fee=0;
    total_fee=return_true(book,book_fee)+return_true(ill,ill_fee);
    writeUserData(username,book,ill,total_fee);
}
function writeUserData(username,book,ill,total_fee) {

        firebase.database().ref('magazine').child(username+"").set({
            username: username,
            BOOKFIE:book,
            ILLUSION:ill,
            paid: 0,
            totalfee:total_fee
        });
       window.alert("Registered Successfully");
       window.location.href='../../../index.html';
}
function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

function fetchData(username){
      var leadsRef = firebase.database().ref('magazine/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.BOOKFIE;
                  document.getElementById("cbx2").checked=child.ILLUSION;
                }
        });
}

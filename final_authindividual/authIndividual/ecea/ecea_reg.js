
var messageRef=firebase.database().ref('ece');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('ecea').addEventListener('submit',submitForm);

var total_fee=0;
fetchData(uname)
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var fore=document.getElementById("cbx1").checked;
    var fore_fee=0;
    var work=document.getElementById("cbx2").checked;
    var work_fee=0;
    var elect=document.getElementById("cbx3").checked;
    var elect_fee=0;
    var quiz=document.getElementById("cbx4").checked;
    var quiz_fee=0;
  	var caz=document.getElementById("cbx5").checked;
    var caz_fee=200;
    var maze=document.getElementById("cbx6").checked;
    var maze_fee=10;
    total_fee=return_true(fore,fore_fee)+return_true(elect,elect_fee)+return_true(work,work_fee)+return_true(maze,maze_fee)+return_true(quiz,quiz_fee)+return_true(caz,caz_fee);
    writeUserData(username,fore,elect,work,maze,quiz,caz,total_fee);
}
function writeUserData(username,fore,elect,work,maze,quiz,caz,total_fee) {

        firebase.database().ref('ece').child(username+"").set({
            username: username,
            FORESEE_THE_4C_S:fore,
            REAL_TIME_IMAGE_PROCESSING_WORKSHOP:work,
            ELECTRO_WIZARD:elect,
            QUIZ:quiz,
            CAZZLE:caz,
            MURKY_MAZE:maze,
            paid: 0,
            totalfee:total_fee
        });
        window.alert("Registered Successfully");
        window.location.href='.../index.html';
}

function return_true(flag,value)
{
            if(flag) return value;
            else return 0;
}

function fetchData(username){
      var leadsRef = firebase.database().ref('ece/'+username);
      var flag=true;
      leadsRef.on('value', function(snapshot) {
                var child = snapshot.val();
                if(child==null &&flag) {
                  flag=false;

                }
                else if(flag){
                  flag=false;
                  document.getElementById("cbx1").checked=child.FORESEE_THE_4C_S;
                  document.getElementById("cbx2").checked=child.REAL_TIME_IMAGE_PROCESSING_WORKSHOP;
                  document.getElementById("cbx3").checked=child.ELECTRO_WIZARD;
                  document.getElementById("cbx4").checked=child.QUIZ;
                  document.getElementById("cbx5").checked=child.CAZZLE;
                  document.getElementById("cbx6").checked=child.MURKY_MAZE;
                }
        });
}

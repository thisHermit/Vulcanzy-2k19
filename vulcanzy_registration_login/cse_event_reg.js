var messageRef=firebase.database().ref('cse');
//event listener for form submit
var usernames=[];
var passwords=[];
document.getElementById('cse').addEventListener('submit',submitForm);

function submitForm(e){

    e.preventDefault();
    var username=document.getElementById("username").value;
    var col=document.getElementById("cbx1").checked;
    var cod=document.getElementById("cbx2").checked;
    var cry=document.getElementById("cbx3").checked;
    var vir=document.getElementById("cbx4").checked;
    var wor=document.getElementById("cbx5").checked;
    console.log(username);
    console.log(col);
    console.log(cod);
    console.log(cry);
    console.log(vir);
    console.log(wor);
    writeUserData(username,cod,col,cry,vir,wor);

}

function writeUserData(username,cod,col,cry,vir,wor) {
  firebase.database().ref('cse').push({
    username: username,
    colloquium:col,
    code_sprint:cod,
    cryptoceon:cry,
    virtually_true:vir,
    workshop_on_cryptograpgy:wor
  });
  flag=true;
  //window.location.href = "register.html"
  window.alert("event registration successful")

}

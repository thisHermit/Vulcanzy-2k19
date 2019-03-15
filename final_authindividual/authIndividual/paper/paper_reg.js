var messageRef=firebase.database().ref('paper');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('paper').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var sel = document.getElementById('search_categories');
    var opt = sel.options[sel.selectedIndex];
    writeUserData(username,opt.value);
}

function writeUserData(username,topic) {
        firebase.database().ref('paper').child(username+"").set({
            username: username,
            TOPIC:topic,
            paid: 1,
        });
        window.alert("registered successfully");
        window.location.href='.../index.html';
}

var messageRef=firebase.database().ref('paper');
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('paper').addEventListener('submit',submitForm);
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRLM9whFMC9n53gb1kcWhmYKHwe6BLVzFpm2RnMOjD1aEMnEw1/exec'
  const form = document.forms['paper-form']
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var sel = document.getElementById('search_categories');
    var opt = sel.options[sel.selectedIndex];
    writeUserData(username,opt.value);
}

function writeUserData(username,topic) {
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    
        firebase.database().ref('paper').child(username+"").set({
            username: username,
            TOPIC:topic,
            paid: 1,
        });
        window.alert("registered successfully");
        window.location.href='../../../index.html';
}

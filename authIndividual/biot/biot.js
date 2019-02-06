 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB1KrqwO_DMDR827BMnwoEPmM1KAgAlrjs",
    authDomain: "vulcanzy-csea.firebaseapp.com",
    databaseURL: "https://vulcanzy-csea.firebaseio.com",
    projectId: "vulcanzy-csea",
    storageBucket: "",
    messagingSenderId: "358606426972"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('cseaSubmit').addEventListener('submit',submitForm);
//submit form 
function submitForm(e){

    e.preventDefault();
    
    //Get values

    var name=getInputVal('name');
    var email=getInputVal('Email');
    var mobile=getInputVal('mob');
    var College=getInputVal('colg');
    var gender=document.getElementsByName('gender');
    //save msg to firebase 
    console.log(123);
    saveMessage(name,email,mobile,College,gender);

    document.getElementById('cseaSubmit').reset();
}

function getInputVal(id)
{
    return document.getElementById(id).value;
}

//save msg to firebase

function saveMessage(name , email,mobile,College,gender)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         name: name,
         email:email,
         College: College,
         gender:gender,
         mobile:mobile
     });
}

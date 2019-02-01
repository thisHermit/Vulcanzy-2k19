 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBi5xP4efyjfweB_Hjyfw5IcXmvll0XIgQ",
    authDomain: "formfirebase-e0198.firebaseapp.com",
    databaseURL: "https://formfirebase-e0198.firebaseio.com",
    projectId: "formfirebase-e0198",
    storageBucket: "",
    messagingSenderId: "262581865979"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('test').addEventListener('submit',submitForm);
//submit form 
function submitForm(e){

    e.preventDefault();
    
    //Get values

    var name=getInputVal('name');
    var email=getInputVal('email');
    var College=getInputVal('College');
    var gender=getInputVal('gender');
    //save msg to firebase 
    console.log(123);
    saveMessage(name,email,gender,College);

    document.getElementById('test').reset();
}

function getInputVal(id)
{
    return document.getElementById(id).value;
}

//save msg to firebase

function saveMessage(name , email,gender,College)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         name: name,
         email:email,
         College: College,
         gender:gender
     });
}

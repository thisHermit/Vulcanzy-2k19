 // Initialize Firebase
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB1KrqwO_DMDR827BMnwoEPmM1KAgAlrjs",
    authDomain: "vulcanzy-csea.firebaseapp.com",
    databaseURL: "https://vulcanzy-csea.firebaseio.com",
    projectId: "vulcanzy-csea",
    storageBucket: "vulcanzy-csea.appspot.com",
    messagingSenderId: "358606426972"
  };
  firebase.initializeApp(config);
// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('csea').addEventListener('submit',submitForm);
//submit form 
function submitForm(e){

    e.preventDefault();
    
    //Get values

    var fname=getInputVal('firstname');
    var lname=getInputVal('lastname')
    var email=getInputVal('email');
    var mobile=getInputVal('mobile');
    var College=getInputVal('college');
    var gender=document.getElementById('male');
    var Gender="";
    var events=document.getElementsByClassName('checkbox');
    var str=events[2].value
    console.log(str);
    if (gender.checked)
    {
        Gender=document.getElementById('male').value;
    }
    else Gender=document.getElementById('female').value
    //save msg to firebase 
    console.log(123);
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,Gender,College);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('csea').reset();
    generatePDF(fname, email,mobile,Gender,College);

}

function getInputVal(id)
{
    return document.getElementById(id).value;
}
function generatePDF(name , email,mobile,gender,college)
{
    var doc = new jsPDF();
	
		doc.setFontSize(20);
		doc.setTextColor(92, 76, 76);
		doc.text(23,3,"----VULCANZY 2K19 REGISTRATION FORM---")
		doc.text(23, 81, "NAME :"+name);
        doc.text(23, 122, "EMAIL :"+email);
        doc.text(23, 162, "MOBILE :"+mobile);
		doc.text(23, 182, "GENDER :"+gender);
        doc.text(23, 222, "COLLEGE :"+college);
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile
     });
}

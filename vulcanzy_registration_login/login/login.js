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

//var messageRef=firebase.database().ref('messages');
//event listener for form submit
var username="d";
document.getElementById('csea').addEventListener('submit',submitForm);

function submitForm(e){

    e.preventDefault();
    
    username=getInputVal("uname");
    var pwd=getInputVal("pwd");
    localStorage.setItem("storageName",username);

    

}
function checkvalue(val)
{
    if(val==1) return "Yes";
    else return "No";
}
function getInputVal(id)
{
    return document.getElementById(id).value;
}
function generatePDF(name , email,mobile,gender,college,COLLOQ1,CRYPTO1,VIRTUE1,CODESP1,WS1)
{
    var doc = new jsPDF('portrait', 'mm', 'a4');
	
 
	
		doc.setFontSize(22);
		doc.setTextColor(92, 76, 76);
		doc.text(33,25,"VULCANZY 2K19 REGISTRATION FORM")
		doc.setFontSize(14);
	doc.text(21, 60, "Name : "+name);
        doc.text(21, 75, "E-Mail : "+email);
        doc.text(21, 90, "Mobile : "+mobile);
		doc.text(21, 105, "Gender : "+gender);
        doc.text(21, 120, "College : "+college);
        doc.setFontSize(18);
	doc.text(73,140, "EVENTS REGISTERED " );
        doc.setFontSize(14);
	doc.text(21,160, "COLLOQUIM : "+COLLOQ1 );
        doc.text(21,175, "CRYPTOTEON : "+CRYPTO1 );
        doc.text(21,190, "VIRTUALLY TRUE : "+VIRTUE1 );
        doc.text(21,205, "CODE SPRINT : "+CODESP1 );
	doc.text(21,220, "WORKSHOP ON CRYPTOGRAPHY : "+WS1 );
        doc.text(21, 280, "CAMPUS AMABASSADOR SIGNATURE :");
		
	doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,VIRTUE,CRYPTO,CODESP,COLLOQ,WS)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         CRYPTO: CRYPTO,
         CODESP: CODESP,
         COLLOQ: COLLOQ,
         VIRTUE:VIRTUE,
	  WS:WS
     });
}
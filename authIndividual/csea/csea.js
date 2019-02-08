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
    var str=events[2].value;
    console.log(str);
    if (gender.checked)
    {
        Gender=document.getElementById('male').value;
    }
    else Gender=document.getElementById('female').value
    //save msg to firebase 
    console.log(123);
    var VIRTUE=0,CRYPTO=0,CODESP=0,COLLOQ=0;
    for (i =0;i<4;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "COLLOQUIUM" : COLLOQ=1;
                                    break;
                case "CODE SPRINT" : CODESP=1;
                                    break;
                case "CRYPTOCEON" : CRYPTO=1;
                                    break;                                    
                case "VIRTUE" : VIRTUE=1;
                                    break;            }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,VIRTUE,CRYPTO,CODESP,COLLOQ);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('csea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(COLLOQ),checkvalue(CRYPTO),checkvalue(VIRTUE),checkvalue(CODESP));

}
function checkvalue(val)
{
    if(val==1) return "yes";
    else return "no";
}
function getInputVal(id)
{
    return document.getElementById(id).value;
}
function generatePDF(name , email,mobile,gender,college,COLLOQ,CRYPTO,VIRTUE,CODESP)
{
    var doc = new jsPDF();
	
		doc.setFontSize(20);
		doc.setTextColor(92, 76, 76);
		doc.text(23,6,"----VULCANZY 2K19 REGISTRATION FORM---")
		doc.text(23, 81, "NAME :"+name);
        doc.text(23, 102, "EMAIL :"+email);
        doc.text(23, 122, "MOBILE :"+mobile);
		doc.text(23, 142, "GENDER :"+gender);
        doc.text(23, 162, "COLLEGE :"+college);
        doc.text(23,174, "EVENTS REGISTERED " );
        doc.text(23,184, "COLLOQUIM :"+COLLOQ );
        doc.text(23,204, "CRYPTOTEON :"+CRYPTO );
        doc.text(23,224, "VIRTUALLY TRUE :"+VIRTUE );
        doc.text(23,244, "CODE SPRINT:"+CODESP );
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,VIRTUE,CRYPTO,CODESP,COLLOQ)
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
         VIRTRUE:VIRTUE
     });
}

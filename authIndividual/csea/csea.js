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
    var VIRTUE=0,CRYPTO=0,CODESP=0,COLLOQ=0,WS=0;
    for (i =0;i<5;i++)
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
                                    break;   
		    case "WORKSHOP ON CRYPTOGRAPHY" : WS=1;
			    break;
	    }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,VIRTUE,CRYPTO,CODESP,COLLOQ,WS);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('csea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(COLLOQ),checkvalue(CRYPTO),checkvalue(VIRTUE),checkvalue(CODESP),checkvalue(WS));

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

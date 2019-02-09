 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDxuVz7qEHHzUC1T874N2JdX8acoWBrvoc",
    authDomain: "vulcanzy-biot.firebaseapp.com",
    databaseURL: "https://vulcanzy-biot.firebaseio.com",
    projectId: "vulcanzy-biot",
    storageBucket: "vulcanzy-biot.appspot.com",
    messagingSenderId: "234316773527"
  };
  firebase.initializeApp(config);
// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('bea').addEventListener('submit',submitForm);
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
    var FOREN=0,LUMI=0,GARDEN=0;
    for (i =0;i<3;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "LUMIERE" : LUMI=1;
                                    break;
                case "FORENSICS" : FOREN=1;
                                    break;
                case "GARDEN" : GARDEN=1;
                                    break;                                    
                       }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,LUMI ,FOREN,GARDEN);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('bea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(LUMI),checkvalue(FOREN),checkvalue(GARDEN));

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
function generatePDF(name , email,mobile,gender,college,COLLOQ,CRYPTO,VIRTUE)
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
        doc.text(23,184, "LUMIERE :"+COLLOQ );
        doc.text(23,204, "FORENSICS :"+CRYPTO );
        doc.text(23,224, "GARDEN SCAVENGERS :"+VIRTUE );
       // doc.text(23,244, "CODE SPRINT:"+CODESP );
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,LUMI,FOREN,GARDEN)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         LUMI: LUMI,
         FOREN : FOREN,
         GARDEN : GARDEN
     });
}

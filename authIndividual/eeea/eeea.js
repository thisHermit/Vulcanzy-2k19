 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyA-_fhup6q8_9awUuH0v3JMl3qPeCDdOM4",
    authDomain: "vulcanzy-eeea.firebaseapp.com",
    databaseURL: "https://vulcanzy-eeea.firebaseio.com",
    projectId: "vulcanzy-eeea",
    storageBucket: "vulcanzy-eeea.appspot.com",
    messagingSenderId: "5116633842"
  };
  firebase.initializeApp(config);
// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('eeea').addEventListener('submit',submitForm);
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
    var CKTS=0,ARCHI=0,ORIGIN=0,AMALG=0,DECEPTION=0,EXPO=0,PAPER=0;
    for (i =0;i<7;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "CKTS" : CKTS=1;
                                    break;
                case "ARCHI" : ARCHI=1;
                                    break;
                case "ORIGIN" : ORIGIN=1;
                                    break;                                    
                case "AMALG" : AMALG=1;
                                    break;  
                case "DECEPTION" : DECEPTION=1;break;
                case "EXPO" : EXPO=1;break;
                case "PAPER" : PAPER=1;break;
                      }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,CKTS,ARCHI,ORIGIN,AMALG,DECEPTION,EXPO,PAPER);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('eeea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(CKTS),checkvalue(ARCHI),checkvalue(ORIGIN),checkvalue(AMALG),checkvalue(DECEPTION),checkvalue(EXPO),checkvalue(PAPER));

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
function generatePDF(fname,lname,email,mobile,gender,College,CKTS,ARCHI,ORIGIN,AMALG,DECEPTION,EXPO,PAPER)
{
    var doc = new jsPDF();
	
		doc.setFontSize(20);
		doc.setTextColor(92, 76, 76);
		doc.text(23,6,"----VULCANZY 2K19 REGISTRATION FORM---")
		doc.text(23, 81, "NAME :"+fname+" "+lname);
        doc.text(23, 102, "EMAIL :"+email);
        doc.text(23, 122, "MOBILE :"+mobile);
		doc.text(23, 142, "GENDER :"+gender);
        doc.text(23, 162, "COLLEGE :"+College);
        doc.text(23,174, "EVENTS REGISTERED " );
        doc.text(23,184, "ALL ABOUT CIRCUITS:"+CKTS);
        doc.text(23,204, "ARCHIPELAGO :"+ARCHI);
        doc.text(23,224, "BACK TO THE ORIGIN:"+ORIGIN );
        doc.text(23,244, "AMALGAMATE:"+AMALG );
        doc.text(23,264, "DECEPTION:"+DECEPTION );
        doc.text(23,274, "PROJECT EXPO:"+EXPO );
        doc.text(23,284,"PAPER PRESENTATION"+PAPER );
        
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(fname+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,CKTS,ARCHI,ORIGIN,AMALG,DECEPTION,EXPO,PAPER)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         CKTS:CKTS,
         ARCHI:ARCHI,
         ORIGIN:ORIGIN,
         AMALG:AMALG,
         DECEPTION:DECEPTION,
         EXPO:EXPO,
         PAPER:PAPER
     });
}

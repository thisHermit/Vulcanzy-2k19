 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBzDG8ZotPtzkmfjsrPPLRhvDQYspOJhNg",
    authDomain: "vulcanzy-mtlry.firebaseapp.com",
    databaseURL: "https://vulcanzy-mtlry.firebaseio.com",
    projectId: "vulcanzy-mtlry",
    storageBucket: "vulcanzy-mtlry.appspot.com",
    messagingSenderId: "1054959263981"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('mea').addEventListener('submit',submitForm);
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
    var ONET=0,RIDDLE=0,WAX=0,BEYOND=0;
    for (i =0;i<4;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "ONET" : ONET=1;
                                    break;
                case "RIDDLE" : RIDDLE=1;
                                    break;
                case "WAX" : WAX=1;
                                    break;                                    
                case "BEYOND" : BEYOND=1;
                                    break;            }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,ONET,RIDDLE,WAX,BEYOND);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('mea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(ONET),checkvalue(RIDDLE),checkvalue(WAX),checkvalue(BEYOND));

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
function generatePDF(fname,lname,email,mobile,gender,College,ONET,RIDDLE,WAX,BEYOND)
{
    var doc = new jsPDF();
	
		doc.setFontSize(20);
		doc.setTextColor(92, 76, 76);
		doc.text(23,6,"----VULCANZY 2K19 REGISTRATION FORM---")
		doc.text(23, 81, "NAME :"+fname+ " "+lname);
        doc.text(23, 102, "EMAIL :"+email);
        doc.text(23, 122, "MOBILE :"+mobile);
		doc.text(23, 142, "GENDER :"+gender);
        doc.text(23, 162, "COLLEGE :"+College);
        doc.text(23,174, "EVENTS REGISTERED " );
        doc.text(23,184, "ONE THRUST:"+ONET );
        doc.text(23,204, "RIDDLE HURDLES:"+RIDDLE );
        doc.text(23,224, "WAX MOCK-UP :"+WAX );
        doc.text(23,244, "WHAT'S BEYOND:"+BEYOND );
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,ONET,RIDDLE,WAX,BEYOND)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         ONET:ONET,
         RIDDLE:RIDDLE,
         WAX:WAX,
         BEYOND:BEYOND
     });
}

 // Initialize Firebase
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB4DNBXSMuqUO5Dsev7yEdvIvK0T7Kc4q0",
    authDomain: "panph-1613d.firebaseapp.com",
    databaseURL: "https://panph-1613d.firebaseio.com",
    projectId: "panph-1613d",
    storageBucket: "panph-1613d.appspot.com",
    messagingSenderId: "160729390119"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('pnp').addEventListener('submit',submitForm);
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
    var HAND=0,ART=0,ARTATHON=0,PAINT=0,ADV=0,PHOTO=0,MANNEQUIN=0;
    for (i =0;i<7;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "HAND" : HAND=1;
                                    break;
                case "ART" : ART=1;
                                    break;
                case "ARTATHON" : ARTATHON=1;
                                    break;                                    
                case "PAINT" : PAINT=1;
                                    break; 
                case "ADV" : ADV=1;break;           
                case "PHOTO" : PHOTO=1;
                                    break;            
                case "MANNEQUIN" : MANNEQUIN=1;
                                    break;            }}
        }
         
        
    
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,HAND,ART,ARTATHON,PAINT,ADV,PHOTO,MANNEQUIN);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('pnp').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(HAND),checkvalue(ART),checkvalue(ARTATHON),checkvalue(PAINT),checkvalue(ADV),checkvalue(PHOTO),checkvalue(MANNEQUIN));

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
function generatePDF(fname,lname,email,mobile,gender,College,HAND,ART,ARTATHON,PAINT,ADV,PHOTO,MANNEQUIN)
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
        doc.text(23,184, "HAND:"+ HAND );
        doc.text(23,204, "ART:"+ART );
        doc.text(23,224, "ARTATHON:"+ARTATHON );
        doc.text(23,244, "PAINT:"+PAINT);
        doc.text(23,244, "ADV:"+ADV);
        doc.text(23,244, "PHOTO:"+PHOTO);
        doc.text(23,244, "MANNEQUIN:"+MANNEQUIN);
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function  saveMessage(fname,lname,email,mobile,gender,College,HAND,ART,ARTATHON,PAINT,ADV,PHOTO,MANNEQUIN)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
        HAND:HAND,
        ART:ART,
        ARTATHON:ARTATHON,
        PAINT:PAINT,
        ADV:ADV,
        PHOTO:PHOTO,
        MANNEQUIN:MANNEQUIN
     });
}

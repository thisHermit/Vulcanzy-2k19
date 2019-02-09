 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCyerbWV3hngoDagH8EUcpTqhYOozDNtm8",
    authDomain: "vulcanzy-ecea.firebaseapp.com",
    databaseURL: "https://vulcanzy-ecea.firebaseio.com",
    projectId: "vulcanzy-ecea",
    storageBucket: "vulcanzy-ecea.appspot.com",
    messagingSenderId: "31986586610"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('ecea').addEventListener('submit',submitForm);
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
    var ELECTRO=0,PAPER=0,WORKSHOP=0,FORESEE=0;
    for (i =0;i<4;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "FORESEE" : FORESEE=1;
                                    break;
                case "ELECTRO" : ELECTRO=1;
                                    break;
                case "WORKSHOP" : WORKSHOP=1;
                                    break;                                    
                case "PAPER" : PAPER=1;
                                    break;  
                // case "ASKME" : ASKME=1;break;
                // case "VILLE" : VILLE=1;break;
                      }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,FORESEE,ELECTRO,WORKSHOP,PAPER);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('ecea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(FORESEE),checkvalue(ELECTRO),checkvalue(WORKSHOP),checkvalue(PAPER));

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
function generatePDF(fname,lname,email,mobile,gender,College,FORESEE,ELECTRO,WORKSHOP,PAPER)
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
        //doc.text(23,204, "CRACK THE STRUCTURE :"+CRACK );
        doc.text(23,204, "FORESEE:"+FORESEE );
        doc.text(23,224, "PAPER PRESENTATION:"+PAPER );
        doc.text(23,244, "WORKSHOP:"+WORKSHOP );
        doc.text(23,264, "ELECTRO WIZARD:"+ELECTRO );
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(fname+"Vulcanzy");

}
//save msg to firebase

function    saveMessage(fname,lname,email,mobile,gender,College,FORESEE,ELECTRO,WORKSHOP,PAPER)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         FORESEE:FORESEE,
         ELECTRO:ELECTRO,
         WORKSHOP:WORKSHOP,
         PAPER:PAPER
     });
}

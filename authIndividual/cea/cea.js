 // Intialize Firebase
 var config = {
    apiKey: "AIzaSyCddxpqUY5iqloI-oIyCASlvb4jGb0hlPA",
    authDomain: "vulcanzy-cea.firebaseapp.com",
    databaseURL: "https://vulcanzy-cea.firebaseio.com",
    projectId: "vulcanzy-cea",
    storageBucket: "vulcanzy-cea.appspot.com",
    messagingSenderId: "612529531428"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('cea').addEventListener('submit',submitForm);
//submit form 
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
    var CIVIL=0,CRACK=0,CONCRETE=0,PAPER=0,ASKME=0,VILLE=0;
    for (i =0;i<6;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "CIVIL" : CIVIL=1;
                                    break;
                case "CRACK" : CRACK=1;
                                    break;
                case "CON-CREATE" : CONCRETE=1;
                                    break;                                    
                case "PAPER" : PAPER=1;
                                    break;  
                case "ASKME" : ASKME=1;break;
                case "VILLE" : VILLE=1;break;
                      }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('cea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(CIVIL),checkvalue(CRACK),checkvalue(CONCRETE),checkvalue(PAPER),checkvalue(ASKME),checkvalue(VILLE));

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
function generatePDF(fname,lname,email,mobile,gender,College,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE)
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
        doc.text(23,184, "CIVILOPEDIA:"+CIVIL );
        doc.text(23,204, "CRACK THE STRUCTURE :"+CRACK );
        doc.text(23,224, "CON-CREATE:"+CONCRETE );
        doc.text(23,244, "PAPERESENTO:"+PAPER );
        doc.text(23,244, "ASK ME ANYTHING:"+ASKME );
        doc.text(23,244, "VILLE INTELLIGENTE:"+VILLE );
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(fname+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,CIVIL,CRACK,CONCRETE,PAPER,ASKME,VILLE)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         CIVIL:CIVIL,
         CRACK:CRACK,
         CONCRETE:CONCRETE,
         PAPER:PAPER,
         ASKME:ASKME,
         VILLE:VILLE
     });
}

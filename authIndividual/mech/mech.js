 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBPl0OUaMv2R2U-xnfzrN4Wf5_xEIf282I",
    authDomain: "vulcanzy-mecha.firebaseapp.com",
    databaseURL: "https://vulcanzy-mecha.firebaseio.com",
    projectId: "vulcanzy-mecha",
    storageBucket: "vulcanzy-mecha.appspot.com",
    messagingSenderId: "805039629919"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('mecea').addEventListener('submit',submitForm);
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
    var AMMC=0,GISS=0,MARC=0,ROBO=0,WORKSHOP=0;
    for (i =0;i<5;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "AMMC" : AMMC=1;
                                    break;
                case "GISS" : GISS=1;
                                    break;
                case "MARC" : MARC=1;
                                    break;                                    
                case "ROBO" : ROBO=1;
                                    break;  
                case "WORKSHOP" : WORKSHOP=1;break;
                // case "EXPO" : EXPO=1;break;
                // case "PAPER" : PAPER=1;break;
                      }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,AMMC,GISS,MARC,ROBO,WORKSHOP);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('mecea').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(AMMC),checkvalue(GISS),checkvalue(MARC),checkvalue(ROBO),checkvalue(WORKSHOP));

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
function generatePDF(fname,lname,email,mobile,gender,College,AMMC,GISS,MARC,ROBO,WORKSHOP)
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
        doc.text(23,184, "AMMC:"+AMMC);
        doc.text(23,204, "GISS:"+GISS);
        doc.text(23,224, "MARC:"+MARC );
        doc.text(23,244, "ROBO WAR:"+ROBO );
        doc.text(23,264, "WORKSHOP:"+WORKSHOP );
        // doc.text(23,274, "PROJECT EXPO:"+EXPO );
        // doc.text(23,284,"PAPER PRESENTATION"+PAPER );
        
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(fname+"Vulcanzy");

}
//save msg to firebase

function  saveMessage(fname,lname,email,mobile,gender,College,AMMC,GISS,MARC,ROBO,WORKSHOP)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         AMMC: AMMC,
         GISS:GISS,
         MARC:MARC,
         ROBO:ROBO,
         WORKSHOP:WORKSHOP
     });
}

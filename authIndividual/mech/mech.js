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
    if(val==1) return "Yes";
    else return "No";
}
function getInputVal(id)
{
    return document.getElementById(id).value;
}
function generatePDF(name,email,mobile,gender,College,AMMC,GISS,MARC,ROBO,WORKSHOP)
{
    var doc = new jsPDF('portrait', 'mm', 'a4');
	var img = new Image();
  //img.src = 'data:image/jpeg;base64,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';
	
		doc.setFontSize(22);
		doc.setTextColor(92, 76, 76);
		doc.text(33,25,"VULCANZY 2K19 REGISTRATION FORM")
		doc.setFontSize(14);
	doc.text(21, 60, "Name : "+name);
        doc.text(21, 75, "E-Mail : "+email);
        doc.text(21, 90, "Mobile : "+mobile);
		doc.text(21, 105, "Gender : "+gender);
        doc.text(21, 120, "College : "+College);
        doc.setFontSize(18);
	doc.text(73,140, "EVENTS REGISTERED " );
        doc.setFontSize(14);
        doc.text(21,160, "AMMC:"+AMMC);
        doc.text(21,175, "GISS:"+GISS);
        doc.text(21,190, "MARC:"+MARC );
        doc.text(21,205, "ROBO WAR:"+ROBO );
        doc.text(21,220, "WORKSHOP:"+WORKSHOP );
        // doc.text(23,274, "PROJECT EXPO:"+EXPO );
        // doc.text(23,284,"PAPER PRESENTATION"+PAPER );
        
        doc.text(21, 280, "CAMPUS AMABASSADOR SIGNATURE :");
	//doc.addImage(img, 'PNG',42,70, 126, 160);
		doc.save(name+"Vulcanzy");

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

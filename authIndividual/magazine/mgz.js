 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC78h-I2H5DqeYEQp0VX89AXexshpbY7PM",
    authDomain: "magazine-ed92b.firebaseapp.com",
    databaseURL: "https://magazine-ed92b.firebaseio.com",
    projectId: "magazine-ed92b",
    storageBucket: "magazine-ed92b.appspot.com",
    messagingSenderId: "245925502155"
  };
  firebase.initializeApp(config);
// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('magazine').addEventListener('submit',submitForm);
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
    var str=events[1].value;
    console.log(str);
    if (gender.checked)
    {
        Gender=document.getElementById('male').value;
    }
    else Gender=document.getElementById('female').value
    //save msg to firebase 
    console.log(123);
    var BOOKFIE=0,ILLUSION=0;
    for (i =0;i<2;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "BOOKFIE" : BOOKFIE=1;
                                    break;
                case "FORENSICS" : ILLUSION=1;
                                    break;                                    
                       }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,BOOKFIE,ILLUSION);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('magazine').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(BOOKFIE),checkvalue(ILLUSION));

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
function generatePDF(fname,lname,email,mobile,gender,College,BOOKFIE,ILLUSION)
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
        doc.text(23,184, "BOOKFIE :"+BOOKFIE );
        doc.text(23,204, "ILLUSION :"+ILLUSION );
        // doc.text(23,224, "GARDEN SCAVENGERS :"+VIRTUE );
       // doc.text(23,244, "CODE SPRINT:"+CODESP );
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function     saveMessage(fname,lname,email,mobile,gender,College,BOOKFIE,ILLUSION)

{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         BOOKFIE:BOOKFIE,
         ILLUSION:ILLUSION
     });
}

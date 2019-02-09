 // Initialize Firebase
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAJC98t1U395OXwtKd1JPbCSDHqAltGa6I",
    authDomain: "music-541fb.firebaseapp.com",
    databaseURL: "https://music-541fb.firebaseio.com",
    projectId: "music-541fb",
    storageBucket: "music-541fb.appspot.com",
    messagingSenderId: "707536780831"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('music').addEventListener('submit',submitForm);
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
    var TALENT=0,LYRICAL=0,GUESS=0,INSTA=0;
    for (i =0;i<4;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "TALENT" : TALENT=1;
                                    break;
                case "LYRICAL" : LYRICAL=1;
                                    break;
                case "GUESS" : GUESS=1;
                                    break;                                    
                case "INSTAGRAM" : INSTA=1;
                                    break;            }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,TALENT,LYRICAL,GUESS,INSTA);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('music').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(TALENT),checkvalue(LYRICAL),checkvalue(GUESS),checkvalue(INSTA));

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
function generatePDF(fname,lname,email,mobile,gender,College,TALENT,LYRICAL,GUESS,INSTA)
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
        doc.text(23,184, "TALENT:"+ TALENT );
        doc.text(23,204, "LYRICAL MAESTRO:"+LYRICAL );
        doc.text(23,224, "GUESS IT WIN IT:"+GUESS );
        doc.text(23,244, "INSTAGRAM VIDEOS:"+INSTA);
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function     saveMessage(fname,lname,email,mobile,gender,College,TALENT,LYRICAL,GUESS,INSTA)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         TALENT:TALENT,
         LYRICAL:LYRICAL,
         GUESS:GUESS,
         INSTA:INSTA
     });
}

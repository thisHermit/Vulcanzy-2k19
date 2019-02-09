 // Initialize Firebase
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBwDhK3tj2YL5cWM0Ld75trdZ8Ft7Krces",
    authDomain: "scnhum-8ce42.firebaseapp.com",
    databaseURL: "https://scnhum-8ce42.firebaseio.com",
    projectId: "scnhum-8ce42",
    storageBucket: "scnhum-8ce42.appspot.com",
    messagingSenderId: "847765315498"
  };
  firebase.initializeApp(config);
// referance message collection

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('snh').addEventListener('submit',submitForm);
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
    var BEST=0,LAZY=0,VAN=0,LANTERN=0,RUN=0;
    for (i =0;i<5;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "BEST" : BEST=1;
                                    break;
                case "LAZY" : LAZY=1;
                                    break;
                case "LANTERN" : LANTERN=1;
                                    break;                                    
                case "VAN" : VAN=1;
                                    break;
                case "RUN" : RUN=1;
                                    break;            }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,BEST,LAZY,LANTERN,VAN,RUN);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('snh').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(BEST),checkvalue(LAZY),checkvalue(LANTERN),checkvalue(VAN),checkvalue(RUN));

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
function generatePDF(fname,lname,email,mobile,gender,College,BEST,LAZY,LANTERN,VAN,RUN)
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
        doc.text(23,184, "BEST:"+ BEST );
        doc.text(23,204, "LAZY:"+LAZY );
        doc.text(23,224, "LANTERN:"+LANTERN );
        doc.text(23,244, "VAN:"+VAN);
        doc.text(23,244, "RUN:"+RUN);
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function         saveMessage(fname,lname,email,mobile,gender,College,BEST,LAZY,LANTERN,VAN,RUN)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         BEST:BEST,
         LAZY:LAZY,
         LANTERN:LANTERN,
         VAN:VAN,
         RUN:RUN
     });
}

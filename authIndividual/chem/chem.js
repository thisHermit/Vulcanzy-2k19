 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD712_13o8h2iWa6T9eD6GFzDwBTg97fX8",
    authDomain: "vulcanzy-chem.firebaseapp.com",
    databaseURL: "https://vulcanzy-chem.firebaseio.com",
    projectId: "vulcanzy-chem",
    storageBucket: "vulcanzy-chem.appspot.com",
    messagingSenderId: "906261838083"
  };
  firebase.initializeApp(config);
// referance message collection

 var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('csea').addEventListener('submit',submitForm);
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
    var VIRTUE=0,CRYPTO=0,CODESP=0,COLLOQ=0,WS=0;
    for (i =0;i<5;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "LECTURES" : LECT=1;
                                    break;
                case "ALCHEMY" : AC=1;
                                    break;
                case "EX QUIZITE" : EQ=1;
                                    break;                                    
                case "PHEONIX" : PH=1;
                                    break;   
		    case "BLAST DARTS" : BD=1;
			    break;
              case "QUICK G" : QG=1;
			    break;
	    }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,VIRTUE,CRYPTO,CODESP,COLLOQ,WS);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('chem').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(LECT),checkvalue(AC),checkvalue(EQ),checkvalue(PH),checkvalue(BD),checkvalue(QG));

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
function generatePDF(name , email,mobile,gender,college,LECT1,AC1,EQ1,PH1,BD1,QG1)
{
    var doc = new jsPDF('portrait', 'mm', 'a4');
	
 
	
		doc.setFontSize(22);
		doc.setTextColor(92, 76, 76);
		doc.text(33,25,"VULCANZY 2K19 REGISTRATION FORM")
		doc.setFontSize(14);
	doc.text(21, 60, "Name : "+name);
        doc.text(21, 75, "E-Mail : "+email);
        doc.text(21, 90, "Mobile : "+mobile);
		doc.text(21, 105, "Gender : "+gender);
        doc.text(21, 120, "College : "+college);
        doc.setFontSize(18);
	doc.text(73,140, "EVENTS REGISTERED " );
        doc.setFontSize(14);
	doc.text(21,160, "LECTURES : "+LECT1 );
        doc.text(21,175, "ALCHEMY : "+AC1 );
        doc.text(21,190, "EX QUIZITE : "+EQ1 );
        doc.text(21,205, "PHEONIX : "+PH1 );
	doc.text(21,220, "BLAST DARTS : "+BD1 );
 doc.text(21,235, "QUICK G : "+QG1 );
        doc.text(21, 280, "CAMPUS AMABASSADOR SIGNATURE :");
		
	doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,LECT,AC,EQ,PH,BD,QG)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
         LECT: LECT,
         AC: AC,
         EQ: EQ,
         PH:PH,
	  BD:BD,
      QG:QG
     });
}


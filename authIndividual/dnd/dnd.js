 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAZsMMQdfV_oteS-xwubqyyGd6sdQD52-0",
    authDomain: "dandr-b13c9.firebaseapp.com",
    databaseURL: "https://dandr-b13c9.firebaseio.com",
    projectId: "dandr-b13c9",
    storageBucket: "dandr-b13c9.appspot.com",
    messagingSenderId: "95620608165"
  };
  firebase.initializeApp(config);

var messageRef=firebase.database().ref('messages');
//event listener for form submit
document.getElementById('dnd').addEventListener('submit',submitForm);
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
    var MEME=0,BOOMERANG=0,TELL=0,SHORT=0,DANCECOMP=0,DRAMACOMP=0;
    for (i =0;i<6;i++)
    {
        if (events[i].checked)
        {
            switch(events[i].value)
            {
                case "MEME" : MEME=1;
                                    break;
                case "BOOMERANG" : BOOMERANG=1;
                                    break;                                    
               case "TELL" : TELL=1;
                                    break;                                   
               case "SHORT" : SHORT=1;
                                    break;                                    
               case "DANCECOMP" : DANCECOMP=1;
                                    break;                                    
             case "DRAMACOMP" : DRAMACOMP=1;
                                    break;                                    
                       }
        }
         
        
    }
    alert("Please keep the copy of downloaded form with you!!");

    saveMessage(fname,lname,email,mobile,gender,College,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP);
    if (gender.checked)
    {
        Gender='M';
    }
    else Gender='F';
    document.getElementById('dnd').reset();
    

    generatePDF(fname, email,mobile,Gender,College,checkvalue(MEME),checkvalue(BOOMERANG),checkvalue(TELL),checkvalue(SHORT),checkvalue(DANCECOMP),checkvalue(DRAMACOMP));

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
function generatePDF(fname,lname,email,mobile,gender,College,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP)
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
        doc.text(23,184, "MEME-FINITY WAR:"+MEME );
        doc.text(23,204, "BOOMERANG :"+BOOMERANG );
         doc.text(23,224, "TELL A TALE :"+TELL );
        doc.text(23,244, "SHORT FILM:"+SHORT );
        doc.text(23,244, "DANCE COMPETITION:"+DANCECOMP );
        doc.text(23,244, "DRAMA COMPETITION:"+DRAMACOMP );
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,lname,email,mobile,gender,College,MEME,BOOMERANG,TELL,SHORT,DANCECOMP,DRAMACOMP)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         lname: lname,
         email:email,
         College: College,
         gender:gender,
         mobile: mobile,
        MEME:MEME,
        BOOMERANG:BOOMERANG,
        TELL:TELL,
        SHORT:SHORT,
        DANCECOMP:DANCECOMP,
        DRAMACOMP:DRAMACOMP
     });
}

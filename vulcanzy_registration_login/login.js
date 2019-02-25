 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB3urwbUhycDY6jUTCiFloudGHBj7629M4",
    authDomain: "fir-auth-fb5c8.firebaseapp.com",
    databaseURL: "https://fir-auth-fb5c8.firebaseio.com",
    projectId: "fir-auth-fb5c8",
    storageBucket: "fir-auth-fb5c8.appspot.com",
    messagingSenderId: "143950457061"
  };
  firebase.initializeApp(config);
// referance message collection

//var messageRef=firebase.database().ref('messages');
//event listener for form submit
var username="";
document.getElementById('login').addEventListener('submit',submitForm);

function submitForm(e){

    e.preventDefault();
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pwd").value;
    username+="";
    password+="";
    //console.log("username:"+username+" password:"+password);
    var leadsRef = firebase.database().ref('register');
    var flag=false;
    leadsRef.on('value', function(snapshot) {
      var all=[];
      var all1=[];
          snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          var str=childData.username;
          var str1=childData.password;
        //   usernames.push(str+"");
        //   passwords.push(str1+"");
          all.push(str+"");
          all1.push(str1+"");
      });
    //   console.log(passwords);
      if(all.includes(username)&&all1.includes(password) && all.indexOf(username)==all1.indexOf(password)){
          //console.log("Exist already");
          localStorage.setItem("storageName",username);
          alert("Login Successful.. Click ok to go to Events page");
          window.location.href = "../events.html";
          }
     else if(!flag){
       window.alert("Please goto registration page");
       window.location.href = "../register.html";
    }
    
  });
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
// function generatePDF(name , email,mobile,gender,college,COLLOQ1,CRYPTO1,VIRTUE1,CODESP1,WS1)
// {
//     var doc = new jsPDF('portrait', 'mm', 'a4');
	
 
	
// 		doc.setFontSize(22);
// 		doc.setTextColor(92, 76, 76);
// 		doc.text(33,25,"VULCANZY 2K19 REGISTRATION FORM")
// 		doc.setFontSize(14);
// 	doc.text(21, 60, "Name : "+name);
//         doc.text(21, 75, "E-Mail : "+email);
//         doc.text(21, 90, "Mobile : "+mobile);
// 		doc.text(21, 105, "Gender : "+gender);
//         doc.text(21, 120, "College : "+college);
//         doc.setFontSize(18);
// 	doc.text(73,140, "EVENTS REGISTERED " );
//         doc.setFontSize(14);
// 	doc.text(21,160, "COLLOQUIM : "+COLLOQ1 );
//         doc.text(21,175, "CRYPTOTEON : "+CRYPTO1 );
//         doc.text(21,190, "VIRTUALLY TRUE : "+VIRTUE1 );
//         doc.text(21,205, "CODE SPRINT : "+CODESP1 );
// 	doc.text(21,220, "WORKSHOP ON CRYPTOGRAPHY : "+WS1 );
//         doc.text(21, 280, "CAMPUS AMABASSADOR SIGNATURE :");
		
// 	doc.save(name+"Vulcanzy");

// }
// //save msg to firebase

// function saveMessage(fname,lname,email,mobile,gender,College,VIRTUE,CRYPTO,CODESP,COLLOQ,WS)
// {
//      var newMessageRef=messageRef.push();
//      newMessageRef.set({
//          fname: fname,
//          lname: lname,
//          email:email,
//          College: College,
//          gender:gender,
//          mobile: mobile,
//          CRYPTO: CRYPTO,
//          CODESP: CODESP,
//          COLLOQ: COLLOQ,
//          VIRTUE:VIRTUE,
// 	  WS:WS
//      });
// }
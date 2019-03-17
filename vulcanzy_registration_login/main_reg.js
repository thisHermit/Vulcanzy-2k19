var config = {
    apiKey: "AIzaSyB3urwbUhycDY6jUTCiFloudGHBj7629M4",
    authDomain: "fir-auth-fb5c8.firebaseapp.com",
    databaseURL: "https://fir-auth-fb5c8.firebaseio.com",
    projectId: "fir-auth-fb5c8",
    storageBucket: "fir-auth-fb5c8.appspot.com",
    messagingSenderId: "143950457061"
  };
  firebase.initializeApp(config);
var messageRef=firebase.database().ref('register');
//event listener for form submit
var usernames=[];
var passwords=[];
document.getElementById('Main_reg').addEventListener('submit',submitForm);
//submit form
var flag=true;

const scriptURL = 'https://script.google.com/macros/s/AKfycbxGxzOljTxHXgdAFAaz1pkEIIQuyP12_oyppIz2WI-ND8xqRDI/exec'
  const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })

function submitForm(e){
	var fee=100;
	var paid=0;
    e.preventDefault();
    var name=document.getElementById("fullname").value;
    var username=document.getElementById("username").value;
   var pass1="000";
    var pass2="000";
    var email=document.getElementById("email").value;
    var phno=document.getElementById("phno").value;
    
	var colg=document.getElementById("search_categories").value;
	if (colg=="NIT Andhra Pradesh") {fee=0;paid=1;}
    var gender="M";
	if(document.getElementById("female").checked){
	gender="F";
	}
    if(pass1==pass2){
      username+="";
      var password=pass1;
      password+="";
      //console.log("username:"+username+" password:"+password);
      var leadsRef = firebase.database().ref('register');
      leadsRef.on('value', function(snapshot) {
        var all=[];
        var all1=[];
            snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var str=childData.username;
            var str1=childData.password;
            // usernames.push(str+"");
            // passwords.push(str1+"");
            all.push(str+"");
            all1.push(str1+"");
        });
    
      
        if(all.includes(username) && all1.includes(password) && (all1[all.indexOf(username)]+""==password) &&flag){
            flag=false;
            all=[]
            all1=[]
            window.alert("You have already Registered. Go to Login!");
            window.location.href = "../events.html";
        }
        else if(all.includes(username) &&flag){
          //flag=false;
          all=[]
          all1=[]
          window.alert("Username already taken!!");
        }
        else if(flag) {
          all=[]
          all1=[]
          flag=false;
		//console.log(123);
          writeUserData(name,username,"000",email,phno,colg,gender,fee,paid);
         
		window.location.href = "login.html";
        }
    });
  }
  else{
    window.alert("Passwords not matching!!");
  }
}

function writeUserData(name,username,pass1,email,phno,colg,gender,fee,paid) {
  
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
	
	//to firebase
	firebase.database().ref('register').child(username+"").set({
    clg_name: colg,
    email:email,
    gender: gender,
    name:name,
    paid:paid,
    password:pass1,
    phone_number:phno,
    username: username
  });
  flag=true;
  window.alert("User Successfully Registered!\nPlease Login to continue");
	generatePDF(name,username,email,phno,colg,gender,fee);

}
function generatePDF(name,username,email,phno,colg,gender,fee)
{
    var doc = new jsPDF('portrait', 'mm', 'a4');
	
 
	
		doc.setFontSize(22);
		doc.setTextColor(92, 76, 76);
		doc.text(33,25,"VULCANZY 2K19 REGISTRATION FORM")
    doc.setFontSize(14);
    doc.text(21, 40, "Username : "+username);
	doc.text(21, 60, "Name : "+name);
        doc.text(21, 75, "E-Mail : "+email);
        doc.text(21, 90, "Mobile : "+phno);
		doc.text(21, 105, "Gender : "+gender);
        doc.text(21, 120, "College : "+colg);
        doc.setFontSize(18);
	    doc.text(21,140,"Amount to be Paid : " + fee + "/-");
	
	doc.save(name+"Vulcanzy");

}

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
      if(all.includes(username)&&all1.includes(password) && (all1[all.indexOf(username)]+""==password)){
          //console.log("Exist already");
          sessionStorage.setItem("storageName",username);
          alert("Login Successful.. Click ok to go to Events page");
          window.location.href = "../events.html";
          }
     else if(!flag){
       window.alert("Looks like you are not registered!! \n\n Register now!!");
       window.location.href = "./main_registration.html";
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

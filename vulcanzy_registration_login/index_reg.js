var messageRef=firebase.database().ref('register');
//event listener for form submit
var usernames=[];
var passwords=[];
document.getElementById('csea').addEventListener('submit',submitForm);
//submit form
var flag=true;
function submitForm(e){

    e.preventDefault();
    var name=document.getElementById("fullname").value;
    var username=document.getElementById("uname").value;
    var pass1=document.getElementById("pwd").value;
    var pass2=document.getElementById("cpwd").value;
    var email=document.getElementById("email").value;
    var phno=document.getElementById("mobile").value;
    var clgname=document.getElementById("college").value;
    var gender="";

    if (document.getElementById('female').checked) {
      gender="female";
    }
    else{
      gender="male";
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
            usernames.push(str+"");
            passwords.push(str1+"");
            all.push(str+"");
            all1.push(str1+"");
        });
        //console.log(all);
        //console.log(all1);
        //console.log("("+all.includes(username)+")  ("+all1.includes(password) +")  ("+ all1[all.indexOf(username)]+")  ("+password+")  "+flag);
        if(all.includes(username) && all1.includes(password) && (all1[all.indexOf(username)]+""==password) &&flag){
            flag=false;
            all=[]
            all1=[]
            window.alert("you have already registered");
            window.location.href = "main.html";
        }
        else if(all.includes(username) &&flag){
          //flag=false;
          all=[]
          all1=[]
          window.alert("username must be unique.");
        }
        else if(flag) {
          all=[]
          all1=[]
          flag=false;
          writeUserData(name,username,password,email,phno,clgname,gender);
        }
    });
  }
  else{
    window.alert("both passwords should match");
  }
}

function writeUserData(name,username,password,email,phno,clgname,gender) {
  firebase.database().ref('register').push({
    name:name,
    username: username,
    password:password,
    email:email,
    phone_number:phno,
    clg_name:clgname,
    gender:gender,
    paid:0
  });
  flag=true;
  window.alert("user registration successful");
  window.location.href = "main_register.html";


}

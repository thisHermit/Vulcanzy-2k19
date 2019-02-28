var messageRef=firebase.database().ref('register');
//event listener for form submit
var usernames=[];
var passwords=[];
document.getElementById('loginForm').addEventListener('submit',submitForm);
//submit form
function submitForm(e){

    e.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    username+="";
    password+="";
    var leadsRef = firebase.database().ref('register');
    var flag=true;
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
      console.log(passwords);
      if(all.includes(username)&&all1.includes(password) && (all1[all.indexOf(username)]+""==password)){
          flag=false;
          window.location.href = "main.html";
      }
      else if(all.includes(username)&&flag){
        flag=false;
        window.alert("incorrect username or password..");
      }
     else if(flag){
       window.alert("Please goto registration page");
       window.location.href = "register.html";
    }
  });
}

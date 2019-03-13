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

    var username;//=sessionStorage.getItem("storageName")+"";
    username="asheesh@98"+"";
    var leadsRef = firebase.database().ref('register/'+username);
    var flag=true;
    leadsRef.on('value', function(snapshot) {
        var child=snapshot.val();
        var name=child.name.toUpperCase();

        var email=child.email;
        var statusReg=child.paid;
        var clgname=child.clg_name;
        var phno=child.phone_number;
        var username=child.username;
        document.getElementById("name").innerHTML=name;
        document.getElementById("username").innerHTML=username;
        document.getElementById("email").innerHTML=email;
        document.getElementById("phone").innerHTML=phno;
        document.getElementById("college").innerHTML=clgname;
        document.getElementById("regStatus").innerHTML=statusReg;

        console.log(child.name+"hi");
        createSpace();
        readEvents(username);
      });

function readEvents(username){

        var userRef=firebase.database().ref('cse/'+username);
        userRef.on('value',function(snapshot){
        console.log(123);
        if(snapshot.val()!=null)
        {
            console.log(1244);
            var child=snapshot.val();
            var ename={data:[
                {name:"CODE SPRINT",flag:child.code_sprint},
                {name :"CRYPTACTAEON",flag:child.cryptoceon},
                {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                {name: "PSYCH ARENA",flag:child.psycharena},
                {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}]};

                    }
            writeTable(ename,"CSE");
               });
        }
function createSpace()
{
    var br=document.createElement("br");
    for(var i =0;i<15;i++)
    {document.body.appendChild(br);}
    //document.write("<br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
}
// easter egg ? surprise! but this code should be fixed
function writeTable(ename,branch)
{
    var h = document.createElement("H1");
    h.innerHTML=branch;
    var target = document.getElementById("events");

        target.appendChild(h);

           var tble=document.createElement("TABLE");
           var row;
           var cell1;
           var cell2;

        for (var i = 0; i < ename.data.length; i++) {

               if(!ename.data[i].flag) continue;


               row = tble.insertRow(0);
               cell1 = row.insertCell(0);
               cell2 = row.insertCell(1);


               cell1.innerHTML = ename.data[i].name;
               cell2.innerHTML = ename.data[i].flag?"UNPAID":"PAID";
           }

           row = tble.insertRow(0);
           cell1 = row.insertCell(0);
           cell2 = row.insertCell(1);
           cell1.innerHTML = "Event name";
           tble.style.border="20px";
           cell1.style.padding="10px";
           cell2.style.padding="10px";
           cell2.innerHTML = "payment status";

           target.appendChild(tble);
}

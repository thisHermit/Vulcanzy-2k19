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
  var username=sessionStorage.getItem("storageName")+"";
  var leadsRef = firebase.database().ref('register/'+username);
  var flag=true;
  leadsRef.on('value', function(snapshot) {
      var child=snapshot.val();
      var name=child.name.toUpperCase();
      var email=child.email;
      var statusReg=child.paid;
      var reg="REGISTERED";
      if(statusReg==0)
        reg="PAYMENT PENDING";
      var clgname=child.clg_name;
      var phno=child.phone_number;
      var username=child.username;
      // document.getElementById("name").innerHTML=name;
      // document.getElementById("username").innerHTML=username;
      // document.getElementById("email").innerHTML=email;
      // document.getElementById("phone").innerHTML=phno;
      // document.getElementById("college").innerHTML=clgname;
      // document.getElementById("regStatus").innerHTML=reg;
      // console.log(child.name+"hi");
      userDetails(name,username,email,phno,clgname,reg);
      readEvents(username);
  });
function userDetails(name,uname,email,phno,clgname,reg){
      var name=document.createElement("H1");
      var username=document.createElement("H1");
      var em=document.createElement("H1");
      var phone=document.createElement("H1");
      var college=document.createElement("H1");
      var regStatus=document.createElement("H1");
      name.innerHTML=name;
      username.innerHTML=uname;
      em.innerHTML=email;
      phne.innerHTML=phno;
      college.innerHTML=clgname;
      regStatus.innerHTML=reg;
      document.body.appendChild(name);
      document.body.appendChild(username);
      document.body.appendChild(em);
      document.body.appendChild(phone);
      document.body.appendChild(college);
      document.body.appendChild(regStatus);
}

function readEvents(username){
        // for cse
        var userRef=firebase.database().ref('cse/'+username);
        userRef.on('value',function(snapshot){
          if(snapshot.val()!=null)
          {
              var child=snapshot.val();
              var ename={data:[{name:"CODE SPRINT",flag:child.code_sprint},
                                {name :"CRYPTACTAEON",flag:child.cryptoceon},
                                {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                                {name: "PSYCH ARENA",flag:child.psycharena},
                                {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}
                              ]
                         };
            }
            var paid=child.paid;
            writeTable(ename,"CSE",paid);
      });


      // for ece
      var userRef=firebase.database().ref('ece/'+username);
      userRef.on('value',function(snapshot){
        if(snapshot.val()!=null)
        {
            var child=snapshot.val();
            var ename={data:[{name:"CODE SPRINT",flag:child.code_sprint},
                              {name :"CRYPTACTAEON",flag:child.cryptoceon},
                              {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                              {name: "PSYCH ARENA",flag:child.psycharena},
                              {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}
                            ]
                       };
          }
          var paid=child.paid;
          writeTable(ename,"CSE",paid);
    });

    // for eee
    var userRef=firebase.database().ref('eee/'+username);
    userRef.on('value',function(snapshot){
      if(snapshot.val()!=null)
      {
          var child=snapshot.val();
          var ename={data:[{name:"CODE SPRINT",flag:child.code_sprint},
                            {name :"CRYPTACTAEON",flag:child.cryptoceon},
                            {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                            {name: "PSYCH ARENA",flag:child.psycharena},
                            {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}
                          ]
                     };
        }
        var paid=child.paid;
        writeTable(ename,"CSE",paid);
    });


    //for mech
    var userRef=firebase.database().ref('cse/'+username);
    userRef.on('value',function(snapshot){
      if(snapshot.val()!=null)
      {
          var child=snapshot.val();
          var ename={data:[{name:"CODE SPRINT",flag:child.code_sprint},
                            {name :"CRYPTACTAEON",flag:child.cryptoceon},
                            {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                            {name: "PSYCH ARENA",flag:child.psycharena},
                            {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}
                          ]
                     };
        }
        var paid=child.paid;
        writeTable(ename,"CSE",paid);
  });

    //for mme
    var userRef=firebase.database().ref('cse/'+username);
    userRef.on('value',function(snapshot){
      if(snapshot.val()!=null)
      {
          var child=snapshot.val();
          var ename={data:[{name:"CODE SPRINT",flag:child.code_sprint},
                            {name :"CRYPTACTAEON",flag:child.cryptoceon},
                            {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                            {name: "PSYCH ARENA",flag:child.psycharena},
                            {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}
                          ]
                     };
        }
        var paid=child.paid;
        writeTable(ename,"CSE",paid);
      });


      //for biotech
      var userRef=firebase.database().ref('cse/'+username);
      userRef.on('value',function(snapshot){
        if(snapshot.val()!=null)
        {
            var child=snapshot.val();
            var ename={data:[{name:"CODE SPRINT",flag:child.code_sprint},
                              {name :"CRYPTACTAEON",flag:child.cryptoceon},
                              {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                              {name: "PSYCH ARENA",flag:child.psycharena},
                              {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}
                            ]
                       };
          }
          var paid=child.paid;
          writeTable(ename,"CSE",paid);
        });

        //for civil
        var userRef=firebase.database().ref('cse/'+username);
        userRef.on('value',function(snapshot){
          if(snapshot.val()!=null)
          {
              var child=snapshot.val();
              var ename={data:[{name:"CODE SPRINT",flag:child.code_sprint},
                                {name :"CRYPTACTAEON",flag:child.cryptoceon},
                                {name :"VIRTUALLY TRUE",flag:child.virtually_true},
                                {name: "PSYCH ARENA",flag:child.psycharena},
                                {name: "WORKSHOP ON CRYPTACTEON",flag:child.workshop_on_cryptograpgy}
                              ]
                         };
            }
            var paid=child.paid;
            writeTable(ename,"CSE",paid);
          });

          


}

function writeTable(ename,branch,paid){
        var h = document.createElement("H4");
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
               cell2.innerHTML = paid?"PAYMENT STATUS PENDING":"PAID";
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

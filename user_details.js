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
    //username="asheesh@98"+"";
    var leadsRef = firebase.database().ref('register/'+username);
    var flag=true;
    leadsRef.on('value', function(snapshot) {
        var child=snapshot.val();
        var name=child.name.toUpperCase();

        var email=child.email;
        var statusReg=child.paid;
        var reg="REGISTERED";
        if(statusReg==0) reg="PAYMENT PENDING";
        var clgname=child.clg_name;
        var phno=child.phone_number;
        var username=child.username;
        document.getElementById("name").innerHTML=name;
        document.getElementById("username").innerHTML=username;
        document.getElementById("email").innerHTML=email;
        document.getElementById("phone").innerHTML=phno;
        document.getElementById("college").innerHTML=clgname;
        document.getElementById("regStatus").innerHTML=reg;

        console.log(child.name+"hi");
        createSpace();
        readCSE(username);
        readECE(username);
        readEEE(username);
        readCIV(username);
        readBEA(username);
        readMECH(username);
        readCHEM(username);
        readMME(username);
      });


function createSpace()
{
    var br=document.createElement("br");
    for(var i =0;i<15;i++)
    {document.body.appendChild(br);}
    //document.write("<br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
}
// easter egg ? surprise! but this code should be cleaned
function writeTable(ename,branch,paid)
{
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

               console.log(i);
               row = tble.insertRow(0);
               cell1 = row.insertCell(0);
               cell2 = row.insertCell(1);


               cell1.innerHTML = ename.data[i].name;
               cell2.innerHTML = !paid?"PAYMENT STATUS PENDING":"PAID";
           }

           row = tble.insertRow(0);
           cell1 = row.insertCell(0);
           cell2 = row.insertCell(1);
           cell1.innerHTML = "Event Name";
           tble.style.border="20px";
           tble.classList.add('table-hover');
           tble.classList.add('table');
           tble.classList.add('table-dark');
           cell1.style.padding="10px";
           cell2.style.padding="10px";
           cell2.innerHTML = "Payment Status";

           target.appendChild(tble);
}
function readCSE(username){

    var userRef=firebase.database().ref('cse/'+username);
    userRef.on('value',function(snapshot){
    console.log(123);
    if(snapshot.val()!=null)
    {
        console.log(1244);
        var child=snapshot.val();
        var ename={data:[
            {name:"CODE SPRINT",flag:child.CODE_SPRINT},
            {name :"CRYPTACTAEON",flag:child.CRYPTACTAEON   },
            {name :"VIRTUALLY TRUE",flag:child.VIRTUALLY_TRUE},
            {name: "PSYCH ARENA",flag:child.PSYCH_ARENA},
            {name: "WORKSHOP ON CRYPTACTEON",flag:child.WORKSHOP_ON_CRYPTOGRAPHY},
        
            {name: "ANDROID INNOVATOR",flag:child.ANDROID_INNOVATOR}]};

                }
        var paid=child.paid;
        console.log(child.code_sprint);
        writeTable(ename,"CSE",paid);
       
           });
 }
function readECE(username){

    var userRef=firebase.database().ref('ece/'+username);
    userRef.on('value',function(snapshot){
    console.log(123);
    if(snapshot.val()!=null)
    {
        console.log(1244);
        var child=snapshot.val();
        var ename={data:[
            {name:"FORESEE- THE 4C's",flag:child.FORESEE_THE_4C_S},
            {name :"REAL TIME IMAGE PROCESSING WORKSHOP",flag:child.REAL_TIME_IMAGE_PROCESSING_WORKSHOP },
            {name :"ELECTRO WIZARD",flag:child.ELECTRO_WIZARD},
            {name: "QUIZ",flag:child.QUIZ},
            {name: "CAZZLE",flag:child.CAZZLE},
        
            {name: "MURKY MAZE",flag:child.MURKY_MAZE}]};

                }
        var paid=child.paid;
        console.log(child.code_sprint);
        writeTable(ename,"ECE",paid);
       
           });
    }
function readEEE(username){

        var userRef=firebase.database().ref('eee/'+username);
        userRef.on('value',function(snapshot){
        console.log(123);
        if(snapshot.val()!=null)
        {
            console.log(1244);
            var child=snapshot.val();
            var ename={data:[
                {name:"ALL ABOUT CIRCUITS",flag:child.ALL_ABOUT_CIRCUITS},
                    {name :"ARCHIPELAGO",flag:child.ARCHIPELAGO   },
                    {name :"BACK TO THE ORIGIN",flag:child.BACK_TO_THE_ORIGIN},
                    {name: "AMALGAMATE",flag:child.AMALGAMATE},
                    {name: "DECEPTION",flag:child.DECEPTION},
                
                    {name: "PROJECT EXPO",flag:child.PROJECT_EXPO}]};
    
                    }
            var paid=child.paid;
            console.log(child.code_sprint);
            writeTable(ename,"EEE",paid);
           
               });
        }
function readCIV(username){

            var userRef=firebase.database().ref('civil/'+username);
            userRef.on('value',function(snapshot){
            console.log(123);
            if(snapshot.val()!=null)
            {
                console.log(1244);
                var child=snapshot.val();
                var ename={data:[
                    {name:"LA 'TECQUILA",flag:child.LA_TECQUILA},
                    {name :"FLOATCRETE",flag:child.FLOATCRETE   },
                    {name :"EPSIDA",flag:child.EPSIDA},
                    {name: "CRACK THE STRUCTURE",flag:child.CRACK_THE_STRUCTURE},
                    {name: "POPTICLES",flag:child.POPTICLES}
                                            ]};
        
                        }
                var paid=child.paid;
                console.log(child.code_sprint);
                writeTable(ename,"CIVIL",paid);
               
                   });
            }
function readBEA(username){

                var userRef=firebase.database().ref('biotech/'+username);
                userRef.on('value',function(snapshot){
                console.log(123);
                if(snapshot.val()!=null)
                {
                    console.log(1244);
                    var child=snapshot.val();
                    var ename={data:[
                        {name:"FORENSICS",flag:child.FORENSICS},
                        {name :"LUMIERE",flag:child.LUMIERE   },
                        {name :"GARDEN SCAVENGERS",flag:child.GARDEN_SCAVENGERS}
                        ]};
            
                            }
                    var paid=child.paid;
                    console.log(child.code_sprint);
                    writeTable(ename,"BIO-TECH",paid);
                   
                       });
                }
function readCHEM(username){

                    var userRef=firebase.database().ref('chem/'+username);
                    userRef.on('value',function(snapshot){
                    console.log(123);
                    if(snapshot.val()!=null)
                    {
                        console.log(1244);
                        var child=snapshot.val();
                        var ename={data:[
                            {name:"LECTURES",flag:child.LECTURES},
                            {name :"EXQUIZITE",flag:child.EXQUIZITE},
                            {name: "CHEM PHEONIX",flag:child.CHEM_PHEONIX},
                            {name: "BLAST DARTS",flag:child.BLAST_DARTS},
                        
                            {name: "QUICKG",flag:child.QUICKG}]};
                
                                }
                        var paid=child.paid;
                        console.log(child.code_sprint);
                        writeTable(ename,"CHEM",paid);
                       
                           });
                    }
function readMECH(username){

                        var userRef=firebase.database().ref('mech/'+username);
                        userRef.on('value',function(snapshot){
                        console.log(123);
                        if(snapshot.val()!=null)
                        {
                            console.log(1244);
                            var child=snapshot.val();
                            var ename={data:[
                                {name:"AMMC(Aircraft Modelling and Maneuvering Challange)",flag:child.AMMC_Aircraft_Modelling_and_Maneuvering_Challange_},
                                {name :"GISS(Godavari Innovation for Society Summit)",flag:child.GISS_Godavari_Innovation_for_Society_Summit_   },
                                {name :"MARC(Mechanism and Robotics Championship)",flag:child.MARC_Mechanism_and_Robotics_Championship_},
                                {name: "ROBO-WAR",flag:child.ROBO_WAR},
                                {name: "WHAT'S BEYOND",flag:child.WHAT_S_BEYOND}]};
                    
                                    }
                            var paid=child.paid;
                            console.log(child.code_sprint);
                            writeTable(ename,"MECH",paid);
                           
                               });
                        }
function readMME(username){

          var userRef=firebase.database().ref('mme/'+username);
                      userRef.on('value',function(snapshot){
                            console.log(123);
                            if(snapshot.val()!=null)
                            {
                                console.log(1244);
                                var child=snapshot.val();
                                var ename={data:[
                                    {name:"ONE THRUST",flag:child.ONE_THRUST},
                                    {name :"RIDDLE HURDLES",flag:child.RIDDLE_HURDLES  },
                                    {name :"WAX MOCK-UP",flag:child.WAX_MOCK_UP},
                                    {name: "WHAT'S BEYOND",flag:child.WHAT_S_BEYOND}
                                    ]};
                        
                                        }
                                var paid=child.paid;
                                console.log(child.code_sprint);
                                writeTable(ename,"MME",paid);
                               
                                   });
                            }                        

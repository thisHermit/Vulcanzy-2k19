document.getElementById('regLog').addEventListener('click',submitButton);

function submitButton(e)
{
    var username=sessionStorage.getItem("storageName");
    console.log(username);
    if (username==null||username=="") window.location.href ="./vulcanzy_registration_login/login.html";
    else if (username!="") window.location.href = "./events.html";
}

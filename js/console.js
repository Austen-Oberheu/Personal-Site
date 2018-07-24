var retroStyle = false;

function ScreenButton() {
    var button = document.getElementById("switch");
    var body = document.getElementById("body");
    var screen = document.getElementById("console-screen");
    if (button.checked === true)
    {
        body.classList.remove('crt');
        screen.classList.remove('crt');
    }
    else {
        var body = document.getElementById("body");
        var console = document.getElementById("console-screen");
        
        body.classList.add('crt');
        screen.classList.add('crt');
    }
}

function changeCSS(cssLinkIndex) {
    cssFile = null;
    var oldlink = document.getElementsByTagName("link").item(1);

    if (retroStyle === false){
        cssFile = "../css/retro-style.css";
        retroStyle = true;
    }
    else{
        cssFile = "../css/style.css";
        retroStyle = false;
    }
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

var message_send = document.getElementById("message-send");
message_send.style.display = "none";

function POST_Form() {

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;



    $.post("http://austenoberheu.com/html_form_send.php", {first_name: firstName, 
    last_name: lastName, email: email, phone: phone,
    message: message})
     .always(function(){
         var contactForm = document.getElementsByClassName("contact-form")[0];
         contactForm.style.display = "none";
         message_send.style.display = "block";
     })
}
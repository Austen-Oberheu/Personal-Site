var textLength = 0;
var text = '';
var textCounter = 0;
var textList = ['login', 'AustenOberheu', '********'];
var consoleText = document.getElementsByClassName('console-text');
var consoleLine = document.getElementsByClassName('console-line');
var cursors = document.getElementsByClassName('cursor');
var skip = false;

//Hide console lines
for (var i = 0; i < consoleLine.length; i++) {
    consoleLine[i].style.display = "none";
    cursors[i].style.display = "none";
}

//Hide all other content
document.getElementById("website").style.display = "none";

consoleLine[0].style.display = "inline";
cursors[0].style.display = "inline";

$(document).ready(function () {

    // setInterval(cursor, 600);
    
    // function ConsoleLoop() {
    //    setTimeout(function () {
    //        consoleLogin: {
    //         if(skip === true)
    //         {
    //             clearTimeout(pageSwitch);
    //             SwitchToMainPage();
    //             break consoleLogin;
    //         }
    //         text = textList[textCounter];
    //         if (textList[textCounter] !== undefined)
    //         {
    //             setTimeout(typing, 1000);
    //         }
    //         setTimeout('textCounter++', 2000);
    //         if (textCounter < consoleText.length) {
    //             consoleLine[textCounter].style.display = "inline";
    //             cursors[textCounter].style.display = "inline";
    //             if (textCounter < consoleText.length - 1) {
    //                 ConsoleLoop();
    //             }
    //         }
    //     }}, 2000) 
    // }

    // ConsoleLoop();
    // var pageSwitch = setTimeout(SwitchToMainPage, 10000);

    SwitchToMainPage();
})

function SwitchToMainPage() {
    document.getElementsByClassName("console")[0].style.display = "none";

    document.getElementById("website").style.display = "inline";
}

function typing() {
    tempConsoleText = document.getElementsByClassName('console-text')[textCounter];
    currentConsoleText = $(tempConsoleText);
    currentConsoleText.html(textList[textCounter].substr(0, textLength++));
    if (textLength < textList[textCounter].length + 1) {
        setTimeout(typing, 50);
    } else {
        textLength = 0;
        cursors[textCounter].style.display = "none";
        //text = '';
    }

}


function cursor() {
    currentCursor = document.getElementsByClassName('cursor')[textCounter];
    $(currentCursor).animate({
        opacity: 0
    }, 'fast', 'linear').animate({
        opacity: 1
    }, 'fast', 'linear');
}

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
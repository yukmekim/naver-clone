/*window.onload = function() {
    let btn = document.querySelector('.auto-complete-btn');

    btn.addEventListener('click', function() {

        if(btn.ariaPressed = "false") {
            
            btn.ariaPressed = true;

            document.getElementById('a').style.backgroundPositionX = "-108px";
        } else {
            btn.ariaPressed = false;

            document.getElementById('a').style.backgroundPositionX = "-96px";
        }
    })
} */

function atcpBtn() {
    console.log('눌렸다!');

    let btn = document.querySelector('.auto-complete-btn');
    let atfr = document.querySelector('.autoFrame');

    if( btn.ariaPressed == "false") {  /*$('.autoFrame').css('display') == "none"*/
        
        btn.ariaPressed = true;

        atfr.style.display = "block";

        document.getElementById('a').style.backgroundPositionX = "-108px";
    } else {
        btn.ariaPressed = false;

        atfr.style.display = "none";

        document.getElementById('a').style.backgroundPositionX = "-96px";
    }
}

let prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPos < 150) {
        document.getElementById("navbar").style.top = "10px";
        document.getElementById("nav-section").style.top = "-10%";
        document.getElementById('switcher-mode').style.top = "-10vh";
    } else {
        document.getElementById("navbar").style.top = "-150px";
        document.getElementById('switcher-mode').style.top = "-100vh";
    }
    if (currentScrollPos < 300) {
        document.getElementById("nav-section").style.top = "-10%";
    } else {
        document.getElementById("nav-section").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}
let switcher_mode = 1;
document.getElementById('switcher-mode').onclick = function (){
    document.getElementById('switcher-mode').style.top = "0vh";
    setTimeout(function (){
        document.getElementById('switcher-mode').style.top = "-10vh";
    }, 100)
    document.body.className = 'during-change-mode'
    setTimeout(function (){
        switch (switcher_mode){
            case 0:
                document.body.className = 'light-mode'
                switcher_mode = 1;
                break;
            case 1:
                document.body.className = 'dark-mode'
                switcher_mode = 0;
        }
    }, 300)
}
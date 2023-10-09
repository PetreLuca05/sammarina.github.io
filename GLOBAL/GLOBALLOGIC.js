var phoneNav = document.querySelector('.p-nav');
var menuAct = 0;
menuBtnToggle()

function menuBtnToggle(){

    if(menuAct == 0){
        menuAct = 1;
        phoneNav.classList.toggle('nav-phone-deactive', true);
    }
    else{
        menuAct = 0;
        phoneNav.classList.toggle('nav-phone-deactive', false);
    }
}

window.addEventListener('scroll', function(){
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('stickyNav', window.scrollY);

    var bg = document.querySelector('.unu');
    bg.classList.toggle('stickyUnu', window.scrollY);
})

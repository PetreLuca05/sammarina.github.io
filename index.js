
function ViewModeButton(name){
    let btn = document.getElementsByClassName(name)[0];

    if(btn.id == 'selected')
        return;

    document.getElementsByClassName('bt1')[0].setAttribute('id', '');
    document.getElementsByClassName('bt2')[0].setAttribute('id', '');
    document.getElementsByClassName('bt3')[0].setAttribute('id', '');

    if(btn.id == ""){
        btn.setAttribute('id', 'selected');
    }
}


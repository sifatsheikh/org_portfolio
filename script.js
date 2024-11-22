const sideMenu = document.querySelector('#sideMenu')

function openMenu(){
    sideMenu.style.transform = 'translatex(-16rem)';
}
function colseMenu(){
    sideMenu.style.transform = 'translate(16rem)';
}
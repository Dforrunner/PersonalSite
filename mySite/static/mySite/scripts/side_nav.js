function collapse() {
    const nav = document.querySelector('#navBar');
    const colBars = document.querySelector('#collapseBars');
    const w = window.innerWidth;
    nav.style.marginLeft = '-85px';
    colBars.style.display = 'inline';
    nav.style.transitionDuration = "1s";
}


function unCollapse() {
    const nav = document.querySelector('#navBar');
    const colBars = document.querySelector('#collapseBars');
    const w = window.innerWidth;
    click=1;
    nav.style.marginLeft = '0';
    colBars.style.display = 'none';
    nav.style.transitionDuration = "1s";

}
function responsiveNav(){
    const nav = document.querySelector('#navBar');
    const colBars = document.querySelector('#collapseBars');
    const w = window.innerWidth;
    if(w < 768){
        nav.style.marginLeft = '-85px';
        colBars.style.display = 'inline';
        nav.style.transitionDuration = "1s";
    }else{
        nav.style.marginLeft = '0';
        colBars.style.display = 'none';
        nav.style.transitionDuration = "1s";
    }
}

window.addEventListener('resize', responsiveNav, false);
window.addEventListener('load', responsiveNav, false);


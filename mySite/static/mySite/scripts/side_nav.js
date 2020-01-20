function S(select) {
    return document.querySelector(select)
}
function SA(select) {
    return document.querySelectorAll(select)
}

window.addEventListener('DOMContentLoaded',()=>{
    const elements = ['#dismiss', '.overlay'];
    // When dismiss or the overlay is clicked
    elements.forEach(e => S(e).addEventListener('click', ()=>{
        // hide overlay and sidebar
        S('#sidebar').classList.remove('active');
        S('.overlay').classList.remove('active');
        S('#dismiss').classList.remove('active');
        S('#collapseBars').classList.remove('hide');
    }));
    S('#collapseBars').addEventListener('click', () => {
         // show sidebar and overlay
         S('#dismiss').classList.add('active');
         S('#sidebar').classList.add('active');
         S('.overlay').classList.add('active');
         S('#collapseBars').classList.add('hide');
    });
});

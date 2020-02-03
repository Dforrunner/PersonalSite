function S(select) {
    return document.querySelector(select)
}
function SA(select) {
    return document.querySelectorAll(select)
}

window.addEventListener('DOMContentLoaded',()=>{
    // When dismiss or the overlay is clicked
    S('.overlay').addEventListener('click', ()=>{
        // hide overlay and sidebar
        S('#sidebar').classList.remove('active');
        S('.overlay').classList.remove('active');
        S('#collapseBars').classList.remove('hidden');
    });
    S('#collapseBars').addEventListener('click', () => {
         // show sidebar and overlay
         S('#sidebar').classList.add('active');
         S('.overlay').classList.add('active');
         S('#collapseBars').classList.add('hidden');
    });
});

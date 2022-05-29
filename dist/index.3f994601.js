//Show the Nav Modal
document.querySelector('.nav-head-menu').addEventListener('click', function() {
    document.querySelector('.header-head').classList.add('open');
});
function closeModal() {
    document.querySelector('.header-head').classList.remove('open');
    document.querySelector('.header-head').classList.add('close');
    setTimeout(()=>{
        document.querySelector('.header-head').classList.remove('close');
    }, 750);
}
document.querySelector('.nav-menu-close').addEventListener('click', function() {
    closeModal();
});

//# sourceMappingURL=index.3f994601.js.map

const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuElems = document.querySelectorAll('.active-menu');

    const actionMenu = () => {
        menu.classList.toggle('active-menu');
    };
    
    menu.addEventListener('click', (event)=>{
        let target = event.target;
        if(target.classList.contains('close-btn')){
            menu.classList.remove('active-menu');
        } else {
            target = target.closest('a');
            if(target){
                menu.classList.remove('active-menu');
            }
        }
    });
    
    btnMenu.addEventListener('click', actionMenu);
};

export default toggleMenu;
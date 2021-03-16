const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');
let count = 0;

let popupDown = () => {
    count++;
    if(count < 60 && screen.width > 768){
        popupContent.style.top = count + 'px';
        setTimeout(popupDown);
    }
};
let popupUp = () => {
    count--;
    if(count > 0){
        popupContent.style.top = count + 'px';
        setTimeout(popupUp);
    }
};  

popup.addEventListener('click', (event)=>{
    let target = event.target;

    if(target.classList.contains('popup-close')){
        popup.style.display = 'none';
        popupUp();
    } else{
        target = target.closest('.popup-content');
        if(!target){
            popup.style.display = 'none';
        }
    }
});
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            popupDown();
        });
    });
};

export default togglePopup;
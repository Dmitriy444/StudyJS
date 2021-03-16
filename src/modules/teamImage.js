const teamImage = () => {
    let command = document.querySelector('.command');

    command.addEventListener('mouseover', (event) => {
        let target = event.target;
        const photoOne = event.target.src;

        if(target.closest('.command__photo')){
            event.target.src = event.target.dataset.img;
            event.target.dataset.img = photoOne;
        }
    });
    command.addEventListener('mouseout', (event) => {
        let target = event.target;
        const photoTwo = event.target.src;

        if(target.closest('.command__photo')){
            event.target.src = event.target.dataset.img;
            event.target.dataset.img = photoTwo;
        }
    });
};

export default teamImage;
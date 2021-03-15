window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    // Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

            function getTimeRemaining(){
                let dateStop = new Date(deadline).getTime(),
                    dateNow = new Date().getTime(),
                    timeRemaining = (dateStop - dateNow) / 1000,
                    seconds = Math.floor(timeRemaining % 60),
                    minutes = Math.floor((timeRemaining / 60) % 60),
                    hours = Math.floor(timeRemaining / 60 / 60);
                    return {timeRemaining, hours, minutes, seconds};
            }
            function updateClock(){
                let timer = getTimeRemaining();

                if(timer.timeRemaining > 0){
                    timerHours.textContent = timer.hours;
                    timerMinutes.textContent = timer.minutes;
                    timerSeconds.textContent = timer.seconds;
                } else if (timer.timeRemaining <= 0){
                    clearInterval(idInterval);
                    timerHours.textContent = 0;
                    timerMinutes.textContent = 0;
                    timerSeconds.textContent = 0;
                }

                if (timerHours.textContent < 10){
                    timerHours.textContent = '0' + timerHours.textContent;
                }
                if (timerMinutes.textContent < 10){
                    timerMinutes.textContent = '0' + timerMinutes.textContent;
                }
                if (timerSeconds.textContent < 10){
                    timerSeconds.textContent = '0' + timerSeconds.textContent;
                }
            }
            updateClock();
            let idInterval = setInterval(updateClock, 1000);       
    }
    
    countTimer('16 march 2021');

    // Menu
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

    toggleMenu();

    // Popup
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
    togglePopup();

    // Tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
            
        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else{
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;

            target = target.closest('.service-header-tab');
            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

    // Slider
    const slider = () =>{
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;

        const dotsPlus = () => {
            
            for(let i = 0; i < slide.length; i++){ 
            const pDots = document.createElement('li');
                pDots.classList.add('dot');
                portfolioDots.append(pDots);
                }
            };
            dotsPlus();
            const dot = document.querySelectorAll('.dot');
            dot[0].classList.add('dot-active');

        const prevSlide = (elem, index, strClass) => {
                elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if(target.matches('#arrow-right')){
                currentSlide++;
            } else if(target.matches('#arrow-left')){
                currentSlide--;
            } else if(target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        });
        startSlide(1500);
    };
    slider();
    
    // Team
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
    teamImage();
    
    // Calculator
    const calculate = (price = 100) => {
        const square = document.querySelector('.calc-square'),
            premises = document.querySelector('.calc-count'),
            workDays = document.querySelector('.calc-day'),
            calcType = document.querySelector('.calc-type'),
            calcCount = document.querySelector('.calc-count'),
            calcBlock = document.querySelector('.calc-block'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +square.value;

                if(calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }
                
                if(workDays.value && workDays.value < 5){
                    dayValue *= 2;
                } else if (workDays.value && workDays.value < 10) {
                    dayValue *= 1.5;
                }

                if(typeValue && squareValue){
                    total = price * typeValue * squareValue * countValue * dayValue;
                } 

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });

        calcBlock.addEventListener('input', (event) => {
            let target = event.target;
            
            if(target === square){
                target.value = square.value.replace(/\D/g, '');
            } else if(target === premises){
                premises.value = premises.value.replace(/\D/g, '');
            } else if(target === workDays){
                workDays.value = workDays.value.replace(/\D/g, '');
            }
        });
    }
    calculate(100);

    // Connect
    const connect = () => {
        let forms = document.querySelector('body');
       

        forms.addEventListener('input', (event) => {
            let target = event.target;

            if(target.matches('input[name = "user_phone"]')){
                target.value = target.value.replace(/[^+0-9 ]$/, '');

            } else if(target.matches('input[name = "user_message"]')){
                target.value = target.value.replace(/[^?!:;",.а-яА-ЯёЁ0-9\s]+$/, '');

            } else if(target.matches('input[name = "user_name"]')){
                target.value = target.value.replace(/[^а-яА-ЯёЁ0-9 ]/, '');
                
            }  else if(target.matches('input[name = "user_email"]')){
                target.value = target.value.replace(/[^A-Za-z0-9/!~.*@'-_]/, '');
            }
             
        }, true);

        forms.addEventListener('blur', (event) => {
            let target = event.target;

            if (target.matches('input[name = "user_name"]')){
               target.value = target.value.replace(/ +/g, ' ').trim();
                    target.value = target.value.replace(/([А-ЯЁ])/g, x => x.toLowerCase());
                    target.value = target.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, x => x.toUpperCase());

            } else if (target.matches('input[name = "user_phone"]')){
                target.value = target.value.match(/\+?[78]([-()]*\d){10}/g);

            } 
            else if (target.matches('input[name = "user_email"]')){
                target.value = target.value.match(/\w+\-?\w+@\w+\.\w{2,3}/g);
            }
        }, true);
    };
    connect();

    // send-ajax-form 
    const sendForm = () => {
        const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
           successMessage = 'Спасибо! Мы скоро с вами свяжемся.'; 
        
        const form = document.querySelector('body');
        const statusMessage = document.createElement('div');
        let formMessage = document.getElementById('form2-message');
        statusMessage.style.cssText = `font-size: 2rem;
        color: white;`

        form.addEventListener('submit', (event) => {
            let target = event.target;
            if(target.matches('form1')) {
                formName = target.querySelector('input[name = "user_name"]');
                formEmail1 = target.querySelector('input[name = "user_email"]');
                formPhone1 = target.querySelector('input[name = "user_phone"]');
            } else if(target.matches('form3')) {
                formName = target.querySelector('input[name = "user_name"]');
                formEmail3 = target.querySelector('input[name = "user_email"]');
                formPhone3 = target.querySelector('input[name = "user_phone"]');
            } else if(target.matches('form2')) {
                formName = target.querySelector('input[name = "user_name"]');
                formEmail2 = target.querySelector('input[name = "user_email"]');
                formPhone2 = target.querySelector('input[name = "user_phone"]');
                formMessage2 = target.querySelector('input[name = "user_message"]');
            }
            
            event.preventDefault();
            target.append(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(target);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                    .then((response) => {
                        if(response.status !== 200){
                            throw new Error('Status network not 200.');
                        }
                        statusMessage.textContent = successMessage;
                    })
                    .catch ((error) => {
                        statusMessage.textContent = errorMessage;
                        console.error(error)
                    });

            target.querySelector('input[name = "user_name"]').value = '';
            target.querySelector('input[name = "user_email"]').value = '';
            target.querySelector('input[name = "user_phone"]').value = '';
            if(formMessage.value !== ''){
                target.querySelector('input[name = "user_message"]').value = '';
            }
        });

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        }; 
    };  
    sendForm();

});

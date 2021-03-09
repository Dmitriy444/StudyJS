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
    
    countTimer('10 march 2021');

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
        const photo = document.querySelectorAll('.command__photo'),
            firstPhoto = document.querySelectorAll('.command__photo.src');
        //photo.forEach((photo, event) => {
        //    const photoOne = event.target.src;
        //    photo[i].addEventListener('mouseenter', (event) => {
        //        event.target.src = event.target.dataset.img;
        //    })
        //});
        console.log(firstPhoto);
        for (let i = 0; i < photo.length; i++){
            
            photo[i].addEventListener('mouseenter', (event) => {
                const photoOne = event.target.src;
                event.target.src = event.target.dataset.img;
                //event.target.dataset.img = event.target.src;
                photo[i].addEventListener('mouseleave', (event) => {
                    event.target.dataset.img = photoOne;
                });
            });  
            
        }
       
    };
    teamImage();
    
    // Calculator
    const calculate = () => {
        const square = document.querySelector('.calc-square'),
            premises = document.querySelector('.calc-count'),
            workDays = document.querySelector('.calc-day');

            // Делегирование

        square.addEventListener('input', () => {
            square.value = square.value.replace(/\D/g, '');
        });
        premises.addEventListener('input', () => {
            premises.value = premises.value.replace(/\D/g, '');
        });
        workDays.addEventListener('input', () => {
            workDays.value = workDays.value.replace(/\D/g, '');
        });
    }
    calculate();

    // Connect
    const connect = () => {
        const userName = document.querySelector('.form2-name'),
            userDataForms = document.querySelector('.footer-form'),
            userFooterEmail = document.querySelector('.form-email'),
            userFooterPhone = document.querySelector('.form-phone'),
            footerForms = document.querySelector('.connect'),

            footerForm = document.querySelector('.footer-form'),
            userMessage = document.querySelector('.mess');
       /*
       const inputName = (elem) => {
            elem.value = elem.value.replace(/[^а-яА-ЯёЁ\- ]/g, '');
       }
        const footerInputs = () => {
            footerForms.addEventListener('input', (event) => {
                let target = event.target;

                if(target.tagName === 'FORM2-NAME'){
                    inputName();
                }
            });
        };
        */
        const userMessageInput = () => {
            //userMessage.addEventListener('input', () => {
                userMessage.value = userMessage.value.replace(/[^а-яА-ЯёЁ\- ]/, '');
            //});
        };

        const userFooterEmailInput = () =>{
            userFooterEmail.value = userFooterEmail.value.replace(/[^a-zA-Z0-9_\-\.\!\~\*\'\@]/g, '');
            userFooterEmail.onblur = function(){
                let abv = userFooterEmail.value.match(/\w+\-?\w+@\w+\.\w{2,3}/, '')
                console.log(abv);
            }
        };

        const userFooterPhoneInput = () => {
            userFooterPhone.value = userFooterPhone.value.replace(/[^0-9-\(\)]/g, ''); 
            userFooterPhone.onblur = function() {
            let bv = userFooterPhone.value.match(/\+?[78]\-?(\d){3,10}\-?(\d){2,4}\-?(\d){2}/, '')
                console.log(bv);
            }
        };
        
        const userNameInput = () => {
            userName.value = userName.value.replace(/[^а-яА-ЯёЁ\- ]/, '');
            //userName.onblur = function() {
            //    let yt = userName.value.match(/[\d]/g);
            //    console.log(yt);
            //}
        };

        footerForm.addEventListener('input', () => {
            //console.log(event.target);
        });

        footerForm.addEventListener('input', (event) => {
            //console.log(event.target);

            if(event.target.classList.contains('mess')){
                userMessageInput();
                console.log(event.target);
            } else if(event.target.classList.contains('form-email')){
                userFooterEmailInput();
            } else if (event.target.classList.contains('form-phone')){
                userFooterPhoneInput();
                console.log(event.target);
            } else if(event.target.classList.contains('form2-name')){
                userNameInput();
            }
        });
        
        //userName.addEventListener('input', () => {
        //    userName.value = userName.value.replace(/[^а-яА-ЯёЁ\- ]/g, '' (match)=> match.toUpperCase());
            /*
            userName.onblur = function(){
                let ff = userName.value.match()
            }
            */
        //});
        

        
        //footerInputs();
    };
    connect();
});

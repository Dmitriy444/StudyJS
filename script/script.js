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
        
        const form = document.getElementById('form1'),
            formName1 = document.getElementById('form1-name'),
            formEmail1 = document.getElementById('form1-email'),
            formPhone1 = document.getElementById('form1-phone');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.append(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error)
            });
            formName1.value = '';
            formEmail1.value = '';
            formPhone1.value = '';
        });

        const postData = (body) => {

            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
    
                    if(request.readyState !== 4) {
                        return;
                    } 
                    if(request.status === 200) {
                        statusMessage.textContent = successMessage;
                        resolve();
                    } else {
                        statusMessage.textContent = errorMessage;
                        reject(request.status);
                    }
                });
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
    
                request.send(JSON.stringify(body));
            });
        }; 
        const promise = postData();
        promise.then()
            .catch(error => console.error(error));

    };  
    sendForm();

    // send ajax form3 Popup
    const sendFormPopup = () => {
        const loadMessage3 = 'Отправка данных.',
            successMessage3 = 'Данные отправлены! Мы скоро с Вами свяжемся.',
            errorMessage3 = 'Что то пошло не так';
        const form3 = document.getElementById('form3'),
            formName3 = document.getElementById('form3-name'),
            formPhone3 = document.getElementById('form3-phone'),
            formEmail3 = document.getElementById('form3-email');
        const statusMessage3 = document.createElement('div');
        statusMessage3.style.cssText = 'color: white';
        
        form3.addEventListener('submit', (event) => {
            event.preventDefault();
            form3.append(statusMessage3);
            statusMessage3.textContent = loadMessage3;
            const form3Data = new FormData(form3);
            let body3 = {};
            form3Data.forEach((value, key) => {
                body3[key] = value;
            });
            post3Data(body3, () => {
                statusMessage3.textContent = successMessage3;
            }, (error) => {
                statusMessage3.textContent = errorMessage3;
                console.error(error)
            });
            formName3.value = '';
            formPhone3.value = '';
            formEmail3.value = '';
        });
        
        const post3Data = (body3) => {

            return new Promise((resolve, reject) => {
                const request3 = new XMLHttpRequest();
                request3.addEventListener('readystatechange', () => {
                    if(request3.readyState !== 4) {
                        return;
                    }
                    if(request3.status === 200) {
                        statusMessage3.textContent = successMessage3;
                        resolve();
                    } else {
                        statusMessage3.textContent = errorMessage3;
                        reject(request3.status);
                    }
                });
                request3.open('POST', './server.php');
                request3.setRequestHeader('Content-Type', 'application/json');
                request3.send(JSON.stringify(body3));
            });
        };
        const promise3 = post3Data();
        promise3.then()
            .catch(error => console.error(error));
    };
    sendFormPopup();


    // send-ajax-form2  Contact
    const sendFormContact = () => {
        const loadMessage2 = 'Ждём ответа...',
            errorMessage2 = 'Не работает',
            successMessage2 = 'Отлично!';

        const form2 = document.getElementById('form2'),
            formName = document.getElementById('form2-name'),
            formEmail = document.getElementById('form2-email'),
            formPhone = document.getElementById('form2-phone'),
            formMessage = document.getElementById('form2-message');
        const statusMessage2 = document.createElement('div');
        statusMessage2.style.cssText  = 'font-size: 2rem';

        form2.addEventListener('submit', (event) => {
            event.preventDefault();
            form2.append(statusMessage2);
            statusMessage2.textContent = loadMessage2;

            const formData2 = new FormData(form2);
            let body2 = {};
            formData2.forEach((val, key) => {
                body2[key] = val;
            });
            postData2(body2, () => {
                statusMessage2.textContent = successMessage2;
            }, (error) => {
                statusMessage2.textContent = errorMessage2;
                console.error(error)
            });
            formName.value = '';
            formEmail.value = '';
            formPhone.value = '';
            formMessage.value = '';
        });

    const postData2 = (body) => {

        return new Promise((resolve, reject) => {
            const request2 = new XMLHttpRequest();
            request2.addEventListener('readystatechange', ()=>{
                if(request2.readyState !== 4) {
                    return;
                }
                if(request2.status === 200) {
                    statusMessage2.textContent = successMessage2;
                    resolve();
                } else {
                    statusMessage2.textContent = errorMessage2;
                    reject(request2.status);
                }
            });
            request2.open('POST', './server.php');
            request2.setRequestHeader('Content-Type', 'application/json');
            request2.send(JSON.stringify(body));
        });

    };
    const promise2 = postData2();
    promise2.then()
        .catch(error => console.error(error));
    };

    sendFormContact();
});

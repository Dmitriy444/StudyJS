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
                    // Переделать
                    clearInterval(idInterval);
                    timerHours.textContent = 0;
                    timerMinutes.textContent = 0;
                    timerSeconds.textContent = 0;
                }
                console.log(updateClock);

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
            let idInterval = setInterval(updateClock, 1000);        
    }
    
    countTimer('2 march 2021');

    // Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = document.querySelectorAll('ul>li');
            let count = 0;
            let flyInterval;
            let animate = false;

        const actionMenu = () => {
            
            let menuLeft = function(){
                flyInterval = requestAnimationFrame(menuLeft);
                count++;
                if(count < 96){
                    menu.style.left = count * 10 + 'px';
                } else{
                    cancelAnimationFrame(flyInterval);
                }
                console.log(count);
            };  
            /*
            let menuLeft = function(){
                count++;
                menu.style.left = count * 95 + 'px';
                if(count < 10 && screen.width > 768){
                    setTimeout(menuLeft, 20);
                } 
            };
            */
            /*
            let menuRight = function(){
                count--;
                menu.style.left = count + 'px';
                if(count > 0 && screen.width > 768){
                    setTimeout(menuRight);
                }
            };
            */
           btnMenu.addEventListener('click', function(){
            if(!menu.style.transform || menu.style.transform === `translate(-100%)` &&  menu.style.left === `0` || !animate){
                menu.style.transform = `translate(0)`;
                flyInterval = requestAnimationFrame(menuLeft);
                animate = true;
            } else{
                animate = false;
                menu.style.left = 0 + 'px';
                menu.style.transform = `translate(-100%)`;
                cancelAnimationFrame(flyInterval);

                //flyInterval = requestAnimationFrame(flyAnimate);
                //count = 0 + 'px';
                //menu.style.left = 0 + 'px';
                //menuRight();
            }  
           });
           
            closeBtn.addEventListener('click', function(){
                if(!menu.style.transform || menu.style.transform === `translate(-100%)` &&  menu.style.left === `0` || !animate){
                    menu.style.transform = `translate(0)`;
                    flyInterval = requestAnimationFrame(menuLeft);
                    animate = true;
                } else{
                    animate = false;
                    menu.style.left = 0 + 'px';
                    menu.style.transform = `translate(-100%)`;
                    cancelAnimationFrame(flyInterval);

                    //flyInterval = requestAnimationFrame(flyAnimate);
                }
            });
            menuItems.forEach((elem) => elem.addEventListener('click', function(){
                if(!menu.style.transform || menu.style.transform === `translate(-100%)` &&  menu.style.left === `0` || !animate){
                    menu.style.transform = `translate(0)`;
                    flyInterval = requestAnimationFrame(menuLeft);
                    animate = true;
                } else{
                    animate = false;
                    menu.style.left = 0 + 'px';
                    menu.style.transform = `translate(-100%)`;
                    cancelAnimationFrame(flyInterval);
                    
                    //flyInterval = requestAnimationFrame(flyAnimate);
                }
            }));
            
        };
        actionMenu();

        //console.log(menu.getBoundingClientRect());
        //btnMenu.addEventListener('click', actionMenu);
        //closeBtn.addEventListener('click', actionMenu);

        //menuItems.forEach((elem) => elem.addEventListener('click', actionMenu));
        
    };

    toggleMenu();

    // Popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopup();
});
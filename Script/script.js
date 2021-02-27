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
    
    countTimer('28 february 2021');
});
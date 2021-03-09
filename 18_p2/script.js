window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    function countTimer(deadline){
        let hello = document.querySelector('#hi'),
            today = document.querySelector('.today'),
            time = document.querySelector('.time'),
            newYear = document.querySelector('.new-year');

            function getTimeRemaining(){
                let dateStop = new Date(deadline).getTime(),
                    dateNow = new Date().getTime(),
                    timeRemaining = (dateStop - dateNow) / 1000,
                    seconds = Math.floor(timeRemaining % 60),
                    minutes = Math.floor((timeRemaining / 60) % 60),
                    hours = Math.floor(timeRemaining / 60 / 60),
                    day = Math.floor(timeRemaining / 60 / 60 / 24);
                    return {timeRemaining, day, hours, minutes, seconds};
            }
            function untilNewYear(){
                let timer = getTimeRemaining();

                if(timer.timeRemaining > 0){
                    newYear.textContent = 'До нового года осталось ' + timer.day + ' дней.';
                } else if (timer.timeRemaining <= 0){
                }
            } 
            untilNewYear();
            function welcome(){
                let date = new Date();
                let hr = new Date().getHours();
                let dayNumber = date.getDay();
                let dayList = ['Воскресенье' ,'Понедельинк' ,'Вторник' ,'Среда' ,'Четверг' ,'Пятница' ,'Суббота'];

                if(hr >= 0 && hr <= 5){
                    hello.textContent = 'Доброй ночи';
                } else if(hr > 5 && hr <= 10){
                    hello.textContent = 'Доброе утро';
                } else if(hr > 10 && hr <= 18){
                    hello.textContent = 'Добрый день';
                } else if(hr > 18 && hr <= 23){
                    hello.textContent = 'Добрый вечер';
                }
                today.textContent = 'Сегодня: ' + dayList[dayNumber] + '.';
                time.textContent = 'Текущее время ' + date.toLocaleTimeString('en');
            }
            welcome();        
    }
    countTimer('1 january 2022');
});
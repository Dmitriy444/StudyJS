'use strict';

const collections = document.querySelectorAll('.books'),
    elems = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    titleBook = document.querySelectorAll('a'),
    advertisement = document.querySelector('.adv'),
    chapters = document.querySelectorAll('li'),
    newChapter = chapters[26].cloneNode(true);
    
    collections[0].prepend(elems[2]);
    collections[0].prepend(elems[5]);
    collections[0].prepend(elems[3]);
    collections[0].prepend(elems[4]);
    collections[0].prepend(elems[0]);
    collections[0].prepend(elems[1]);
    
    body.setAttribute('style', 'background-image:url(./image/you-dont-know-js.jpg)');
    titleBook[4].innerHTML = 'Книга 3. this и Прототипы Объектов';
    advertisement.remove();
    //Книга 2
    chapters[0].after(chapters[1]);
    chapters[1].after(chapters[3]);
    chapters[3].after(chapters[6]);
    chapters[6].after(chapters[8]);
    chapters[8].after(chapters[4]);
    chapters[4].after(chapters[5]);
    chapters[5].after(chapters[7]);
    chapters[7].after(chapters[9]);
    chapters[9].after(chapters[2]);
    chapters[2].after(chapters[10]);
    //Книга 5
    chapters[46].after(chapters[47]);
    chapters[47].after(chapters[55]);
    chapters[55].after(chapters[49]);
    chapters[49].after(chapters[50]);
    chapters[50].after(chapters[48]);
    chapters[48].after(chapters[52]);
    chapters[52].after(chapters[53]);
    chapters[53].after(chapters[51]);
    chapters[51].after(chapters[54]);
    chapters[54].after(chapters[56]);
    //Книга 6
    chapters[25].after(newChapter);
    newChapter.textContent = ('Глава 8: За пределами ES6');


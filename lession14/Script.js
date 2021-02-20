'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.newMethod = function(){
    //prompt('enter');
    if(this.selector[0] === '.'){
        document.body.insertAdjacentHTML('beforeend', '<div class="block">'  + this.selector.slice(1) + '</div>');
    } else if(this.selector[0] === '#'){
        document.body.insertAdjacentHTML('beforeend', '<p id="idd">' + this.selector.slice(1) + '</p>');
    }
};
let elementDiv = new DomElement('.block', '60px', '300px', '#C0C0C0', '20px');
console.log(this.elementDiv);
elementDiv.newMethod();
//elementDiv.createElement('div');
document.querySelector('.block').style.height = this.height + 'px'; width =  this.width + 'px'; background-color = this.bg; font-size = this.fontSize + 'px';
/*
elem.style.cssText = `height: elementDiv.height;
width: elementDiv.width;
background-color: elementDiv.bg;
font-size: elementDiv.fontSize;
`;/*
elem.style.cssText = `height: elementDiv.height; width: elementDiv.width; background-color: elementDiv.bg; font-size: elementDiv.fontSize;`;
*/

let elementId = new DomElement('#idd', '50px', '250px', '#BC8F8F', '25px');
console.log(elementId);
elementId.newMethod();

document.querySelector('#idd').style.height = elementId.height;
document.querySelector('#idd').style.width = elementId.width;
document.querySelector('#idd').style.background = elementId.bg;
document.querySelector('#idd').style.fontSize = elementId.fontSize;




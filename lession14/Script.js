'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    
    //let elementDiv = new DomElement('.new-field', '60px', '300px', '#C0C0C0', '25px');
    //let newField = document.querySelector('.new-field');
    //document.querySelector('.new-field').style.cssText = `height: this.height;
    //width: this.width;
    //background-color: this.bg;
    //font-size: this.fontSize;
    //`; 
}
 //let elementDiv = new DomElement('.block', '60px', '300px', '#C0C0C0', '20px');
    //document.querySelector('.block').style.cssText = `height: elementDiv.height;
    //width: elementDiv.width;
    //background-color: elementDiv.bg;
    //font-size: elementDiv.fontSize;
    //`;

 let elementDiv = new DomElement('.new-field', '60px', '300px', '#C0C0C0', '25px');
    document.querySelector('.new-field').style.height = elementDiv.height;
    document.querySelector('.new-field').style.width = elementDiv.width;
    document.querySelector('.new-field').style.background = elementDiv.bg;
    document.querySelector('.new-field').style.fontSize = elementDiv.fontSize;

 let elementId = new DomElement('#idd', '50px', '250px', '#f07a7a', '25px');
    console.log(elementId);
    //elementId.newMethod();
    document.querySelector('#idd').style.height = elementId.height;
    document.querySelector('#idd').style.width = elementId.width;
    document.querySelector('#idd').style.background = elementId.bg;
    document.querySelector('#idd').style.fontSize = elementId.fontSize;

 DomElement.prototype.newMethod = function(){
    this.selector = prompt('enter');
    if(this.selector[0] === '.'){
        document.querySelector('.new-field').insertAdjacentHTML('afterbegin', '<div class="block">'  + this.selector.slice(1) + '</div>');
    } else if(this.selector[0] === '#'){
        document.querySelector('p').insertAdjacentHTML('afterbegin', '<p id="idd">' + this.selector.slice(1) + '</p>');
    } else {
        return this.newMethod();
    }

};
DomElement.prototype.newMethod();


//console.log(car1);

//let elementDiv = new DomElement('.block', '60px', '300px', '#C0C0C0', '20px');
//сonsole.log(elementDiv);
//elementDiv.newMethod();












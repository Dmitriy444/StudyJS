'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    DomElement.prototype.newMethod = function(fb){
        if(this.selector.slice(0, 1) === '.'){
            fb = document.createElement('div');
            fb.classList.add = this.selector.substring(1);
            fb.textContent = 'name';
            
        } else if(this.selector.slice(0, 1) === '#'){
            fb = document.createElement('p');
            fb.id = this.selector.substring(1);
            fb.textContent = 'name';
        } 
        document.body.append(fb);

        fb.style.height = this.height + 'px';
        fb.style.width = this.width + 'px';
        fb.style.background = this.bg;
        fb.style.fontSize = this.fontSize + 'px';
    };
    

    
    console.log(this.selector[0]);
}
    //let enter = prompt('enter');
console.dir(DomElement);
//DomElement.newMethod();
let elementDiv = new DomElement('#text', '60', '300', '#ebac0c', '25');
elementDiv.newMethod();
//console.log(elementId);

/*
function read(){
    DomElement.apply(arguments);
    let elementDiv = new read('.div', '60px', '300px', '#C0C0C0', '25px');
    let elementId = new read('p', '50px', '250px', '#ebac0c', '25px');
    
}
*/
//let elementDiv = new Read('.div', '60px', '300px', '#C0C0C0', '25px'); 
//let elementId = new Read('p', '50px', '250px', '#ebac0c', '25px');


/*
DomElement.prototype.read = function(){
    this.div = new DomElement('.div', '60px', '300px', '#C0C0C0', '25px');
    this.p = new DomElement('p', '50px', '250px', '#ebac0c', '25px');
};
//DomElement.newMethod();
*/
//console.log(DomElement.prototype.isPrototypeOf(div));
//let output = new DomElement();
//console.log('output: ', output);

//let car1 = new DomElement();
//console.log(car1);




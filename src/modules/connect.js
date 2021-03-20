const connect = () => {
    let forms = document.querySelector('body');
    let inputEmail = document.querySelectorAll('input[name = "user_email"]');
    let allForms = document.querySelectorAll('input');

    inputEmail.forEach(function(item){
        item.setAttribute('required', true);
    });

    
    allForms.forEach(function(item){
        item.setAttribute('autocomplete', false);
        item.autocomplete = 'off';
    });

    forms.addEventListener('input', (event) => {
        let target = event.target;

        if(target.matches('input[name = "user_phone"]')){
            target.value = target.value.replace(/[^+0-9 ]$/, '');

        } else if(target.matches('input[name = "user_message"]')){
            target.value = target.value.replace(/[^?!:;",.а-яА-ЯёЁ\s]+$/, '');

        } else if(target.matches('input[name = "user_name"]')){
            target.value = target.value.replace(/[^а-яА-ЯёЁ0-9 ]/, '');
            
        }  else if(target.matches('input[name = "user_email"]')){
            target.value = target.value.replace(/[^A-Za-z0-9/!~.*@'_-]/, '');
        }
         
    }, true);

    forms.addEventListener('blur', (event) => {
        let target = event.target;

        if (target.matches('input[name = "user_name"]')){
           target.value = target.value.replace(/ +/g, ' ').trim();
                target.value = target.value.replace(/([А-ЯЁ])/g, x => x.toLowerCase());
                target.value = target.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, x => x.toUpperCase());

        } 
    }, true);

};

export default connect;
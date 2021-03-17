const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
       successMessage = 'Спасибо! Мы скоро с вами свяжемся.'; 
    
    const form = document.querySelector('body');
    const statusMessage = document.createElement('div');
       // setTimeout(() => div.remove(), 4000);
        //statusMessage.classList.add('status');
    let formMessage = document.getElementById('form2-message');
    statusMessage.style.cssText = `font-size: 2rem;
    color: white;`;
    //alert('nen');

    
    form.addEventListener('submit', (event) => {
        
        let target = event.target;
        if(target.matches('form1')) {
            formName = target.querySelector('input[name = "user_name"]');
            formEmail = target.querySelector('input[name = "user_email"]');
            formPhone = target.querySelector('input[name = "user_phone"]');
        } else if(target.matches('form3')) {
            formName = target.querySelector('input[name = "user_name"]');
            formEmail = target.querySelector('input[name = "user_email"]');
            formPhone = target.querySelector('input[name = "user_phone"]');
        } else if(target.matches('form2')) {
            formName = target.querySelector('input[name = "user_name"]');
            formEmail = target.querySelector('input[name = "user_email"]');
            formPhone = target.querySelector('input[name = "user_phone"]');
            formMessage2 = target.querySelector('input[name = "user_message"]');
        }
        
        event.preventDefault();
        target.append(statusMessage);
        setTimeout(() => statusMessage.remove(), 3000);
        /*
        const removeDiv = () => {
            setTimeout(() => div.remove(), 4000);
            //const formOne = document.getElementById('form1');
            //formOne.parentNode.removeChild('div');
            //alert('удалить');
        };
        */
        //setTimeout(removeDiv, 3000);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(target);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('Status network not 200.');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch ((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error)
                });

        target.querySelector('input[name = "user_name"]').value = '';
        target.querySelector('input[name = "user_email"]').value = '';
        target.querySelector('input[name = "user_phone"]').value = '';
        if(formMessage.value !== ''){
            target.querySelector('input[name = "user_message"]').value = '';
        }
    });
 

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }; 
};

export default sendForm;
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

        const time = 100,
            step = 1;

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
            
        function outNum(num) {
            let n = 0;
            let t = Math.round(time / (num / step));
            let interval = setInterval(() => {
                if(n < total){
                    n = n + step * 10;
                } else if(n >= total){
                    clearInterval(interval);
                }

                totalValue.textContent = Math.round(n);
            }, t);
        }
        outNum(total);

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
};

export default calculate;
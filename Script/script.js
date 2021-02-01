'use strict';
/*document.getElementById('github').onclick = function() {
    console.log('Изучил git и github');
};*/
let money = +prompt('Ваш месячный доход?');
//let income = 'freelance';
let addExpencess = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = !!prompt('Есть ли у вас депозит в банке?');
let expencess1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expencess2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 200000;
let Period = 5;
let budgetMounth = money -= amount1 + amount2;
let budgetDay = budgetMounth / 30; 
let period = mission / budgetMounth;


console.log(typeof money);
console.log(typeof addExpencess);
//console.log(typeof income);
console.log(typeof deposit);
console.log(addExpencess.length);
console.log('Период равен ' + Period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(expencess1 + ', ' + expencess2);
console.log(addExpencess.toLowerCase().split(', '));
console.log('Бюджет на месяц: ' + (budgetMounth));
console.log('Цель будет достигнута через ' + (Math.ceil(period)) + ' месяцев(-а)');
console.log('Бюджет на день: ' + (Math.floor(budgetDay)));


if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
}   else if (budgetDay >= 600 < 1200){
    console.log('У вас средний уровень дохода');
}   else if (budgetDay <600){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}   else {
    console.log('Что то пошло не так');
}


/*
switch (true){
    case foo >= 1200:
        console.log('У вас высокий уровень дохода');
        break;
    case foo >= 600 && foo <= 1200:
        console.log('У вас средний уровень дохода');
        break;
    case foo >= 0 && foo <= 600:
        console.log('К сожалению у вас уровень дохода ниже среднего');
        break;
    default:
        console.log('Что то пошло не так');
}
*/
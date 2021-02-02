'use strict';
/*document.getElementById('github').onclick = function() {
    console.log('Изучил git и github');
};*/
let money = +prompt('Ваш месячный доход?');
//let income = 'freelance';
let addExpencess = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expencess1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expencess2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 200000;
let Period = 5;


let sum = 0;
function getExpencessMonth(a, b){
    sum = a + b;
};
getExpencessMonth(amount1, amount2);
console.log(sum);


 
let accumulatedMonth = 0;
function getAccumulatedMonth(a, b, c){
    console.log('сумма ' + a);
    console.log('первый расход ' + b);
    console.log('второй расход ' + c);
    return accumulatedMonth = a - b - c;
}; 
getAccumulatedMonth(money, amount1, amount2);
console.log(accumulatedMonth);
// возможно надо исправить на отдельную переменную! 
let budgetDay = accumulatedMonth / 30; 

let target = 0; 
function getTargetMonth(a, b){
    return target = a / b;
};
getTargetMonth(mission, accumulatedMonth);
console.log('Цель будет достигнута через ' + (Math.ceil(target)) + ' месяцев(-а)');



console.log('сумма ' + money);
console.log(typeof addExpencess);
//console.log(typeof income);
console.log(typeof deposit);
console.log(addExpencess.length);
console.log('Период равен ' + Period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(expencess1 + ', ' + expencess2);
console.log(addExpencess.toLowerCase().split(', '));
console.log('Бюджет на месяц: ' + (budgetMonth));
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
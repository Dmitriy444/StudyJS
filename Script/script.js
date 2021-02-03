'use strict';
/*document.getElementById('github').onclick = function() {
    console.log('Изучил git и github');
};*/
let money = +prompt('Ваш месячный доход?');
let income = 'freelance';
let addExpencess = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expencess1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expencess2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 200000;
let Period = 5;
let accumulatedMonth = 0;
let budgetDay = accumulatedMonth / 30; 


let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let  getExpencessMonth = function(a, b){
    return amount1 + amount2;
};


function getAccumulatedMonth(a, b){
    return accumulatedMonth = a - b;
};
getAccumulatedMonth(money, getExpencessMonth());


let getTargetMonth = function(a, b){
    return mission / accumulatedMonth;
};


let getStatusIncome = function(){
    if (budgetDay >= 1200){
        return('У вас высокий уровень дохода');
    }   else if (budgetDay >= 600 < 1200){
        return('У вас средний уровень дохода');
    }   else if (budgetDay <600){
        return('К сожалению у вас уровень дохода ниже среднего');
    }   else {
        return('Что то пошло не так');
    }
    };


console.log('Сумма всех расходов за месяц составляет: ' + getExpencessMonth());
console.log(addExpencess.toLowerCase().split(', '));
console.log('Цель будет достигнута через ' + (Math.ceil(getTargetMonth())) + ' месяцев(-а)');
console.log('Бюджет на день: ' + (Math.floor(budgetDay)));
console.log(getStatusIncome());
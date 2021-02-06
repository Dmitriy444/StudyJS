'use strict';
/*document.getElementById('github').onclick = function() {
    console.log('Изучил git и github');
};*/

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money = start();
let income = 'freelance';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses = [];
let expensesAmount = getExpensesMonth();

let mission = 200000;
let period = 5;
let accumulatedMonth = +getAccumulatedMonth(money, expensesAmount);
let budgetDay = accumulatedMonth / 30;

function start(){
    let money = 0;
    do {
        money = +prompt('Ваш месячный доход?'); 
    }
    while (!isNumber(money))
    return money;
};

let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
showTypeOf(expensesAmount);

function getExpensesMonth(a, b){
    return a + b;
};

function getExpensesMonth(){
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');

        sum += +prompt('Во сколько это обойдётся?');
        while (!isNumber(sum)) {
        sum = prompt('Во сколько это обойдётся?');
        }  
        }  
    return sum;
};  

 function getAccumulatedMonth(a, b){
    return a - b;
};

 function getTargetMonth(a, b){
    if (a / b < 0){
        console.log('Цель не будет достигнута');
    } else if (a / b >= 0){
        console.log('Цель будет достигнута');
    }
    return console.log();
};
getTargetMonth(mission, accumulatedMonth);

function getStatusIncome(budgetDay){
    if (budgetDay >= 1200){
        return('У вас высокий уровень дохода');
    }   else if (budgetDay >= 600 && budgetDay < 1200){
        return('У вас средний уровень дохода');
    }   else if (budgetDay >= 0 && budgetDay < 600){
        return('К сожалению у вас уровень дохода ниже среднего');
    }   else if (budgetDay < 0) {
        return('Что то пошло не так');
    }
    };

console.log('Сумма всех расходов за месяц составляет: ' + expensesAmount);
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день: ' + (Math.floor(budgetDay)));
console.log(getStatusIncome(budgetDay));
//просто добавил коммент
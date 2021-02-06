'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let appData ={
    income: {},
    addIncome: [],
    expenses: [],
    addExpencess: [],
    deposit: false,
    mission: 200000,
    period: 6,
    budget: start(),
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', '),
            appData.deposit = confirm('Есть ли у вас депозит в банке?'),
            appData.expenses = function getExpensesMonth(){
            



            for (let i = 0; i < 2; i++) {
                let sum = 0;
                expenses[i] = prompt('Введите обязательную статью расходов?');
                sum += +prompt('Во сколько это обойдётся?');
                while (!isNumber(sum)) {
                sum = prompt('Во сколько это обойдётся?');
                }  
                } 
                return sum;
            }
    }
};
for (let expenses in appData){
    console.log('ключ: ' + expenses + ' Значение: ' + appData[expenses]);
}

//let money = start();
let income = 'freelance';

let accumulatedMonth = +getAccumulatedMonth(appData.budget, appData.expensesAmount);
let budgetDay = accumulatedMonth / 30;

function start(){
    let money = 0;
    do {
        money = +prompt('Ваш месячный доход?'); 
    }
    while (!isNumber(money))
    return money;
};

appData.getExpensesMonth = getExpensesMonth;
function getExpensesMonth(a, b){
    return a + b;
};

appData.getAccumulatedMonth = getAccumulatedMonth;
 function getAccumulatedMonth(a, b){
    return a - b;
};

appData.getTargetMonth = getTargetMonth;
 function getTargetMonth(a, b){
    if (a / b < 0){
        console.log('Цель не будет достигнута');
    } else if (a / b >= 0){
        console.log('Цель будет достигнута');
    }
    return console.log();
};
getTargetMonth(appData.mission, accumulatedMonth);

appData.getStatusincome = getStatusIncome;
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

console.log('Сумма всех расходов за месяц составляет: ' + appData.expensesAmount);
console.log(appData.expenses);
console.log('Бюджет на день: ' + (Math.floor(budgetDay)));
console.log(getStatusIncome(budgetDay));
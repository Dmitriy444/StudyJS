'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
function start(){
    do {
        money = +prompt('Ваш месячный доход?'); 
    }
    while (!isNumber(money))
};
start();

let appData ={
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpencess: [],
    deposit: false,
    mission: 200000,
    period: 6,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
             
            for (let i = 0; i < 2; i++) {
                let name;
                name = prompt('Введите обязательную статью расходов?');
                let coast = +prompt('Во сколько это обойдётся?');
                while (!isNumber(coast)) {
                coast = prompt('Во сколько это обойдётся?');
                }  
                appData.expenses[name] = coast;
                } 
                
    },
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
        return appData.expensesMonth;
        },
        getBudget: function(){
            appData.getBudget = appData.budget - appData.expensesMonth;
            appData.budgetDay = appData.getBudget / 30;
        },
        getTargetMonth: function(){
            if (appData.mission / appData.getBudget < 0){
                return('Цель не будет достигнута');
            } else if (appData.mission / appData.getBudget >= 0){
                return('Цель будет достигнута через ' + (Math.ceil(appData.mission / appData.getBudget)) + ' месяца(-ев)');
            }
        },
        getStatusIncome: function(){
            if (appData.budgetDay >= 1200){
                return('У вас высокий уровень дохода');
            }   else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
                return('У вас средний уровень дохода');
            }   else if (appData.budgetDay >= 0 && appData.budgetDay < 600){
                return('К сожалению у вас уровень дохода ниже среднего');
            }   else if (appData.budgetDay < 0) {
                return('Что то пошло не так');
            }
            },

};

    
    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    
    console.log('Расходы за месяц ' + appData.expensesMonth);
    console.log(appData.getTargetMonth());
    console.log(appData.getStatusIncome());
    console.log('Наша программа включает в себя данные');
    for (let key in appData){
        console.log('Ключ ' + key + ' Значение: ' + appData[key]);
    }

    //console.log('Бюджет на день ' + (Math.floor(appData.budgetDay)));
    //console.log('Бюджет на месяц ' + appData.getBudget);




   

'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let isString = function(s){
    return  !isNumber(s) && (s.trim(s) !='') //&& (s != null)
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
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 200000,
    period: 6,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        if(confirm('Есть ли у вас дополнительный источник заработка?')){

            let itemIncome = prompt('Какой у вас дополнительный заработок?');
                while(!isString(itemIncome)){
                    itemIncome = prompt('Какой у вас дополнительный заработок?');
                }
            let cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?');
                while (!isNumber(cashIncome)){
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
                }
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'one, two, three');
            appData.addExpenses = addExpenses
                .toLowerCase().split(', ')
                .map(addExpenses => addExpenses.toLowerCase().trim().slice(0, 1).toUpperCase() + addExpenses.slice(1));
 
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
             
            for (let i = 0; i < 2; i++) {
                let name;
                name = prompt('Введите обязательную статью расходов?');
                while (!isString(name)){
                    name = prompt('Введите обязательную статью расходов?');
                }
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
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = appData.budgetMonth / 30;
            
        },
        getTargetMonth: function(){
            if (appData.mission / appData.budgetMonth < 0){
                return('Цель не будет достигнута');
            } else if (appData.mission / appData.budgetMonth >= 0){
                return('Цель будет достигнута через ' + (Math.ceil(appData.mission / appData.budgetMonth)) + ' месяца(-ев)');
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
            getInfoDeposit: function(){
                if(appData.deposit){
                    appData.percentDeposit = +prompt('Какой годовой процент?');
                        while(!isNumber(appData.percentDeposit)) {
                            appData.percentDeposit = prompt('Какой годовой процент?');
                        }
                    appData.moneyDeposit = +prompt('Какая сумма заложена?');
                        while(!isNumber(appData.moneyDeposit)) {
                            appData.moneyDeposit = +prompt('Какая сумма заложена?');
                        }

                }
            },
            calcSavedMoney: function(){
                return appData.budgetMonth * appData.period;
            }

};

    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getInfoDeposit();

    console.log('Расходы за месяц ' + appData.expensesMonth);
    console.log(appData.getTargetMonth());
    console.log(appData.getStatusIncome());
    console.log('Наша программа включает в себя данные');
    for (let key in appData){
        console.log('Ключ ' + key + ' Значение: ' + appData[key]);
    }
    console.log(appData.addExpenses.join(', '));
    //appData.getInfoDeposit();
    //console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
    //console.log('Бюджет на день ' + (Math.floor(appData.budgetDay)));
    //console.log('Бюджет на месяц ' + appData.getBudget);





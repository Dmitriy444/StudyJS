'use strict';

let calculate = document.getElementById('start'),
     incomeAddBtn = (document.getElementsByTagName('button')[0]),
     expensesAddBtn = (document.getElementsByTagName('button')[1]),
     checkbox = document.querySelector('#deposit-check'),
     adIncome = document.querySelectorAll('.additional_income-item'),
     budgetMonthValue = (document.getElementsByClassName('budget_month-value')[0]),
     budgetDayValue = (document.getElementsByClassName('budget_day-value')[0]),
     expensesMonthValue =  (document.getElementsByClassName('expenses_month-value')[0]),
     adIncomeValue =  (document.getElementsByClassName('additional_income-value')[0]),
     adExpensesValue =  (document.getElementsByClassName('additional_expenses-value')[0]),
     incomePeriodValue =  (document.getElementsByClassName('income_period-value')[0]),
     targetMonthValue =  (document.getElementsByClassName('target_month-value')[0]),
     salaryAmount = document.querySelector('.salary-amount'),
     adIncomeTitle = document.querySelector('.income-title'),
     adIncomeAmount = document.querySelector('.income-amount'),
     titleIncomeName = (document.querySelector('[placeholder="Наименование"]')),
     titleIncomeSum = (document.querySelector('[placeholder="Сумма"]')),
     titleExpenses = document.querySelector('.expenses-title'),
     amountExpenses = document.querySelector('.expenses-amount'),
     expensesItems = document.querySelectorAll('.expenses-items'),
     amountTarget = document.querySelector('.target-amount'),
     periodSelect = document.querySelector('.period-select'),  
     additionalExpensesItem = document.querySelector('.additional_expenses-item'),
     incomeItems = document.querySelectorAll('.income-items'),
     periodAmount = document.querySelector('.period-amount');

    let appData ={
        budget: 0,
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        start: function (){
            
            if(salaryAmount.value === ''){
                alert('Ошибка, поле "Месячный доход" должно быть');
                return;
            }
            appData.budget = +salaryAmount.value;
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();

            appData.showResult();
            //appData.getInfoDeposit();
        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = Math.ceil(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;
            adExpensesValue.value = appData.addExpenses.join(', ');
            adIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcSavedMoney();


        },
        addExpensesBlock: function(){
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddBtn);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3){
                expensesAddBtn.style.display = 'none';
            }
        },
        addIncomeBlock: function(){
            let incomeItems = document.querySelectorAll('.income-items');
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomeAddBtn);
            incomeItems = document.querySelectorAll('.income-items');
            if(incomeItems.length === 3){
                incomeAddBtn.style.display = 'none';
            }
        },
        getExpenses: function(){
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    appData.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        getIncome: function(){
            incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== '') {
                    appData.income = itemIncome;
                    appData.incomeMonth = +cashIncome;
                }
            });
        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if (item !== ''){
                    appData.addExpenses.push(item);
                }
            })
        },
        getAddIncome: function(){
            adIncome.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
            });
        },

    
        getExpensesMonth: function(){
            for(let key in appData.expenses){
                appData.expensesMonth += +appData.expenses[key];
            }
            return appData.expensesMonth;
            },
            getBudget: function(){
                appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
                appData.budgetDay = appData.budgetMonth / 30;
                
            },
            getTargetMonth: function(){
                return amountTarget.value / appData.budgetMonth;
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
                    return appData.budgetMonth * periodSelect.value;
                }
    
    };

    start.addEventListener('click', appData.start);
    expensesAddBtn.addEventListener('click', appData.addExpensesBlock);
    incomeAddBtn.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('change', function(){
         periodAmount = periodSelect.value;
    });

    
    /*
    console.log(appData.getTargetMonth());
    console.log('Наша программа включает в себя данные');
    for (let key in appData){
        console.log('Ключ ' + key + ' Значение: ' + appData[key]);
    }
    */
'use strict';

let calculate = document.getElementById('start'),
     cancel = document.getElementById('cancel'),
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
     adIncomeTitle = document.querySelector('[placeholder="Наименование"]'),
     adIncomeAmount = document.querySelector('.income-amount'),
     titleIncomeName = (document.querySelector('[placeholder="Наименование"]')),
     titleIncomeSum = (document.querySelector('[placeholder="Сумма"]')),
     titleExpenses = (document.getElementsByClassName('expenses-title')[1]),
     amountExpenses = document.querySelector('.expenses-amount'),
     expensesItems = document.querySelectorAll('.expenses-items'),
     amountTarget = document.querySelector('.target-amount'),
     periodSelect = document.querySelector('.period-select'),  
     additionalExpensesItem = document.querySelector('.additional_expenses-item'),
     incomeItems = document.querySelectorAll('.income-items'),
     periodAmount = document.querySelector('.period-amount'),
     additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
     main = document.querySelector('.main'),
     data = document.querySelector('.data');

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
            let me = this;

            console.log(me);
            me.checkStart();
            me.budget = +salaryAmount.value;
            me.getExpenses();
            me.getIncome();
            me.getExpensesMonth();
            me.getAddExpenses();
            me.getAddIncome();
            me.getBudget();

            me.showResult();
            me.noEnterData();
            //me.reset();
        },
        showResult: function(){
            let me = this;
            budgetMonthValue.value = me.budgetMonth;
            budgetDayValue.value = Math.ceil(me.budgetDay);
            expensesMonthValue.value = me.expensesMonth;
            adExpensesValue.value = me.addExpenses.join(', ');
            adIncomeValue.value = me.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(me.getTargetMonth());
            incomePeriodValue.value = me.calcSavedMoney();
            
            periodSelect.addEventListener('input', appData.dynamicSelect.bind(appData));
        },
        noEnterData: function(){
            salaryAmount.setAttribute('disabled', 'disabled');
            adIncomeTitle.setAttribute('disabled', 'disabled');
            adIncomeAmount.setAttribute('disabled', 'disabled');
            adIncomeValue.setAttribute('disabled', 'disabled');
            adExpensesValue.setAttribute('disabled', 'disabled');
            titleExpenses.setAttribute('disabled', 'disabled');
            amountExpenses.setAttribute('disabled', 'disabled');
            additionalExpensesItem.setAttribute('disabled', 'disabled');
            amountTarget.setAttribute('disabled', 'disabled');
            //periodSelect.setAttribute('disabled', 'disabled');
            incomeAddBtn.setAttribute('disabled', 'disabled');
            expensesAddBtn.setAttribute('disabled', 'disabled');
            checkbox.setAttribute('disabled', 'disabled');
            additionalIncomeItem[0].setAttribute('disabled', 'disabled');
            additionalIncomeItem[1].setAttribute('disabled', 'disabled'),
            start.style.display = 'none';
            cancel.style.display = 'block';
        },
        checkStart: function(){
             if (salaryAmount.value !== '')  {
                calculate.removeAttribute('disabled'); 
            } 
        },
        dynamicSelect: function(){
            let me = this;
            incomePeriodValue.value = me.calcSavedMoney();
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
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomeAddBtn);
            incomeItems = document.querySelectorAll('.income-items');
            if(incomeItems.length === 3){
                incomeAddBtn.style.display = 'none';
            }
        },
        getExpenses: function(){
            let me = this;
            console.log(me);
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    me.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        getIncome: function(){
            let me = this;
            incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== '') {
                    me.income[itemIncome] = cashIncome;
                }
            });
        },
        getAddExpenses: function(){
            let me = this;
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if (item !== ''){
                    me.addExpenses.push(item);
                }
            })
        },
        getAddIncome: function(){
            let me = this;
            adIncome.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue !== ''){
                    me.addIncome.push(itemValue);
                }
            });
        },
        
        getExpensesMonth: function(){
            let me = this;
            for(let key in this.expenses){
                me.expensesMonth += +me.expenses[key];
            }
            return me.expensesMonth;
            },
            getBudget: function(){
                let me = this;
                me.budgetMonth = me.budget + me.incomeMonth - me.expensesMonth;
                me.budgetDay = me.budgetMonth / 30;
            },
            getTargetMonth: function(){
                let me = this;
                return amountTarget.value / me.budgetMonth;
            },
            getStatusIncome: function(){
                let me = this;
                if (me.budgetDay >= 1200){
                    return('У вас высокий уровень дохода');
                }   else if (me.budgetDay >= 600 && me.budgetDay < 1200){
                    return('У вас средний уровень дохода');
                }   else if (me.budgetDay >= 0 && me.budgetDay < 600){
                    return('К сожалению у вас уровень дохода ниже среднего');
                }   else if (me.budgetDay < 0) {
                    return('Что то пошло не так');
                }
                },
                getInfoDeposit: function(){
                    let me = this;
                    if(me.deposit){
                        me.percentDeposit = +prompt('Какой годовой процент?');
                            while(!isNumber(me.percentDeposit)) {
                                me.percentDeposit = prompt('Какой годовой процент?');
                            }
                        me.moneyDeposit = +prompt('Какая сумма заложена?');
                            while(!isNumber(me.moneyDeposit)) {
                                me.moneyDeposit = +prompt('Какая сумма заложена?');
                            }
                    }
                },
                calcSavedMoney: function(){
                    let me = this;
                    return me.budgetMonth * periodSelect.value;
                },  
                reset: function(){
                    let me = this;
                    let i = main.querySelectorAll('input');
                    i.forEach(el => el.value = '');
                    /*
                    me.appData = [];
                    me.appData.forEach(element => element.value = '');
                    console.log(me);
                    */
                   
                   this.budget = 0;
                   this.budgetDay = 0;
                   this.income = {};
                   this.addIncome = [];
                   this.expenses = {},
                   this.addExpenses = [],
                   this.deposit = false,
                   this.percentDeposit = 0,
                   this.moneyDeposit = 0,
                   this.budgetDay = 0,
                   this.budgetMonth = 0,
                   this.expensesMonth = 0,
                   
                   console.log(me);
                   //me.start();
                    cancel.style.display = 'none';
                    start.style.display = 'block';
                    
                    salaryAmount.removeAttribute('disabled');
                    salaryAmount.removeAttribute('disabled');
                    adIncomeTitle.removeAttribute('disabled');
                    adIncomeAmount.removeAttribute('disabled');
                    adIncomeValue.removeAttribute('disabled');
                    adExpensesValue.removeAttribute('disabled');
                    titleExpenses.removeAttribute('disabled');
                    amountExpenses.removeAttribute('disabled');
                    additionalExpensesItem.removeAttribute('disabled');
                    amountTarget.removeAttribute('disabled');
                    incomeAddBtn.removeAttribute('disabled');
                    expensesAddBtn.removeAttribute('disabled');
                    checkbox.removeAttribute('disabled');
                    additionalIncomeItem[0].removeAttribute('disabled');
                    additionalIncomeItem[1].removeAttribute('disabled');
                }, 
                
    };

    

    start.addEventListener('click', appData.start.bind(appData));
    
    expensesAddBtn.addEventListener('click', appData.addExpensesBlock.bind(appData));
    incomeAddBtn.addEventListener('click', appData.addIncomeBlock);

    periodSelect.addEventListener('input', function(){
        periodAmount.innerHTML = periodSelect.value;
    });
    salaryAmount.addEventListener('input', appData.checkStart);
    calculate.setAttribute('disabled', 'true');

    cancel.addEventListener('click', appData.reset.bind(appData));
    /*
    calculate.addEventListener('click', function(event){
        event.preventDefault();
    });
    */
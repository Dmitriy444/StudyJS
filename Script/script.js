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
            console.log(this);
            this.checkStart();
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();

            this.showResult();
            this.noEnterData();
        },
        showResult: function(){
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = Math.ceil(this.budgetDay);
            expensesMonthValue.value = this.expensesMonth;
            adExpensesValue.value = this.addExpenses.join(', ');
            adIncomeValue.value = this.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(this.getTargetMonth());
            incomePeriodValue.value = this.calcSavedMoney();
            
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
            periodSelect.setAttribute('disabled', 'disabled');
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
            incomePeriodValue.value = this.calcSavedMoney();
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
                    appData.income[itemIncome] = cashIncome;
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
            for(let key in this.expenses){
                appData.expensesMonth += +this.expenses[key];
            }
            return this.expensesMonth;
            },
            getBudget: function(){
                this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
                this.budgetDay = this.budgetMonth / 30;
            },
            getTargetMonth: function(){
                return amountTarget.value / this.budgetMonth;
            },
            getStatusIncome: function(){
                if (this.budgetDay >= 1200){
                    return('У вас высокий уровень дохода');
                }   else if (this.budgetDay >= 600 && this.budgetDay < 1200){
                    return('У вас средний уровень дохода');
                }   else if (this.budgetDay >= 0 && this.budgetDay < 600){
                    return('К сожалению у вас уровень дохода ниже среднего');
                }   else if (this.budgetDay < 0) {
                    return('Что то пошло не так');
                }
                },
                getInfoDeposit: function(){
                    if(this.deposit){
                        this.percentDeposit = +prompt('Какой годовой процент?');
                            while(!isNumber(this.percentDeposit)) {
                                this.percentDeposit = prompt('Какой годовой процент?');
                            }
                        this.moneyDeposit = +prompt('Какая сумма заложена?');
                            while(!isNumber(this.moneyDeposit)) {
                                this.moneyDeposit = +prompt('Какая сумма заложена?');
                            }
                    }
                },
                calcSavedMoney: function(){
                    return this.budgetMonth * periodSelect.value;
                },  
                reset: function(){
                    let i = main.querySelectorAll('input');
                    i.forEach(el => el.value = '');
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
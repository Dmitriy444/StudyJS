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
     additionalIncomeItem = document.querySelectorAll('.additional_income-item');

    const AppData = function() {
        this.budget = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
    };

    AppData.prototype.start = function (){
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
    };
    AppData.prototype.showResult = function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        adExpensesValue.value = this.addExpenses.join(', ');
        adIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        
        periodSelect.addEventListener('input', appData.dynamicSelect.bind(appData));
    };
    AppData.prototype.noEnterData = function(){
            
        let values = document.querySelectorAll('input[type=text]');
            values.forEach(el => el.setAttribute('disabled', 'disabled'));
        incomeAddBtn.setAttribute('disabled', 'disabled');
        expensesAddBtn.setAttribute('disabled', 'disabled');
        checkbox.setAttribute('disabled', 'disabled');
        
        start.style.display = 'none',
        cancel.style.display = 'block';
    };
    AppData.prototype.checkStart = function(){
         if (salaryAmount.value !== '')  {
            calculate.removeAttribute('disabled'); 
        } 
    };
    AppData.prototype.dynamicSelect = function(){
        incomePeriodValue.value = this.calcSavedMoney();
    };
    AppData.prototype.addExpensesBlock = function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddBtn);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesAddBtn.style.display = 'none';
        }
    };
    AppData.prototype.addIncomeBlock = function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomeAddBtn);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomeAddBtn.style.display = 'none';
        }
    };
    AppData.prototype.getExpenses = function(){
        console.log(this);
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
                console.log(this);
            }
        }.bind(this));
    };
    AppData.prototype.getIncome = function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = cashIncome;
            }
        }, this); //this иначе написан!
    };
    AppData.prototype.getAddExpenses = function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                this.addExpenses.push(item);
            }
        }.bind(this));
    };
    AppData.prototype.getAddIncome = function(){
        adIncome.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        }.bind(this));
    };
    
    AppData.prototype.getExpensesMonth = function(){
        for(let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
        return this.expensesMonth;
        };
    AppData.prototype.getBudget = function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
    };
    AppData.prototype.getTargetMonth = function(){
        return amountTarget.value / this.budgetMonth;
    };
    AppData.prototype.getStatusIncome = function(){
        if (this.budgetDay >= 1200){
            return('У вас высокий уровень дохода');
        }   else if (this.budgetDay >= 600 && this.budgetDay < 1200){
            return('У вас средний уровень дохода');
        }   else if (this.budgetDay >= 0 && this.budgetDay < 600){
            return('К сожалению у вас уровень дохода ниже среднего');
        }   else if (this.budgetDay < 0) {
            return('Что то пошло не так');
        }
    };
    AppData.prototype.getInfoDeposit = function(){
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
    };
    AppData.prototype.calcSavedMoney = function(){
            return this.budgetMonth * periodSelect.value;
    };  
    AppData.prototype.reset = function(){
        let values = document.querySelectorAll('input[type=text]');
            values.forEach(el => el.value = '', this);
               
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

            console.log(this);

            cancel.style.display = 'none';
            start.style.display = 'block';
                
            //let values = document.querySelectorAll('input[type=text]');
            values.forEach(el => el.removeAttribute('disabled'));
            incomeAddBtn.removeAttribute('disabled');
            expensesAddBtn.removeAttribute('disabled');
            checkbox.removeAttribute('disabled');
                
    };
    AppData.prototype.eventListeners = function(){
        start.addEventListener('click', appData.start.bind(appData));
        expensesAddBtn.addEventListener('click', appData.addExpensesBlock.bind(appData));
        incomeAddBtn.addEventListener('click', appData.addIncomeBlock);
        periodSelect.addEventListener('input', function(){
            periodAmount.innerHTML = periodSelect.value;
        });
        salaryAmount.addEventListener('input', appData.checkStart);
        calculate.setAttribute('disabled', 'true');
        cancel.addEventListener('click', appData.reset.bind(appData));
    };
    
    const appData = new AppData();
    AppData.prototype.eventListeners();
    console.log(appData);
    
    
    
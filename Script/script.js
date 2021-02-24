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
     depositBank = document.querySelector('.deposit-bank'),
     depositAmount = document.querySelector('.deposit-amount'),
     depositPercent = document.querySelector('.deposit-percent');

    class AppData {
        constructor(budget, income, incomeMonth, addIncome, expenses, addExpenses, percentDeposit, moneyDeposit, budgetDay, budgetMonth, expensesMonth){
        this.budget = budget;
        this.income = income;
        this.incomeMonth = incomeMonth;
        this.addIncome = addIncome;
        this.expenses = expenses;
        this.addExpenses = addExpenses;
        this.deposit = false;
        this.percentDeposit = percentDeposit;
        this.moneyDeposit = moneyDeposit;
        this.budgetDay = budgetDay;
        this.budgetMonth = budgetMonth;
        this.expensesMonth = expensesMonth;
    }

    start (){
        console.log(this);
        this.checkStart();
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getInfoDeposit();
        this.checkPercent();
        this.getBudget();

        this.showResult();
        this.noEnterData();
    }
     showResult(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        adExpensesValue.value = this.addExpenses.join(', ');
        adIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        
        periodSelect.addEventListener('input', appData.dynamicSelect.bind(appData));
    }
     noEnterData(){
            
        const values = document.querySelectorAll('input[type=text]');
            values.forEach(el => el.setAttribute('disabled', 'disabled'));
        incomeAddBtn.setAttribute('disabled', 'disabled');
        expensesAddBtn.setAttribute('disabled', 'disabled');
        checkbox.setAttribute('disabled', 'disabled');
        depositBank.setAttribute('disabled', 'true');
        
        start.style.display = 'none',
        cancel.style.display = 'block';
    }
     checkStart(){
         if (salaryAmount.value !== '')  {
            calculate.removeAttribute('disabled'); 
        } 
    }
     dynamicSelect(){
        incomePeriodValue.value = this.calcSavedMoney();
    }
     addExpensesBlock(){
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAddBtn);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesAddBtn.style.display = 'none';
        }
    }
     addIncomeBlock(){
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomeAddBtn);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomeAddBtn.style.display = 'none';
        }
    }
     getExpenses(){
        console.log(this);
        expensesItems.forEach(function(item){
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
                console.log(this);
            }
        }.bind(this));
    }
     getIncome(){
        incomeItems.forEach(function(item){
            const itemIncome = item.querySelector('.income-title').value;
            const cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = cashIncome;
            }
        }, this); //this иначе написан!
    }
     getAddExpenses(){
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                this.addExpenses.push(item);
            }
        }.bind(this));
    }
     getAddIncome(){
        adIncome.forEach(function(item){
            const itemValue = item.value.trim();
            if (itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        }.bind(this));
    }
    
     getExpensesMonth(){
        for(let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
        return this.expensesMonth;
        }
     getBudget(){
        const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
        this.budgetDay = this.budgetMonth / 30;
        //console.log(this.percentDeposit);
    }
     getTargetMonth(){
        return amountTarget.value / this.budgetMonth;
    }
     getStatusIncome(){
        if (this.budgetDay >= 1200){
            return('У вас высокий уровень дохода');
        }   else if (this.budgetDay >= 600 && this.budgetDay < 1200){
            return('У вас средний уровень дохода');
        }   else if (this.budgetDay >= 0 && this.budgetDay < 600){
            return('К сожалению у вас уровень дохода ниже среднего');
        }   else if (this.budgetDay < 0) {
            return('Что то пошло не так');
        }
    }
     checkPercent(){
        if(isNaN(depositPercent.value) || depositPercent.value < 0 || depositPercent.value > 100){
            alert('Введите корректное число');
            calculate.setAttribute('disabled', 'true');
        } else {
            calculate.removeAttribute('disabled'); 
        }
    }
     getInfoDeposit(){
            if(this.deposit){
                    this.percentDeposit = depositPercent.value;
                    this.moneyDeposit = depositAmount.value;
            }
            console.log(depositPercent.value);
    }
     calcSavedMoney(){
            return this.budgetMonth * periodSelect.value;
    }
     reset(){
        const values = document.querySelectorAll('input[type=text]');
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
                
            values.forEach(el => el.removeAttribute('disabled'));
            incomeAddBtn.removeAttribute('disabled');
            expensesAddBtn.removeAttribute('disabled');
            checkbox.removeAttribute('disabled');
            checkbox.checked = false;
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositPercent.style.display = 'none';
            depositBank.value = '';
            depositBank.removeAttribute('disabled');

    }
     changePercent(){
        const valueSelect = this.value;
        console.log(valueSelect);
        if(valueSelect === 'other'){
            depositPercent.style.display = 'inline-block';
        } else{
            depositPercent.value = valueSelect;
            depositPercent.style.display = 'none';
            //depositPercent.value = '';
            
        }
    }
     depositHandler(){
        if(checkbox.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent);
        } else{
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositPercent.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            this.deposit = false;
            depositBank.removeEventListener('change', this.changePercent);
        }
    }

     eventListeners(){
        calculate.addEventListener('click', this.start.bind(this));
        expensesAddBtn.addEventListener('click', this.addExpensesBlock.bind(this));
        incomeAddBtn.addEventListener('click', this.addIncomeBlock);
        periodSelect.addEventListener('input', function(){
            periodAmount.innerHTML = periodSelect.value;
        });
        salaryAmount.addEventListener('input', this.checkStart);
        depositPercent.addEventListener('input',this.checkPercent);
        calculate.setAttribute('disabled', 'true');
        cancel.addEventListener('click', this.reset.bind(this));

        checkbox.addEventListener('change', this.depositHandler.bind(this));
    }
    
}
    const appData = new AppData(0, {}, 0, [], {}, [], false, 0, 0, 0, 0, 0);
    appData.eventListeners();
    console.log(appData);
    
    
    
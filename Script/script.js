
/*document.getElementById('github').onclick = function() {
    console.log('Изучил git и github');
};*/
let money = 1500;
let income = 'freelance';
let addExpencess = ('internet, taxi, purchases');
let deposit = true;
let mission = 5000;
let period = 4;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpencess.length);
console.log('Период равен ' + period + ' месяца');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpencess.toLowerCase().split(', '));

//console.log(money / 30);
let budgetDay = money / 30;
console.log(budgetDay);
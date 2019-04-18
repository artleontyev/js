'use strict';

let money,
    time;

money = prompt ("Ваш бюджет на месяц?", '');
time = prompt ("Введите дату в формате YYYY-MM-DD", '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false
};

let exp1, 
    exp2;
exp1= prompt ("Введите обязательную статью расходов в этом месяце", '');
appData.expenses[exp1] = prompt ("Во сколько обойдется?", '');

exp2 = prompt("Введите вторую обязательную статью расходов в этом месяце", '');
appData.expenses[exp2] = prompt("Во сколько обойдется?", '');

alert (`Вам понадобится ${appData.expenses[exp1]/30} рублей в день для ${exp1}\n и ${appData.expenses[exp2]/30} рублей в день для ${exp2}`);
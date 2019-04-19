'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false
};

let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    exp2 = prompt("Во сколько обойдется?", ''),
    exp3 = prompt("Введите вторую обязательную статью расходов в этом месяце", ''),
    exp4 = prompt("Во сколько обойдется?", '');

appData.expenses.exp1 = exp2;
appData.expenses.exp3 = exp4;


alert(` Вам понадобится ${appData.budget/30} рублей в день `);
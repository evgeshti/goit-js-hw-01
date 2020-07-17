let credits = 23580;
const pricePerDroid = 3000;

console.log('Добро пожаловать в магазин Дроидов');

let droidsAmount = prompt('Какое количество дроидов Вы хотели бы купить?');
if (droidsAmount === null) {
  console.log('Отменено пользователем!');
} else if (credits <= droidsAmount * pricePerDroid) {
  console.log('Недостаточно средств на счету!');
} else {
  credits -= droidsAmount * pricePerDroid;
  console.log(
    `Вы купили ${droidsAmount} дроидов, на счету осталось ${credits} кредитов.`,
  );
}

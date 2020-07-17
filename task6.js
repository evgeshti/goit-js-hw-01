let input;
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null) {
    alert('Отменено пользователем');
  } else if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += +input;
    console.log(+total);
  }
} while (input != null);
alert(`Общая сумма чисел равна ${total}`);
console.log(+total);

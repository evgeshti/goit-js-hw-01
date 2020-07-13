const ADMIN_PASSWORD = "jqueryismyjam";
let message = "Доступ запрещен, неверный пароль!";
console.log(message);
const userPassword = prompt("Введите пароль");

if (userPassword === null) {
  message = "Отменено пользователем!";
}
if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать";
  console.log(message);
} else {
  console.log(message);
}

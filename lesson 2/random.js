var randomNum = prompt("угадайте число от 1 до 10");
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(1, 10);
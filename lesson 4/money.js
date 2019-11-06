var old = +prompt("сколько вам лет?");
var a = old >17;
var b = old > 12 && old < 18;

switch(old){
    case a:
        console.log("добро пожаловать");
        break;
    case b:
        console.log("доступ закрыт");
        break;
    default:
        console.log( 'чтото пошло не так!' );
}
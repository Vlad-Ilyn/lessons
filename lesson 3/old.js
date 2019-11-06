var yaer = prompt("какого вы года рождения?");
var old = 2019 - yaer;

if (old >= 18){
    alert('добро пожаловать');
}else if(old >=12 && old <18 ){
    alert("доступ закрыт");
}else if (old < 12){
    alert('этот сервис не для вас');
}else {
    alert('ошибка, попробуйте снова');
}
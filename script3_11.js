var a = prompt("Введите 1 чтобы вывести текстовое поле, 2 чтобы вывести кнопку, 3 чтобы вывести круглешок с приколом"); // ввод вариации
var kolvo = prompt('Введите количество приколов'); // ввод количества
kolvo = parseInt(kolvo); // перевод в цифры
if (a=='1') // условие
for (var i=1;i<=kolvo;i++) // счётчик для количества
document.write('<br><input type="text">'); // вывод результата и так далее, но с другими условиями
else if (a=='2')
for (var i=1;i<=kolvo;i++)
document.write('<br><input type="button">');
else if (a=='3')
for (var i=1;i<=kolvo;i++)
document.write('<br><input type="radio">');
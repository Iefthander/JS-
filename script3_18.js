var chislo = prompt("Введите число"); // вводим число
for (var i=1; i>0; i++){ // цикл для i
if (chislo == 50){ // условие для числа
alert("Угадал! " + "Попыток:" + i) // выводим результат, если угадал и про попытки не забываем
}
if (chislo > 50){ // если не угадал, то подсказка, что меньше
	document.write("Меньше")

	var chislo = prompt("Введите число"); // снова спрашиваем число
}
if (chislo < 50){ // сноа не угадал, снова подсказка
	document.write("Больше")

	var chislo = prompt("Введите число"); // снова спрашиваем
}
}
var counter = prompt("Введите число"); // ввод числа
var factorial = 1; // значение начального факториала
document.write("Факториал числа :" + counter + "! = "); // вывод факториала
do { // функция
	if ( counter == 0) { // далее условие для факториала
		factorial = 1;
		break;
	}
	factorial = factorial * counter;
	counter = counter - 1;
}
while (counter > 0);
document.write(factorial);
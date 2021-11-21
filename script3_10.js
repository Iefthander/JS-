for (var sum=0, i=0; i<16; i++) //цикл
{
sum=sum+i; //условие для суммы
if (i==5) continue; // пропуск 5-ки
if (i==7) continue; // пропуск 7-ки
document.write(sum+"<br>"); // вывод
}
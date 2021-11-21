alert ("до");
try
{
	prompt("введите число"); // оператор без ошибки
}
catch(e)
{
	alert("обработка ошибки: "+e.message);
}
alert("после");
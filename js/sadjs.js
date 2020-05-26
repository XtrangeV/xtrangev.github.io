function sad()
{
	var num = document.getElementById("number");
	num.innerHTML++;
	if(num.innerHTML%10 == 0)
	{
		alert("wow nice guy");
	}
}
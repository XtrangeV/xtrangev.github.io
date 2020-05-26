function sad()
{
	var num = new XMLHttpRequest();
	num.open("get","https://github.com/XtrangeV/xtrangev.github.io/num.txt",true);
	num.send();
	num.onreadystatechange = function()
	{
		if(num.readyState == 4 && num.status == 200)
		{
			console.log(num);
			console.log(num.responseText);
		} 
		else if(num.status == 404)
		{
			console.log(num.status);
		}
	}
}
sad();

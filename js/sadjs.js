function sad()
{
	var num = new XMLHttpRequest();
	num.open("get","https://github.com/XtrangeV/xtrangev.github.io/num.txt",true);
	num.send();
	num.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			console.log(xhr);
			console.log(xhr.responseText);
		} 
		else if(xhr.status == 404)
		{
			console.log(xhr.status);
		}
	}
}
sad();
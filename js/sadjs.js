function sad()
{
	var num = document.getElementById("number");
	num.innerHTML++;
	if(num.innerHTML%10 == 0)
	{
		alert("wow nice guy");
	}
}
function ajaxtest()
{
	var xmlhttp;
	
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4&& xmlhttp.status == 200)
		{
			document.getElementById("numdiv").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","192.168.2.13/1.txt",true);
	xmlhttp.send();
	
}
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
			document.getElementById("number").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","num.txt",true);
	xmlhttp.send();
	
}
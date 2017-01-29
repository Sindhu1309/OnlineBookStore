 function validateForm()
{
	var user=document.login.username.value;
	var user=user.trim();
	var pass=document.login.password.value;
 
	if(user == "username" && pass == "password")
	{
	
	window.location.href = "home.html";
	}
	else
	{
	alert("Error Password or Username")
	}
}
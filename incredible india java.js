function validateForm()
{
	var fn=document.getElementById("fname").value;
	var ln=document.getElementById("lname").value;
	var gn=document.forms["regform"]["gender"];
	var ctry=document.getElementById("country");

	if(fn==null||fn=="")
	{
		alert("First name can't be blank");
		return false;
	}
	else if(ln==null||ln=="")
	{
		alert("Last name can't be blank");
		return false;
	}
	else if((gn[0].checked==false)&&(gn[1].checked==false))
	{
		alert("Please enter your gender");
	    return false;
	}
	else if(ctry.selectedIndex==0)
	{
		alert("Enter your Country");
		return false;
	}


}


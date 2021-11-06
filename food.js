function calcOutput()/*function will calculate total amount of money to be paid by customer*/
{
var firstName=document.getElementById("firstname").value;
var lastName=document.getElementById("lastname").value;
var username=firstName+" "+lastName;
var phone=document.getElementById("contactno.").value;
var q1=document.getElementById("Q1").value;
var q2=document.getElementById("Q2").value;
var q3=document.getElementById("Q3").value;
var q4=document.getElementById("Q4").value;
var q5=document.getElementById("Q5").value;
document.getElementById("orderConfirm").style.textAlign="center";
document.getElementById("orderConfirm").innerHTML="<h2>Order Summary</h2>";
document.getElementById("orderConfirm").innerHTML+="<p>"+username.toUpperCase()+ "</br>"+ phone + "</p>";
document.getElementById("orderConfirm").innerHTML+="<p>Order Total: Rs " + eval(q1*349+q2*165+q3*75+q4*99+q5*15) + "/-</p>";
}
function validatePhone()/*phone-no. is valid if written in correct format*/
{
	var phoneNumber=document.getElementById("contactno.").value;
	var regex=/^\d{3}-\d{3}-\d{4}$/;
	if(regex.test(phoneNumber))
	{
		document.getElementById("phonePrompt").style.color="Green";
		document.getElementById("phonePrompt").style.fontSize="small";
		document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("phonePrompt").style.color="Red";
		document.getElementById("phonePrompt").style.fontSize="small";
		document.getElementById("phonePrompt").innerHTML="<strong>invalid</strong>";
		return false;
	}
}
function validateFirstName()/*check if name is valid ,its length is 2-15 or not*/
{
	var fname=document.getElementById("firstname").value;
	var regex=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(regex.test(fname))
	{
		document.getElementById("fnamePrompt").style.color="Green";
		document.getElementById("fnamePrompt").style.fontSize="small";
		document.getElementById("fnamePrompt").innerHTML="<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("fnamePrompt").style.color="Red";
		document.getElementById("fnamePrompt").style.fontSize="small";
		document.getElementById("fnamePrompt").innerHTML="<strong>Enter 2-15 letter name</strong>";
		return false;
	}
}
function validateLastName()/*check if name is valid ,its length is 2-15 or not*/
{
	var lname=document.getElementById("lastname").value;
	var regex=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(regex.test(lname))
	{
		document.getElementById("lnamePrompt").style.color="Green";
		document.getElementById("lnamePrompt").style.fontSize="small";
		document.getElementById("lnamePrompt").innerHTML="<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("lnamePrompt").style.color="Red";
		document.getElementById("lnamePrompt").style.fontSize="small";
		document.getElementById("lnamePrompt").innerHTML="<strong>Enter 2-15 letter name</strong>";
		return false;
	}
}
		
	


/**
	Name: 			toggle_ivisiility
	Parameters: 	id, param
	Description: 	This function toggles the visibilty of certain section within the 
					site. When the button to toggle the section is pressed, the function 
					uses the id of the section (id) and the button (param) as a parameter. 
					It then uses the section id to hide the section and uses the button to 
					change the button text.
**/
function toggle_visibility(id, param)
{
	var element = document.getElementById(id);
	
	if(element.style.display == 'none')
	{
		element.style.display = 'block';
		param.innerHTML = "Hide";
	}
	else
	{
		element.style.display = 'none';
		param.innerHTML = "Show";
	}
}

/**
	Name: 			enterYourName
	Parameters: 	None
	Description: 	When the Enter Your Name button is pressed on the index page, this function is 
					called. First of all, it prompts the user to enter his/her name. Then it takes
					the name entered and displays a personal greeting to the user by altering the DOM.
**/
function enterYourName()
{
	var name = prompt("Please enter your name");
	if (name != null) 
	{
        document.getElementById("greeting").innerHTML =
        "<strong>Hi " + name + "! Thanks for visiting the site. </strong>";
    }
}

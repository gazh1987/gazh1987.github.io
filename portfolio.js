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

/**
	Name: 			repeatingContent
	Description:	Writes HTML for Header and side menu so as to conformto DRY pholosophy
**/
function repeatingContent()
{
	document.write('<div class="container" id = "header">');
	document.write('<div class="well well-sm" id = "socialMediaButtons">');	
	document.write('<nav id = "socialButtons">');
	document.write('<a href="https://ie.linkedin.com/in/garyhealy"><img src="linkedinIcon.png" height="30" width="30" alt="LinkedIn" /></a>');
	document.write('<a href="https://play.spotify.com/user/gazh1987"><img src="spotifyIcon.png" height="30" width="30" alt="spotify"></a>');
	document.write('<a href="mailto:gary.healy2@student.dit.ie"><img src="gmailIcon.png" height="30" width="30" alt="Email" /></a>');
	document.write('<a href="https://github.com/gazh1987"><img src="githubIcon.png" height="30" width="30" alt="Git Hub" /></a>');
	document.write('<a href="https://www.youtube.com/channel/UCjK-szvfU2DGKpNNxH6RCpg"><img src="youTubeIcon.png" height="30" width="30" alt="YouTube" /></a></nav></div>');				
	document.write('<div class="row">');
	document.write('<div class="col-sm-12 text-center">');	
	document.write('<header id = "titleAndSubtitle">');
	document.write('<h1 id = "headerTitle"> Gary Healy </h1><h3 id = "headerSubTitle"> Computer Scientist </h3></header></div></div></div>');
	document.write('<div class="container" id="body"><div class="col-sm-3 text-center center-block" id="sideMenu"><br>');
	document.write('<div id = "sideImage" class="row text-center center-block">');
	document.write('<img id = "linkedInPic" class="text-center center-block img-thumbnail " src="linkedInProfilePic.jpg" alt="profilePicture" height="170" width="170"/></div><br>');
	document.write('<div class = "row" id = "siteNav">');
	document.write('<ul style="list-style-type:none">');
	document.write('<li><a href="index.html" class="btn btn-default center-block " role="button" style="border-radius: 20px;"><b>Home</b></a></li>');
	document.write('<li><a href="expierience.html" class="btn btn-default center-block" role="button" style="border-radius: 20px;"><b>Experience</b></a></li>');
	document.write('<li><a href="education.html" class="btn btn-default center-block" role="button" style="border-radius: 20px;"><b>Education</b></a></li>');
	document.write('<li><a href="interests.html" class="btn btn-default center-block" role="button" style="border-radius: 20px;"><b>Interests</b></a></li></ul></div><br></div>');
}

/**
	Name: 			repeatingContent_Footer
	Description:	Writes HTML for Footer so as to conformto DRY pholosophy
	Note:			The closing div tag at the very start of the html closes the div tag with the id "body"
**/
function repeatingContent_Footer()
{
	document.write('</div><div class="container">');
	document.write('<footer>');
	document.write('<div class="col-sm-3 pull-right" id = "footer">');
	document.write('<p id = "footerText"><b>Copyright Gary Healy <br>2015</b></p></div></footer></div><br><br><br><br>');
}


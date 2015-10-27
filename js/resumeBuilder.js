

 var formattedName = HTMLheaderName.replace("%data%", "James Williams");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end-Web-developer");
$("#header").append(formattedRole); 
var formattedMobile = HTMLmobile.replace("%data%", "970-773-3746");
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", "jacuwi123@gmail.com");
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", "@jacuwi_123");
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", "Jacuwi123");
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", "Denver, CO");
$("#topContacts").append(formattedLocation);
var formattedBioPic = HTMLbioPic.replace("%data%", "images/mypic.jpg");
$("#main").prepend(formattedBioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Grow with every opportunity provided me while remaining positive and motivated.");
$("#main").prepend(formattedWelcomeMsg);




var bio = {
	"name" : "James Williams",
	"role": "Front-end-Web-development",
	"contactInfo": {
		"mobile": "970-773-3746",
		"email": "jacuwi123@gmail.com",
		"github": "jacuwi123",
		"location": "Denver, CO"
},
	"welcomeMessage": "Grow with every opportunity provided me while remaining motivated positive and motivated.",
	"skills": [
		"Data Entry", "Time Management", "Microsoft Word & Excel", "Inventory Management", "High Volume Production", "Cost Controll", "Basic HTML/CSS", "Microsoft Office" 
	]
} 

 var education = {
 	"schools": [
 	{
 		"name": "Western State College",
 		"location": "Gunnison, CO",
 		"major": "English"
 	},
 	{
 		"name": "Colorado Mesa University",
 		"location": "Grand Junction, CO",
 		"major": "English"
 	}
],
 	"onlineCourses": [
		 {
 		"title": "Intro to HTML and CSS",
 		"school": "Udacity",
 		"dates": "August 2015",
 		"url": "https://www.udacity.com"
 		},
 		{
 		"title": "JavaScript Basics",
 		"school": "Udacity",
 		"dates": "September 2015",
 		"url": "https://www.udacity.com"
 		}
 	]
 }

 var work = {
 	"jobs": [
 		{
 			"employer": "Buff Bros Inc.",
 			"title": "Kitchen Manager",
 			"location": "Littleton, CO",
 			"dates": "April 2005-January 2007",
 			"description": "Maintained constant food quality and presentation, Expertly estimated staffing needs and adjusted hourly schedules in accordance with demand patterns, and budget. Provided courteous and informative customer service."
 		},
 		{
 			"employer": "Lil Pub Company",
 			"title": "Kitchen Manager",
 			"location": "Denver, CO",
 			"dates": "September 2006-October 2008",
 			"description": "Maintained constant food quality and presentation, Expertly estimated staffing needs and adjusted hourly schedules in accordance with demand patterns, and budget. Provided courteous and informative customer service."
 		},
 		{
 			"employer": "Startek",
 			"title": "Collection Service Reprsentative",
 			"location": "Grand Junction, CO",
 			"dates": "November 2013-March 2014",
 			"description": "Collected money owed from customers that called in to pay, Upgraded services, General Customer service."
 		}

 	]
 }

 var projects = {
 	"projects": [
 		{
 			"title": "Project One",
 			"dates": "August, September-2015",
 			"description": "Built a portfolio site using basic HTML and CSS"
 		}
 	]
 }

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);

}
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}		
projects.display();
/*var age = 31;
var firstName = "James"
console.log(firstName);*/
//var awesomeThoughts = "I am James and I am awesome!";
//console.log(awesomeThoughts);

// $("#main").append("James");
// [string].replace([old], [new]);

/*var email = "jacuwi123@gmail.com";
var newEmail =
	email.replace("gmail", "yahoo");

console.log(email);
console.log(newEmail);*/

/*var funThoughts = awesomeThoughts.replace("awesome", "FUN");
console.log(awesomeThoughts);
/*var age = 31;
var firstName = "James"
console.log(firstName);*/
//var awesomeThoughts = "I am James and I am awesome!";
//console.log(awesomeThoughts);

// $("#main").append("James");
// [string].replace([old], [new]);

/*var email = "jacuwi123@gmail.com";
var newEmail =
	email.replace("gmail", "yahoo");*/


//var formattedName = HTMLheaderName.replace("%data%", "James Williams");
// $("#header").prepend(formattedName);
// var formattedRole = HTMLheaderRole.replace("%data%", "Front-end-developer");
// $("#header").prepend(formattedRole);





 var formattedName = HTMLheaderName.replace("%data%", "James Williams");
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end-Web-development");
$("#header").prepend(formattedRole); 
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
/*var formattedBioPic = HTMLbioPic.replace("%data%", "images/197x148.gif");
$("#main").prepend(formattedBioPic);*/



var bio = {
	"name" : "James Williams",
	"role": "Front-end-Web-development",
	"contactInfo": {
		"mobile": "970-773-3746",
		"email": "jacuwi123@gmail.com",
		"github": "jacuwi123",
		"location": "Denver, CO"
},
	"welcomeMessage": "Grow with every opportunity provided me while remaining motivated positive and energetic.",
	"skills": [
		"Data Entry", "Time Management", "Reading", "Inventory Management", "High Volume Production", "Cost Controll", "Basic HTML/CSS", "Microsoft Office" 
	]
} 

 var education = {
 	"schools": [
 	{
 		"name": "Western State College",
 		"city": "Gunnison, CO",
 		"major": "English"
 	},
 	{
 		"name": "Colorado Mesa University",
 		"city": "Grand Junction, CO",
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
 			"title": [ "Prep/Line Cook", "Assistant Kitchen Manager", "Kitchen Manager" ],
 			"dates": "April 2005 through January 2007",
 			"description": "Maintained constant food quality and presentation, Expertly estimated staffing needs and adjusted hourly schedules in accordance with demand patterns, and budget. Provided courteous and informative customer service."
 		},
 		{
 			"employer": "Lil Pub Company",
 			"title": "Kitchen Manager",
 			"dates": "September 2006 through October 2008",
 			"description": "Maintained constant food quality and presentation, Expertly estimated staffing needs and adjusted hourly schedules in accordance with demand patterns, and budget. Provided courteous and informative customer service."
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

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}


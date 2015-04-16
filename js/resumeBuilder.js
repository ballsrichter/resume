var bio = {
	
	"name": "Andrew Williams",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "904-238-9414",
		"email": "andrewleighwilliams@gmail.com",
		"github": "ballsrichter",
		"twitter": "@ballsrichter",
		"location": "Jacksonville, Florida"
	},
	"welcomeMessage": "Welcoem to the website guy and other cool stuff.",
	"skills": [
		"HTML/CSS","Bootstrap","Javascript", "Web Design and Development"
	],
	"biopic": "images/fry.jpg"
}

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);

	$("#headerInfo").prepend(formattedRole);
	$("#headerInfo").prepend(formattedName);
	$("#header").append(formattedPic);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (item in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
			$("#skills").append(formattedSkill);
		};
	}
}

bio.display();


var work = {
	
	"jobs": [
		{
			"employer": "Microsoft",
			"title": "Consumer Services Advisor",
			"location": "Jacksonville, Florida",
			"dates": "May 2014 - March 2015",
			"description": "As a service advisor, my role was to conduct answer desk appointments with customers who were having technical issues to help determine the best course of action for rectifying those problems. While the job was largely customer service oriented, I was also responsible for repairing those devices that were checked in for extended diagnostics and advanced software repair. Other various responsibilities included imaging devices on the sales floor as well as those being used by employees, conducting personal training appointments in areas such as Office 2013, Windows 8.1, and other Microsoft products, and general sales as well."
		},
		{
			"employer": "Digital ER",
			"title": "Assistant to the manager",
			"location": "Jacksonville, Florida",
			"dates": "January 2013 - June 2013",
			"description": "This was a temporary job. I typically worked under no supervision for around 30 hours a week selling services and products to customers, repairing phone and computer hardware, and troubleshooting software issues."
		},
		{
			"employer": "Power & Pumps Inc.",
			"title": "Part-time employee",
			"location": "Jacksonville, Florida",
			"dates": "June 2012 - July 2012",
			"description": "employeePrimary duties included listing overstock / out-of-date items online for sale. Also worked on the company database and website, helping to make minor improvements in both, while gaining some experience with Transact-SQL, Microsoft SQL Server, and ASP."
		}
	]
}

work.display = function() {
	for (job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	};
}

work.display();


var projects = {
	
	"projects": [
		{
			"title": "Dankwatch",
			"dates": "April 2013",
			"url": "http://www.dankwatch.com",
			"description": "This website was custom built as a private site for an artist to display his artwork. The design was created with simplicity in mind and is powered using only HTML and CSS. This website will be getting renovated in the near-future.",
			"images": [
				"images/methodman.jpg",
				"images/redman.jpg",
				"images/granddaddypurps.jpg",
			]
		},
		{
			"title": "Wave Slave Clothing",
			"dates": "May 2015",
			"url": "",
			"description": "Wave Slave Clothing is a clothing retailer specializing in surf and beach attire. Wave Slave Clothing tries to represent a lifestyle and as such, the website will reflect that style. This site is still in progress and will be launched during summer 2015.",
			"images": []
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (item in (projects.projects[project].images)) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[item]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

var education = {
    
    "schools": [
        {
            "name": "New College of Florida",
            "location": "Sarasota",
            "major": [
                "Natural Sciences"
            ],
            "minor": [],
            "graduation": "2013",
            "url": "http://www.ncf.edu"
        }
    ],

    "onlineCourses": [
        {
            "name": "Introduction to web design and development",
            "school": "Florida State College of Jacksonville",
            "major": "",
            "dates": "Spring 2013",
            "url": ""
        },
        {
            "name": "Responsive Web-Design Fundamentals",
            "school": "Udacity",
            "major": "Front-end Web Developer Nanodegree",
            "dates": "April 2015",
            "url": "https://www.udacity.com/course/ud893-nd"
        },
        {
            "name": "Javascript Basics",
            "school": "Udacity",
            "major": "Front-end Web Developer Nanodegree",
            "dates": "April 2015",
            "url": "https://www.udacity.com/course/ud804-nd"
        }
    ]
}

education.display = function () {
	for (school in education.schools) {
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		

		$("#education").append(HTMLschoolStart);
		$(".education-entry").append(schoolName);
		$(".education-entry").append(schoolLocation);
		if () {
			for (item in education.schools[school].major) {
				var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[item]);
				$(".education-entry").append(schoolMajor);
			}
			for (item in education.schools[school].minor) {
				var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[item]);
				$(".education-entry").append(schoolMajor);
			}
		};		

	}
}

education.display();

$("#mapDiv").append(googleMap)
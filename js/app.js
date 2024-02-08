let porfolio = [
	{
		title: "HCL Groups Company.",
		description: "PH administration web platform in which users can self-manage their properties and administrations, with everything necessary for the administration of horizontal properties (PH).",
		link: "https://app.mipropiedad247.com/",
		img: "img/portfolio/hcl.jpg",
		role: "Front-End Developer",
		at: "Ion Tech"
	},
	{
		title: "AMA.",
		description: "Application to make all kinds of health requests, such as buying medications at your trusted pharmacy, coordinating medical appointments, transporting you to your scheduled consultations.",
		link: "https://amagroupc.com/",
		img: "img/portfolio/ama.jpg",
		role: "Front-End Developer",
		at: "Ion Tech"
	},
	{
		title: "Descomplicate.",
		description: "Mobile application (Startup) for the online request of procedures by users.",
		link: "https://play.google.com/store/apps/details?id=com.cronapis.des",
		img: "img/portfolio/descomplicate.jpg",
		role: "Quality Assurance",
		at: "Cronapis Corp SA"
	},
	{
		title: "Sivoy",
		description: "Application to carry out and search for events in your areas, in which you can participate as a guest or as a host.",
		link: "https://play.google.com/store/apps/details?id=com.sivoy.app",
		img: "img/portfolio/sivoy.jpg",
		role: "Front-End Developer",
		at: "Ion Tech"
	},
	{
		title: "DKP Latam",
		description: "It is an intuitive app and full of numerous advantages and benefits, both for you and for the community in general, since you can access a delicious menu, not only in taste but also in the variety of national and international dishes, allowing you to satisfy the most demanding palates.",
		link: "https://dkplatam.com/",
		img: "img/portfolio/dkp.JPG",
		role: "Wordpress Developer",
		at: "Cronapis Corp SA"
	},
	{
		title: "Fitlab",
		description: "Fitlab Panama is a sports supplements store where you can get the best products to boost your results.",
		link: "https://fitlab.com.pa/",
		img: "img/portfolio/fitlab.JPG",
		role: "Wordpress Developer",
		at: "Cronapis Corp SA"
	},
];

let experience = [
	{
		title: "Cronapis Corp SA - QA Analyst & Wordpress developer",
		description: "Quality analyst of technological solutions for Cronapis Corp SA. Likewise, I also participated in the development of websites with the Wordpress content management system.",
		link: "#",
		tags: ["Quality Assurance", "Wordpress", "Elementor"],
		img: "img/experience/cronapis.png",
	},
	{
		title: "PDVSA - AIT Analyst (Internship)",
		description: "Together with the Automation, Information Technology and Telecommunications (AIT) management, perform maintenance functions and migration of applications in the Paraguana Refining Complex (CRP).",
		link: "http://www.pdvsa.com/",
		tags: ["HTML", "CSS", "Javascript", "JQuery", "PHP", "CODEIGNITER", "Visual Basic", "Bootstrap"],
		img: "img/experience/pdvsa.png",
	},
	{
		title: "Ion Tech - Front End Developer",
		description: "Developed and styled interactive web apps and web sites for Ion Tech, using typescript with the frameworks Angular and Vuejs.",
		link: "https://www.ion-tech.net/",
		tags:["HTML", "CSS", "Javascript", "JQuery", "Typescript", "Angular", "Vue js", "Ionic Framework", "Bootstrap"],
		img: "img/experience/iontech.png",
	},
];

function changePorfolio(param){
	let currentPortfolio = document.querySelector("#currentPortfolio").value;
	let index = 0;
	if(param == "minus"){
		index = (currentPortfolio != 0) ? --currentPortfolio : (porfolio.length - 1);
	}else{
		index = (currentPortfolio == (porfolio.length - 1)) ? 0 : ++currentPortfolio;
	}
	showPorfolio(index);
}

function changeExperience(param){
	let currentExperience = document.querySelector("#currentExperience").value;
	let index = 0;
	if(param == "minus"){
		index = (currentExperience != 0) ? --currentExperience : (experience.length - 1);
	}else{
		index = (currentExperience == (experience.length - 1)) ? 0 : ++currentExperience;
	}
	showResume(index);
}

function showPorfolio(index){
	document.querySelector("#currentPortfolio").value=index;
	document.querySelector("#portfolioModalLabel").innerHTML=porfolio[index].title;
	document.querySelector("#portfolioModalImage").src=porfolio[index].img;
	document.querySelector("#portfolioModalDescription").innerHTML=porfolio[index].description;
	document.querySelector("#portfolioModalLink").href=porfolio[index].link;
	document.querySelector("#portfolioModalCompany").innerHTML=porfolio[index].at;
	document.querySelector("#portfolioModalRole").innerHTML=porfolio[index].role;
}

function showResume(index){
	document.querySelector("#currentExperience").value=index;
	document.querySelector("#resumeModalLabel").innerHTML=experience[index].title;
	document.querySelector("#resumeModalImage").src=experience[index].img;
	document.querySelector("#resumeModalDescription").innerHTML=experience[index].description;
	document.querySelector("#resumeModalLink").href=experience[index].link;

	let html = "";
	for(let i = 0; i<experience[index].tags.length; i++){
		html += "<span>"+experience[index].tags[i]+"</span>";
	}
	document.querySelector("#resumeModalTags").innerHTML=html;

}
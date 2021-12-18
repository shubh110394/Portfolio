// Change website animations
import L_EXPRESS from "./styles/assets/express.svg";
import L_MONGODB from "./styles/assets/mongodb.svg";
const animation = {
	// make it false to switch off fade-up animation
	animate: true,
	// animation playing duration
	duration: 750,
	// if true, animation plays only once when element comes on screen
	once: false,
};
// Change your display name on tha landing display
const header = {
	name: "Shubham Shrivastava",
};
const background = {
	// Options: Snow or Particle
	type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
	paragraph: "",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar_frontend = [
	{
		name: "HTML5",
		// To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
		svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
		faClass: "fab fa-html5",
	},
	{
		name: "CSS3",
		// svg: '',
		faClass: "fab fa-css3",
	},
	{
		name: "Javascript",
		// svg: '',
		faClass: "fab fa-js",
	},
	{
		name: "ReactJS",
		// svg: '',
		faClass: "fab fa-react",
	},
	// {
	//   name: "Node",
	//   // svg: '',
	//   faClass: "fab fa-node",
	// },
	// {
	//   name: "Python",
	//   // svg: '',
	//   faClass: "fab fa-python",
	// },
	// {
	//   name: "Java",
	//   // svg: '',
	//   faClass: "fab fa-java",
	// },
	// {
	//   name: "PHP",
	//   // svg: '',
	//   faClass: "fab fa-php",
	// },
	// {
	//   name: "Database",
	//   // svg: '',
	//   faClass: "fas fa-database",
	// },
	// {
	//   name: "AWS",
	//   // svg: '',
	//   faClass: "fab fa-aws",
	// },
];

const skillsBar_backend = [
	{
		name: "NodeJs",
		// svg: '',
		faClass: "fab fa-node",
	},
	{
		name: "ExpressJs",
		svg: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
		faClass: "fab fa-ejs",
	},
];
const skillsBar_lang = [
	{
		name: "JavaScript",
		// svg: '',
		faClass: "fab fa-js",
	},
	{
		name: "Python",
		svg: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
		faClass: "fab fa-python",
	},
];

const skillsBar_database = [
	{
		name: "MongoDb",
		svg: "https://seeklogo.com/images/M/mongodb-logo-4A71340576-seeklogo.com.png",
		// faClass: "fab fa-mongodb",
	},
	{
		name: "Oracle Sql",
		svg: "",
		faClass: "fa fa-database",
	},
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
	{
		// Add image in './styles/images.css' in #project1
		id: "project1",
		imgsrc:
			"https://user-images.githubusercontent.com/61180475/133110831-139be656-f77f-407a-ab00-9514831c09ef.png",
		name: "Clone of Onn bikes",
		skills: ["HTML, CSS, JS"],
		description: (
			<>
				A web application to rent two-wheelers on a monthly and daily basis.
				<br></br>
				Features:
				<>
					<li>Sign-in/Sign-up and user authentication.</li>
					<li>Location-basedvehicle gallery</li>
					<li>Filter according to vehicle type, model, and price</li>
				</>
			</>
		),
		url: "https://github.com/harshith128/onnbikes",
		demo: "https://harshith128.github.io/onnbikes-client/",
	},
	{
		// Add image in './styles/images.css' in #project2
		id: "project2",
		imgsrc:
			"https://user-images.githubusercontent.com/61180475/146647273-b7b1bd1f-3c28-4bf9-890a-c7db80b3859a.png",
		name: "Movie-Booking-Platform",
		skills: ["Reactjs,Express,CSS,"],
		url: "https://github.com/kaustubhai",
		description: (
			<> 
				An online movie booking platform where you can select a show of your choice and book it according to your convenience
				<br></br>
				Features:
				<>
					<li>Users can login to see their dashboard.</li>
					<li>
						Users can find the booked items on the same page 
					</li>
					<li>Users can click on download to get the QR code of the tickets</li>
					{/* <li>Users can add products to their carts</li> */}
				</>
			</>
		),
		url: "https://github.com/shubh110394/new_rep",
		demo: "https://moviesbookingplatform.herokuapp.com/",
	},

	// {
	// 	// Add image in './styles/images.css' in #project3
	// 	id: "project3",
	// 	imgsrc:
	// 		"https://user-images.githubusercontent.com/61180475/144556006-470bbbe8-fff3-46ce-9096-1bd0a8147aba.png",
	// 	name: "Todo List",
	// 	skills: ["HTML, CSS, JS,ReactJs"],
	// 	url: "https://github.com/masai-course/shubham_fw11_198/tree/master/unit-5/sprint-2/day-3/we/redux-class3",
	// 	description: (
	// 		<>
	// 			A tool to manage your todo list
	// 			<br></br>
	// 			Features:
	// 			<>
	// 				<li>Users add task to be done</li>
	// 				<li>User can click on the task to edit the toggle status</li>
	// 				<li>
	// 					Once toggled the task is shown with a crossed line to mention it is
	// 					done
	// 				</li>
	// 				<li>
	// 					User can delete a task as well as the pending tasks can be seen at
	// 					the bottom
	// 				</li>
	// 			</>
	// 		</>
	// 	),
	// },
	// {
	// Add image in './styles/images.css' in #project4
	//   id: "project4",
	// imgsrc:"https://user-images.githubusercontent.com/61180475/144283840-1e6166fa-eeca-4cd4-935c-799dc9d1821c.jpg",
	//   name: "Project 4",
	//   skills: ["HTML, CSS, JS"],
	//   url: "https://github.com/kaustubhai",
	// },
	// {
	// Add image in './styles/images.css' in #project5
	//   id: "project5",
	// imgsrc:"https://user-images.githubusercontent.com/61180475/144283840-1e6166fa-eeca-4cd4-935c-799dc9d1821c.jpg",
	//   name: "Project 5",
	//   skills: ["HTML, CSS, JS"],
	//   url: "https://github.com/kaustubhai",
	// },
	// {
	// Add image in './styles/images.css' in #project6
	//   id: "project6",
	// imgsrc:"https://user-images.githubusercontent.com/61180475/144283840-1e6166fa-eeca-4cd4-935c-799dc9d1821c.jpg",
	//   name: "Project 6",
	//   skills: ["HTML, CSS, JS"],
	//   url: "https://github.com/kaustubhai",
	// },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Skills";
const miscellaneous = [
	{
		// Add image in './styles/images.css' in #misc1
		id: "misc1",
		name: "FrontEnd",
		url: "https://github.com/kaustubhai",
	},
	{
		// Add image in './styles/images.css' in #misc2
		id: "misc2",
		name: "Backend",
		url: "https://github.com/kaustubhai",
	},
	{
		// Add image in './styles/images.css' in #misc3
		id: "misc3",
		name: "Programming Language",
		url: "https://github.com/kaustubhai",
	},
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
	pitch: "Lets stay in touch",
	copyright: "Shubham Shrivastava",
	contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
	github: "https://github.com/shubh110394",
	facebook: "https://www.facebook.com/egocracker",
	// twitter: "https://twitter.com",
	// instagram: "https://instagram.com",
	linkedin: "www.linkedin.com/in/shubham-shrivastava-1798961ba",
	resume:
		"https://drive.google.com/file/d/1dg-Zm0QnuIR1DouSKjfdSb3lo-L-7yFG/view",
};
// Dont change anything here
export {
	animation,
	header,
	background,
	about,
	skillsBar_frontend,
	skillsBar_backend,
	skillsBar_lang,
	skillsBar_database,
	projects,
	miscellaneous,
	contact,
	social,
	section2title,
	section3Title,
	section4Title,
	section5Title,
};

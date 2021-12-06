import React from "react";
import Skills from "../layouts/Skills";
import Card from "react-bootstrap/Card";
import {
	about,
	skillsBar_frontend,
	section2title,
	skillsBar_backend,
	social,
} from "../../profile";

const About = () => {
	return (
		<div id="about" className="effect2">
			<div data-aos="zoom-in-up" data-aos-once="false" className="row">
				{/* <div
					className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo"
					id="not-dark2"
				></div> */}
				<div className="About-title-box ">
					<h1 id="About" className="red-line">
						{section2title}
					</h1>
				</div>
				<div
					className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo"
					id="not-dark2"
				></div>
				<div className="col-12 offset-md-1 col-md-6 about">
					{/* <div className="About-title-box">
						<h1 id="About" className="red-line">
							{section2title}
						</h1>
					</div> */}

					<p className="lead about-text">
						{/* {about.paragraph}   */}
						Hi there! I am <strong>&nbsp;Shubham Shrivastava</strong>
						<br />
						An enthusiastic programmer, born and brought up in India. I am a
						full stack web developer with specialization in MERN stack.
						Passionate about developing user-friendly websites with top-notch
						coding skills. Having strong communication skills and experience in
						working in teams. Interested in developing dynamic websites.
						{/* <br />
						<br /> <br /> */}
					</p>
					<div>
						{social.linkedin && (
							<a
								title="Visit Linkedin profile"
								rel="noopener noreferrer"
								target="_blank"
								href={social.linkedin}
								className="see2"
							>
								<i className="fab fa-linkedin"></i>
							</a>
						)}
						{social.github && (
							<a
								title="Visit Github profile"
								rel="noopener noreferrer"
								target="_blank"
								href={social.github}
								className="see2"
							>
								<i className="fab fa-github"></i>
							</a>
						)}
						<br />
						{social.resume && (
							<a title="Download Resume" href={social.resume} download>
								<p
									style={{
										padding: "2%",
										background: "blue",
										color: "white",
										width: "23%",
										display: "flex",
										margin: "5% 2%",
									}}
								>
									<i className="fas fa-download"></i>Resume
								</p>
							</a>
						)}
						<p
							style={{
								padding: "2%",
								background: "blue",
								color: "white",
								width: "36%",
								display: "flex",
								margin: "5% 2%",
							}}
						>
							<i className="fa fa-phone" aria-hidden="true"></i>
							<>+918109623638</>
							
						</p>
					</div>
				</div>
			</div>
			{/* <div id="Skills">
				<h2>Tech Skills</h2>
				<div className="row d-flex justify-content-center skills">
					<Card style={{ width: "20rem" }}>
						<Card.Body>
							Frontend
							<Card.Title>Frontend</Card.Title>
							<hr />
							<Card.Text className="card-text d-flex justify-content-start flex-column">
								{skillsBar_frontend.map((x) => (
									<Skills
										key={x.name}
										faClass={x.faClass}
										svg={x.svg}
										label={x.name}
									/>
								))}
							</Card.Text>
						</Card.Body>
					</Card>
					<Card style={{ width: "20rem" }}>
						<Card.Body>
							Frontend
							<Card.Title>Backend</Card.Title>
							<hr />
							<Card.Text className="card-text d-flex justify-content-start flex-column">
								{skillsBar_backend.map((x) => (
									<Skills
										key={x.name}
										faClass={x.faClass}
										svg={x.svg}
										label={x.name}
									/>
								))}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div> */}
		</div>
	);
};

export default About;

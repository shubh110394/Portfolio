import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";
import Typewriter from "typewriter-effect";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { social } from "../../profile";

const Header = () => {
	const scrollTo = () => {
		window.scrollTo({
			top: 100000,
			left: 0,
			behavior: "smooth",
		});
	};

	const toggleDarkMode = (e) => {
		document.documentElement.classList.toggle("dark-mode");
		document.getElementById("not-dark").classList.toggle("inverse-dark");
		document.getElementById("not-dark2").classList.toggle("inverse-dark");
		var x = document.getElementsByClassName("img-pro");
		for (let i = 0; i < x.length; i += 1) {
			x.item(i).classList.toggle("inverse-dark");
		}

		if (document.documentElement.classList.contains("dark-mode"))
			localStorage.setItem("mode", "Dark");
		else localStorage.setItem("mode", "Light");
	};

	return (
		<div>
			<div className="Header">
				<div>
					<Container>
						<Row>
							<Col>
								<Image
									src="https://user-images.githubusercontent.com/61180475/144848948-36d5c6eb-9396-4dcc-b990-7194ec0a5407.jpg"
									className="image_change"
								/>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="name">
					<h5>Hi,My name is</h5>
					<h2>{header.name}</h2>

					<span className="line-1 anim-typewriter">
						<Typewriter
							options={{
								strings: [
									" I am a Web Developer",
									"Problem Solver",
									"Coding Lover",
									"Team Player",
								],
								autoStart: true,
								loop: true,
								delay: 50,
							}}
						/>
					</span>
					<div className="mx-auto">
						<a title="Download Resume" target="_blank" href={social.resume} download>
							<button className="see">
								Resume  <i className="fas fa-download"></i>
							</button>
						</a>
					</div>
				</div>

				{/* <label className="switch">
					<input
						id="mode-switch"
						onClick={(e) => toggleDarkMode(e)}
						type="checkbox"
					/>
					<span className="slider round"></span>
				</label> */}
				<HeaderButton />
			</div>
			{/* <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img> */}
		</div>
	);
};

export default Header;

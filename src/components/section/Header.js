import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";
import Typewriter from "typewriter-effect";

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
				<div className="hp">
					<p>Hi,I'm</p>
				</div>
				<h1>{header.name}</h1>
				<span className="line-1 anim-typewriter">
					<Typewriter
						options={{
							strings: ["and this is my portfolio..."],
							autoStart: true,
							loop: true,
							delay: 50,
						}}
					/>
				</span>

				<label className="switch">
					<input
						id="mode-switch"
						onClick={(e) => toggleDarkMode(e)}
						type="checkbox"
					/>	
					<span className="slider round"></span>
				</label>
				<HeaderButton />
			</div>
			{/* <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img> */}
		</div>
	);
};

export default Header;

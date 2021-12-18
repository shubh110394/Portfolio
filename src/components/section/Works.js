import React from "react";
import Project from "../layouts/Project";
import {
	projects,
	miscellaneous,
	section3Title,
	section4Title,
} from "../../profile";

const Works = () => {
	return (
		<div data-aos="zoom-in-up" data-aos-once="true" className="third">
			{/* <>
					<div className="">
						
						<h1 className="About-title-box">{section3Title}</h1>
					</div>
				</> */}

			<div className="row">
				<h1 className="About-title-box">{section3Title}</h1>
				{projects &&
					projects.map((x) => (
						<Project
							key={x.id}
							id={x.id}
							imgsrc={x.imgsrc}
							des={x.description}
							demo={x.demo}
							url={x.url}
							name={x.name}
							skills={x.skills}
						/>
					))}
			</div>
		</div>
	);
};

export default Works;

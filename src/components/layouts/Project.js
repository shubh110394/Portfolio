import React from "react";
import Card from "react-bootstrap/Card";

const Project = ({ id, des, imgsrc, name, url, skills, demo }) => {
	return (
		// <div data-aos="fade-up" className=" col-12 col-lg-6 project-card">
		//     <div className="image-project">
		//         <div className={`img-pro ${id}`}></div>
		//     </div>

		//     <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
		//     {skills && <h3>{skills.map(skill => skill)}</h3>}

		// </div>
		// <div data-aos="fade-up" className=" col-12 col-lg-6 project-card">
		//     <div className="image-project">
		//         <div className={`img-pro ${id}`}></div>
		//     </div>

		//     <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
		//     {skills && <h3>{skills.map(skill => skill)}</h3>}

		// </div>
		<Card data-aos="fade-up" style={{ margin: "2%" }}>
			<Card.Img
				variant="top"
				id="not-dark2"
				src={imgsrc}
				style={{ width: "100%" }}
			/>
			<hr></hr>
			<Card.Body>
				<Card.Text>
					<a
						title={url}
						className="project-name"
						rel="noopener noreferrer"
						target="_blank"
						href={url}
					>
						<strong>{name}</strong>
					</a>
					<span>: {des}</span>
					{skills && (
						<span style={{ display: "block" }}>
							<strong>Tech Stacks: {skills.map((skill) => skill)}</strong>
						</span>
					)}
					<span>
						<>
							<a rel="noopener noreferrer" target="_blank" href={demo}>
								<span
									style={{
										background: "blue",
										color: "white",
										padding: "1% 2%",
									}}
								>
									<i className="fas fa-eye"></i>Live Demo
								</span>
							</a>
							<a rel="noopener noreferrer" target="_blank" href={demo}>
								<i className="fas fa-eye"></i>
								<span
									style={{
										background: "black",
										color: "white",
										padding: "1% 2%",
									}}
								>
									<i className="fas fa-eye"></i>GitHub Repo
								</span>
							</a>
						</>
						{/* <>
							<a rel="noopener noreferrer" target="_blank" href={demo}>
								<i className="fas fa-eye"></i>
								<span
									style={{
										background: "black",
										color: "white",
										padding: "0.5%",
									}}
								>
									<i className="fas fa-eye"></i>GitHub Repo
								</span>
							</a>
						</> */}
					</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Project;

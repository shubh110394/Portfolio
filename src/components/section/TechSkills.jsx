import Skills from "../layouts/Skills";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
	about,
	skillsBar_frontend,
	section2title,
	skillsBar_backend,
	skillsBar_lang,
	skillsBar_database,
} from "../../profile";

export default function TechSkills() {
	return (
		<div id="tech_skills" className="effect2">
			<div className="pt-3 pb-3 ">
				{/* <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1> */}
				<div className="About-title-box ">
					{" "}
					<h1 id="About" className="">
						Tech Skills
					</h1>
				</div>

				<CardDeck>
					<Row className="d-flex justify-content-around">
						{/* Frontend */}
						<Col md={4}>
							<Card className="focus mt-2 mb-2">
								<Card.Body>
									{/* Frontend */}
									<Card.Title className="text-center  card-title">
										Frontend
									</Card.Title>
									<hr />
									<Card.Text className="card-text d-flex justify-content-start flex-column">
										{skillsBar_frontend.map((x) => (
											<Skills
												key={x.name}
												faClass={x.faClass}
												svg=""
												label={x.name}
											/>
										))}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						{/* Backend */}
						<Col md={4}>
							<Card className="focus mt-2 mb-2">
								<Card.Body>
									<Card.Title className="text-center  card-title">
										Programming Language
									</Card.Title>
									<hr />
									<Card.Text className="card-text d-flex justify-content-start flex-column">
										{skillsBar_lang.map((x) => (
											<Skills
												key={x.name}
												faClass={x.faClass}
												svg=""
												label={x.name}
											/>
										))}
									</Card.Text>
								</Card.Body>
							</Card>

							{/* Hosting Platforms */}
							<Card className="focus mt-2 mb-2 ">
								<Card.Body>
									<Card.Title className="text-center  card-title">
										Database
									</Card.Title>
									<hr />
									<Card.Text className="card-text d-flex justify-content-start flex-column">
										{skillsBar_database.map((x) => (
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
						</Col>

						{/* Programming Languages */}
						<Col md={4}>
							<Card className="focus mt-2 mb-2">
								<Card.Body>
									<Card.Title className="text-center  card-title">
										Backend
									</Card.Title>
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

							{/* Database */}

							{/* <Card className="focus mt-2 mb-2">
								<Card.Body>
									<Card.Title className="text-center  card-title">
										Database
									</Card.Title>
									<hr />
									<Card.Text className="card-text d-flex justify-content-start flex-column">
										{skillsBar_frontend.map((x) => (
											<Skills
												key={x.name}
												faClass={x.faClass}
												svg=""
												label={x.name}
											/>
										))}
									</Card.Text>
								</Card.Body>
							</Card> */}
							{/* Version Control */}

							{/* <Card className="focus mt-2 mb-2">
								<Card.Body>
									<Card.Title className="text-center  card-title">
										Version Control
									</Card.Title>
									<hr />
									<Card.Text className="card-text d-flex justify-content-start flex-column">
										<span className="p-2">
											<a
												className="text-dark text-decoration-none"
												href={skills.versionControl[0].link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src={skills.versionControl[0].imgSrc}
													alt={skills.versionControl[0].imgAltText}
													rounded
													className="image-style m-1"
												></Image>{" "}
												{skills.versionControl[0].skillName}
											</a>
										</span>
									</Card.Text>
								</Card.Body>
							</Card> */}
						</Col>
					</Row>
				</CardDeck>
			</div>

			{/* <div>
				<div className="About-title-box">
					<h1 id="About" className="red-line">
						Tech Skills
					</h1>
				</div>
				<div className="row d-flex justify-content-center skills">
					<Card className="focus mt-2 mb-2" style={{width: "auto"}}>
						<Card.Body>
							<Card.Title className="text-center  card-title">Frontend</Card.Title>
							<hr />
							<Card.Text className="card-text d-flex justify-content-start flex-column"
								{skillsBar_frontend.map((x) => (
									<Skills
										key={x.name}
										faClass={x.faClass}
										svg=""
										label={x.name}
									/>
								))}
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="focus mt-2 mb-2" style={{width: "auto"}}>
						<Card.Body>
							<Card.Title className="text-center  card-title">Programming Languages</Card.Title>
							<hr />
							<Card.Text className="card-text d-flex justify-content-start flex-column"
								{skillsBar_lang.map((x) => (
									<Skills
										key={x.name}
										faClass={x.faClass}
										svg=""
										label={x.name}
									/>
								))}
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className="focus mt-2 mb-2" style={{width: "auto"}}>
						<Card.Body>
							<Card.Title className="text-center  card-title">Backend</Card.Title>
							<hr />
							<Card.Text className="card-text d-flex justify-content-start flex-column"
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
					<Card className="focus mt-2 mb-2" style={{width: "auto"}}>
						<Card.Body>
							<Card.Title className="text-center  card-title">Database</Card.Title>
							<hr />
							<Card.Text className="card-text d-flex justify-content-start flex-column"
								{skillsBar_database.map((x) => (
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
}

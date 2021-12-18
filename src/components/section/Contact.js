import React from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = () => {
	return (
		<div className="parallax">
			<div data-aos="zoom-in-up" data-aos-once="false" className="git-form">
				<>
					{/* <div className="git-head-div text-center mx-auto">
						<h1 id="Contact" className="git-head">
							{section5Title}
						</h1>
					</div> */}
				</>
				<div className="d-flex justify-content-center align-items-center flex-column box-contain">
					<div className="git-cont row">
						<div className="mx-auto">
							<h1 className="red-line">{contact.pitch}</h1>
							<div className="d-flex justify-content-center align-items-center flex-column">
								<div className="d-flex justify-content-center   flex-column ">
									<p className="para2">
										<i className="fa fa-phone fa-2x" aria-hidden="true"></i>
										<span style={{ margin: "2% 9%" }}> +918109623638</span>
									</p>
									<p className="para_mail2">
										<i className="fa fa-envelope fa-2x"></i>
										<span style={{ margin: "1% 9%" }}>
											shubh.110394@gmail.com
										</span>
									</p>
									{social.linkedin && (
										<a
											title="Visit Linkedin profile"
											rel="noopener noreferrer"
											target="_blank"
											className="icon"
											href={social.linkedin}
										>
											<p className="para_mail2">
												<i
													className="fa fa-linkedin fa-2x"
													aria-hidden="true"
												></i>
												<span style={{ margin: "1% 9%" }}>
													shubh.110394@gmail.com
												</span>
											</p>
										</a>
									)}
									{social.facebook && (
										<a
											title="Visit Facebok profile"
											rel="noopener noreferrer"
											target="_blank"
											href={social.facebook}
											className="icon"
										>
											<p className="para_mail2">
												<i
													className="fa fa-facebook fa-2x"
													aria-hidden="true"
												></i>
												<span style={{ margin: "1% 9%" }}>
													shubh.110394@gmail.com
												</span>
											</p>
										</a>
									)}
									{social.twitter && (
										<a
											title="Visit Twitter profile"
											rel="noopener noreferrer"
											target="_blank"
											href={social.twitter}
											className="icon"
										>
											<i className="fab fa-twitter"></i>
										</a>
									)}
									{social.instagram && (
										<a
											title="Visit Instagram profile"
											rel="noopener noreferrer"
											target="_blank"
											href={social.instagram}
											className="icon"
										>
											<i className="fab fa-instagram"></i>
										</a>
									)}
									{social.github && (
										<a
											title="Visit Github profile"
											rel="noopener noreferrer"
											target="_blank"
											href={social.github}
											className="icon"
										>
											<p className="para_mail2">
												<i
													className="fa fa-github fa-2x"
													aria-hidden="true"
												></i>
												<span style={{ margin: "1% 9%" }}>
													shubh.110394@gmail.com
												</span>
											</p>
										</a>
									)}
									{/* <span>Github Profile</span> */}
									<br />
								</div>
								{/* {social.resume && (
									<a title="Download Resume" href={social.resume} download>
										<i className="fas fa-download"></i>
									</a>
								)} */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<p id="not-dark" className="Copy">
				2021 © Copyright <strong>{contact.copyright}</strong>. All Rights
				Reserved
			</p>
		</div>
	);
};

export default Contact;

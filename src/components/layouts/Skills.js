import React from "react";
import Image from "react-bootstrap/Image";

const Skills = ({ label, svg, faClass }) => {
	return (
		<span
			data-aos="fade-up"
			className="skill__square col-3 col-sm-2 my-3 mx-auto"
			style={{ width: "auto", textAlign: "center" }}
		>
			{/* {svg ?  <svg  aria-hidden="true" focusable="false" data-icon={label} role="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentcolor" d={svg} /></svg> : <i className={`${faClass} mx-auto my-auto`}></i>} */}
			{svg ? (
				<Image src={svg} alt="" rounded style={{ width: "5rem" }}></Image>
			) : (
				<i className={`${faClass} mx-auto my-auto`}></i>
			)}

			{/* <i className={`${faClass} mx-auto my-auto`}></i> */}
			<span style={{ display: "block" }}>
				{label}
			</span>
		</span>
		// <div>
		//     <span>faClass</span>
		//     <span>label</span>
		// </div>
	);
};

export default Skills;

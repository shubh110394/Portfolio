import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css"

export default function NavBar() {
	return (
		<>
			<Navbar className="navBar" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Home</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#tech_skills">Tech Skills</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

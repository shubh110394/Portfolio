import React, { useEffect } from "react";
import { useState } from "react";
import Particles from "react-particles-js";
import { background } from "../../profile";

// const ParticlesBackground = () => {
// 	const ApplyParticlesAfterWindowSize = 900;
// 	const [width, setWidth] = useState(window.innerWidth);
// 	const [shouldApplyparticles, setShouldApplyParticles] = useState(
// 		width >= ApplyParticlesAfterWindowSize
// 	);

// 	useEffect(() => {
// 		const handleApplyParticle = () => {
// 			setWidth(window.innerWidth);
// 			setShouldApplyParticles(width >= ApplyParticlesAfterWindowSize);
// 		};
// 		window.addEventListener("resize", handleApplyParticle);

// 		return () => {
// 			window.removeEventListener("resize", handleApplyParticle);
// 		};
// 	}, [shouldApplyparticles, width]);
// 	let params = {
// 		particles: {
// 			number: {
// 				value: 40,
// 				density: {
// 					enable: true,
// 					value_area: 800,
// 				},
// 			},
// 			color: {
// 				value: ["#c311e7", "#b8e986", "#4dc9ff", "#ffd300", "#FF7E79"],
// 			},
// 			shape: {
// 				type: "circle",
// 				stroke: {
// 					width: 0,
// 					color: "#000000",
// 				},
// 				polygon: {
// 					nb_sides: 5,
// 				},
// 				image: {
// 					src: "img/github.svg",
// 					width: 100,
// 					height: 100,
// 				},
// 			},
// 			opacity: {
// 				value: 0.9,
// 				random: false,
// 				anim: {
// 					enable: false,
// 					speed: 1,
// 					opacity_min: 0.5,
// 					sync: false,
// 				},
// 			},
// 			size: {
// 				value: 8,
// 				random: true,
// 				anim: {
// 					enable: false,
// 					speed: 30,
// 					size_min: 0.1,
// 					sync: false,
// 				},
// 			},
// 			line_linked: {
// 				enable: true,
// 				distance: 80,
// 				color: "#ffffff",
// 				opacity: 0.4,
// 				width: 1,
// 			},
// 			move: {
// 				enable: true,
// 				speed: 3,
// 				direction: "none",
// 				random: false,
// 				straight: false,
// 				out_mode: "bounce",
// 				bounce: false,
// 				attract: {
// 					enable: false,
// 					rotateX: 600,
// 					rotateY: 1200,
// 				},
// 			},
// 		},
// 		interactivity: {
// 			detect_on: "canvas",
// 			events: {
// 				onhover: {
// 					enable: true,
// 					mode: "repulse",
// 				},
// 				onclick: {
// 					enable: true,
// 					mode: "push",
// 				},
// 				resize: true,
// 			},
// 			modes: {
// 				grab: {
// 					distance: 400,
// 					line_linked: {
// 						opacity: 1,
// 					},
// 				},
// 				bubble: {
// 					distance: 400,
// 					size: 40,
// 					duration: 2,
// 					opacity: 8,
// 					speed: 3,
// 				},
// 				repulse: {
// 					distance: 150,
// 					duration: 1,
// 				},
// 				push: {
// 					particles_nb: 3,
// 				},
// 				remove: {
// 					particles_nb: 2,
// 				},
// 			},
// 		},
// 		retina_detect: true,
// 	};
// 	return (
// 		<div className="particle">
// 			{background.type === "Snow" && (
// 				<Particles className="particle-box" height="100vh" width="100vw" params={params} />
// 			)}
// 			{background.type === "Particle" && (
// 				<Particles className="particle-box" height="100vh" width="100vw" params={params} />
// 			)}
// 		</div>
// 	);
// };

const ParticlesBackground = () => {
    return (
        <div className="particle">
            { background.type === 'Snow' && <Particles
            // height="100vh"
            // width="100%"
                params={{
                "particles": {
                    "number": {
                        "value": 75,
                        "density": {
                            "enable": false
                        }
                    },
                    "color": {
                        "value": "#000000"
                    },
                    "size": {
                        "value": 10,
                        "random": true
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        }
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 5
                        }
                    }
                }
            }} />}
            { background.type === 'Particle' && <Particles
            // height= "100vh"
            // width= "100vw"
            params={{
            "particles": {
                "collisions": {
                    "enable": true
                },
                "number": {
                    "value": 100,
                    "density": {
                        "enable": false
                    }
                },
                "color": "#000",
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": true,
                    "color": "#000"
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "bottom",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 6,
                        "opacity": 0.4
                    },
                    "push": {
                        "particles_nb": 5
                    }
                },
                "retina_detect": true
            }
        }} />}
        </div>
    )
}

export default ParticlesBackground;

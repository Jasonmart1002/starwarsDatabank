import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid m-0 p-0 mb-5">
			<nav className="navbar">
				<ul className="mx-auto navtxt">
					<li>
						<img className="logo" src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG27.png" />
					</li>
				</ul>
			</nav>
			<img className="saber" src="https://www.pngarts.com/files/3/Blue-Lightsaber-PNG-Transparent-Image.png" />
		</div>
	);
};

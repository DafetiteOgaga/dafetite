import React from "react";
import { Link, useLocation } from 'react-router-dom';

const navigation = [
	{ name: "home", link: "/new" },
	{ name: "projects", link: "/new/projects" },
	{ name: "services", link: "/new/services" },
	{ name: "contact", link: "/new/contact" }
]
function NavigationBar() {
	const pathSegments = useLocation().pathname.split("/");
	const currentPage = pathSegments.at(-1);
	// console.log("currentPage path in NavigationBar:", currentPage); // Debugging line to check the currentPage path
	return (
		<div className="tm-col-right">
			<nav className="navbar navbar-expand-lg" id="tm-main-nav">
				<button className="navbar-toggler toggler-example mr-0 ml-auto" type="button"
					data-toggle="collapse" data-target="#navbar-nav"
					aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span><i className="fas fa-bars"></i></span>
				</button>
				<div className="collapse navbar-collapse tm-nav" id="navbar-nav">
					<ul className="navbar-nav text-uppercase">
						{navigation.map((item, index) => {
							// console.log("Navigation item:", item); // Debugging line to check each navigation item
							const isActive = currentPage === item.name || (currentPage === "new" && item.name === "home");
							// console.log(`Is "${item.name}" active?`, isActive); // Debugging line to check if the item is active
							const animetionDelay = `${0.4 + index * 0.4}s`;
							// console.log("Animation delay for:", item.name, ':', animetionDelay); // Debugging line to check animation delay
							return (
								<li key={index}
								className={`nav-item ${isActive && 'active'} flip-and-fade-in`}
								style={{ animationDelay: animetionDelay }}>
									<Link to={item.link}
									className="nav-link tm-nav-link">{item.name}
										<span className="sr-only">(current)</span></Link>
								</li>
							)
						})}
						{/* <li className="nav-item flip-and-fade-in active" style={{ animationDelay: "0.4s" }}>
							<a className="nav-link tm-nav-link" href="##">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item flip-and-fade-in" style={{ animationDelay: "0.8s" }}>
							<a className="nav-link tm-nav-link" href="##">About</a>
						</li>
						<li className="nav-item flip-and-fade-in" style={{ animationDelay: "1.2s" }}>
							<a className="nav-link tm-nav-link" href="##">Services</a>
						</li>
						<li className="nav-item flip-and-fade-in" style={{ animationDelay: "1.6s" }}>
							<a className="nav-link tm-nav-link" href="##">Contact</a>
						</li> */}
					</ul>
				</div>
			</nav>
		</div>
	)
}
export { NavigationBar };

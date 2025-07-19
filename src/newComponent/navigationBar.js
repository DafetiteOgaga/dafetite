import React, {useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from "../hooks/IsMobile";

const navigation = [
	{ name: "home", link: "/new" },
	{ name: "projects", link: "/new/projects" },
	{ name: "videos", link: "/new/videos" },
	{ name: "contact", link: "/new/contact" }
]
function NavigationBar() {
	const isMobile = useIsMobile();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<div className="tm-col-right">
			<nav className="navbar navbar-expand-lg" id="tm-main-nav">
				<button
				onClick={() => setIsMobileMenuOpen(prev=>!prev)}
				className="navbar-toggler" type="button">
					<span><i className={`fas ${!isMobileMenuOpen?'fa-bars':'fa-times'}`}></i></span>
				</button>
				{!isMobile ?
					<MenuItems />
					:
					isMobileMenuOpen &&
					<MenuItems />}
			</nav>
		</div>
	)
}

function MenuItems() {
	const isMobile = useIsMobile();
	console.log("Is mobile:", isMobile); // Debugging line to check if it's mobile
	const pathSegments = useLocation().pathname.split("/");
	const currentPage = pathSegments.at(-1);
	// console.log("currentPage path in NavigationBar:", currentPage); // Debugging line to check the currentPage path
	return (
		<div className="tm-nav" id="navbar-nav">
			<ul className="navbar-nav text-uppercase">
				{navigation.map((item, index) => {
					// console.log("Navigation item:", item); // Debugging line to check each navigation item
					const isActive = currentPage === item.name || (currentPage === "new" && item.name === "home");
					// console.log(`Is "${item.name}" active?`, isActive); // Debugging line to check if the item is active
					const animetionDelay = `${0.4 + index * 0.4}s`;
					console.log("Animation delay for:", item.name, ':', animetionDelay); // Debugging line to check animation delay
					return (
						<li key={index}
						className={`nav-item ${isActive && 'active'} ${!isMobile?'flip-and-fade-in':undefined}`}
						style={{ animationDelay: animetionDelay }}>
							<Link to={item.link}
							className="nav-link tm-nav-link">{item.name}
								<span className="sr-only">(current)</span></Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export { NavigationBar };

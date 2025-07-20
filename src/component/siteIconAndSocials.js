import React from 'react';
import { Link } from 'react-router-dom';
import dafetite from '../myLogos/dafeWhiteTransp.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow,
	faFacebook, faFigma, faHashnode, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useIsMobile } from '../hooks/IsMobile';
import { wrblo } from '../entry/Entry';
// import dafe from '../myLogos/dafeWhiteTransp180pxy.png'

const socials = [
	{
		icon: faEnvelope,
		url: "mailto: ogagadafetite@gmail.com",
	},
	{
		icon: faGithub,
		url: "https://github.com/DafetiteOgaga",
	},
	{
		icon: faLinkedin,
		url: "https://www.linkedin.com/in/ogagadafetite/",
	},
	{
		icon: faTwitter,
		url: "https://x.com/dafetite_ogaga",
	},
	{
		icon: faFacebook,
		url: "https://web.facebook.com/ogaga01",
	},
	{
		icon: faStackOverflow,
		url: "https://stackoverflow.com/users/19809880/dafetite",
	},
	{
		icon: faMedium,
		url: "https://medium.com/@ogagadafetite",
	},
	{
		icon: faFigma,
		url: "https://www.figma.com/files/team/1371771369221734563/recents-and-sharing/recently-viewed?fuid=1371771366746349296",
	},
	{
		icon: faHashnode,
		url: "https://hashnode.com/@Dafetite",
	},
];

function SiteIconAndSocials() {
	const isMobile = useIsMobile();
	return (
		<div className="tm-col-left">
			<div className={`tm-site-header ${!isMobile?'media':undefined} left-slide-in`}>
				{/* <i className="fas fa-umbrella-beach fa-3x mt-1 tm-logo"></i> */}
				<Link to="/" style={{color: 'inherit'}} className="media-body icon-bar">
					{/* <h1 className="tm-sitename text-uppercase">diagoona</h1> */}
					<img src={dafetite} alt="Dafetite Ogaga" className="tm-sitename dafetite" />
					<p className="tm-slogon">{wrblo}</p>
				</Link>
			</div>
			{!isMobile && <Socials />}
		</div>
	)
}

function Socials () {
	const isMobile = useIsMobile();
	return (
		<div className='tm-site-header-socials right-fade-in'>
			{socials.map(({ icon, url }) => (
				<Link
				key={url}
				to={url}
				// to={'##none##'}
				className="icons"
				target="_blank"
				style={{
					color: 'inherit',
					padding: '0.5rem',
					borderRadius: 5,
				}}
				rel="noopener noreferrer">
					<FontAwesomeIcon
					key={url}
					className='awesome-icons'
					size="lg"
					icon={icon} />
				</Link>
			))}
		</div>
	)
}
export { SiteIconAndSocials, Socials }

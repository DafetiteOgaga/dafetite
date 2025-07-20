import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainIndex } from '../component/index';
import { Project } from '../component/project';
import { Videos } from '../component/videos';
import { Contact } from '../component/contact';
import { Home } from '../component/home';

function AppRoutes() {
	return (
		<Routes>
			{/* <Route path="/" element={<div />} /> */}
			{/* <Route path="new" element={<Index />} />
			<Route path="projects" element={<Project />} />
			<Route path="videos" element={<Vidoes />} />
			<Route path="contact" element={<Contact />} /> */}
			{/* <Route path="/Contact" element={<Contact />} />
			<Route path="/contact" element={<Contact />} /> */}
		

			<Route path="/" element={<MainIndex />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<Project />} />
				<Route path="videos" element={<Videos />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export {AppRoutes};

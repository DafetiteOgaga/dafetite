import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Index } from '../index';
import { Project } from '../project';
import { Services } from '../services';
import { Contact } from '../contact';
import { Home } from '../home';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<div />} />
			{/* <Route path="new" element={<Index />} />
			<Route path="projects" element={<Project />} />
			<Route path="services" element={<Services />} />
			<Route path="contact" element={<Contact />} /> */}
			{/* <Route path="/Contact" element={<Contact />} />
			<Route path="/contact" element={<Contact />} /> */}
		

			<Route path="new" element={<Index />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<Project />} />
				<Route path="services" element={<Services />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;

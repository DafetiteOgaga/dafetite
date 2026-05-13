import React from "react";
import { DateHook } from "../hooks/DateHook";

function Footer() {
	const { todayDay, todayDateWithSuffix, todayMonthName, todayYear } = DateHook();
	// const formattedDate = `${todayDay}, ${todayMonthName} ${todayDateWithSuffix}, ${todayYear}`;
	const formattedDate = `${todayYear}`;
	return (
		<div className="tm-col-right tm-col-footer">
			<footer className="tm-site-footer text-right italiced tm-footer-zindexed">
				<p className="mb-0">
					<span className="sup">
						&copy;
					</span>
					{formattedDate} All Rights Reserved | Dafetite
				</p>
			</footer>
		</div>
	)
}
export { Footer }

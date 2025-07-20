import React from "react";
import { DateHook } from "../hooks/DateHook";

function Footer() {
	const { todayDay, todayDateWithSuffix, todayMonthName, todayYear } = DateHook();
	const formattedDate = `${todayDay}, ${todayMonthName} ${todayDateWithSuffix}, ${todayYear}`;
	return (
		<div className="tm-col-right tm-col-footer">
			<footer className="tm-site-footer text-right italiced tm-footer-zindexed">
				<p className="mb-0">Copyright &copy; | {formattedDate} | Dafetite</p>
			</footer>
		</div>
	)
}
export { Footer }

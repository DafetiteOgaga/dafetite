import React from "react";
import { DateHook } from "../hooks/DateHook";

function Footer() {
	const { todayDay, todayDate, todayMonth, todayYear } = DateHook();
	const formattedDate = `${todayDay}, ${todayMonth} ${todayDate}, ${todayYear}`;
	return (
		<div className="tm-col-right tm-col-footer">
			<footer className="tm-site-footer text-right">
				<p className="mb-0">Copyright &copy; | {formattedDate} | Developed by Dafetite</p>
			</footer>
		</div>
	)
}
export { Footer }

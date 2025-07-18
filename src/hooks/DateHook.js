

function DateHook(date=new Date()) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const todayDate = date.getDate(); // 21
	const todayMonth = date.getMonth() + 1; // 9
	const todayYear = date.getFullYear(); // 2021
	const todayDay = days[date.getDay()]; // 'Monday'
	const todayHours = date.getHours(); // 12
	const todayMinutes = date.getMinutes(); // 30
	const todaySeconds = date.getSeconds(); // 15

	return {
		todayDate,
		todayMonth,
		todayYear,
		todayDay,
		todayHours,
		todayMinutes,
		todaySeconds
	}
}
export { DateHook }

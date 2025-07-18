

function DateHook(date=new Date()) {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const daySuffixes = ['th', 'st', 'nd', 'rd'];
	const getDaySuffix = (day) => {
		const suffixIndex = (day % 10 < 4 && Math.floor(day / 10) !== 1) ? day % 10 : 0;
		return daySuffixes[suffixIndex];
	};

	const todayDate = date.getDate(); // 21
	const todayDateWithSuffix = `${todayDate}${getDaySuffix(todayDate)}`; // '21st'
	const todayMonth = date.getMonth() + 1; // 9
	const todayMonthName = months[date.getMonth()]; // 'Sep'
	const todayYear = date.getFullYear(); // 2021
	const todayDay = days[date.getDay()]; // 'Monday'
	const todayHours = date.getHours(); // 12
	const todayMinutes = date.getMinutes(); // 30
	const todaySeconds = date.getSeconds(); // 15

	return {
		todayDate,
		todayDateWithSuffix,
		todayMonth,
		todayYear,
		todayDay,
		todayMonthName,
		todayHours,
		todayMinutes,
		todaySeconds
	}
}
export { DateHook }

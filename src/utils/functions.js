export function inputHandler(key, value) {
	this.setState({
		[key]: value,
	});

}

export function switchHandler(key, value) {
	this.setState({
		[key]: !value,
	});
}
export function getTodayAndCurrentTime() {
	let date = new Date();
	let today =
		date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
	let time = date.getHours() + "-" + date.getMinutes();
	return today + "-" + time
}


export default {
	inputHandler,
	switchHandler,
	getTodayAndCurrentTime,
};

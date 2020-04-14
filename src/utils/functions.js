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


export default {
	inputHandler,
	switchHandler,
};

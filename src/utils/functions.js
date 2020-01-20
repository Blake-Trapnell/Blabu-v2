
export function inputHandler (key, value) {
	this.setState({
		[key]: value
	}, console.log(this.state.flip))
};

export default {
	inputHandler,
};
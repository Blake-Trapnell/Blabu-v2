import axios from "axios";
import Swal from "sweetalert2";

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

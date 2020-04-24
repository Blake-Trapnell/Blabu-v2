import axios from "axios";
import functions from "./functions";

async function AddFunds(currency, user_id) {
	let time_stamp = functions.getTodayAndCurrentTime();
	let currentFunds = await axios.get(`/user/balance?user_id=${user_id}`);
	currentFunds =
		parseInt(currentFunds.data[0].fund_amount) + parseInt(currency);
	console.log("currency", currency, "currentFunds", currentFunds);
	let addedFunds = await axios.post("/user/add-balance", {
		user_id,
		currentFunds,
		time_stamp,
	});
}

export default {
	AddFunds,
};

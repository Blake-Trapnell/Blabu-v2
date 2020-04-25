import axios from "axios";
import functions from "./functions";

async function AddFunds(difference, user_id) {
	const time_stamp = functions.getTodayAndCurrentTime();
	const currentFunds = getCurrentFunds(user_id);
    const updatedFunds = updateFunds(currentFunds, difference)
	let addedFunds = await axios.post("/user/update-balance", {
		user_id,
		updatedFunds,
		time_stamp,
	});
}

const getCurrentFunds = async (user_id) => {
	return await axios.get(`/user/balance?user_id=${user_id}`);
};
const updateFunds = (currentFunds, difference) => {
	return parseInt(currentFunds) + parseInt(difference);
};

export default {
	AddFunds,
};

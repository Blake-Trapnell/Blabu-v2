import React from "react";
import "./bucketcreator.scss";


 const BucketCreator = () => {
	return (
		<div className="bucket-creator--outer-container">
			<div className="bucket-creator--dropdown">
				<select>
                    <option>Type</option>
					<option>Flat</option>
					<option>percent of total</option>
					<option>percent of current</option>
					<option>remainder</option>
				</select>
			</div>
			<h3>Initial Amount</h3>
			<input />
			<button>Create</button>
		</div>
	);
};

export default BucketCreator;
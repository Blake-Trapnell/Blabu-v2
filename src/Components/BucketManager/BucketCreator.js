import React, {Component} from "react";
import functions from "../../utils/functions.js";
import PlusIconSvg from "../SVG/PlusIconSvg.js";
import "./bucketcreator.scss";


 class BucketCreator extends Component  {
	 constructor(props) {
		 super(props)
		 this.state = {
			 type: "Flat",
			 flipped: false,
			 paymentType: "Manual",
		 }
		 this.inputHandler = functions.inputHandler.bind(this)
	 }
	render () {
		const {type, paymentType, flipped} = this.state
		const inputHandler = this.inputHandler
	return (
		<div className="bucket-creator--outer-container">
			<div className={`bucket-creator--card-container ${flipped}`}>
			<div onClick={()=> inputHandler("flipped", !flipped)} className="bucket-creator--card-front">
				<h3>Create new Bucket</h3>
					<PlusIconSvg/>
			</div>
			<div className="bucket-creator--card-back">
				<h3>Type</h3>
				<div className="bucket-creator--dropdown">
					<h5 className="bucket-creator--dropdown-selected">{type}</h5>
					<h5 onClick={()=> inputHandler("type", "Flat")} className="bucket-creator--dropdown-option">Flat</h5>
					<h5 onClick={()=> inputHandler("type", "Percentage of Total")} className="bucket-creator--dropdown-option">Percentage of deposit</h5>
					<h5 onClick={()=> inputHandler("type", "Percentage of Remaining")} className="bucket-creator--dropdown-option">Percentage of remaining</h5>
					<h5 onClick={()=> inputHandler("type", "Remainder")} className="bucket-creator--dropdown-option">Remainder</h5>
				</div>
				<h3>starting Amount</h3>
				<input placeholder="current funds"></input>
				<h3>Payment Type</h3>
				<div className="bucket-creator--dropdown">
					<h5 className="bucket-creator--dropdown-selected">{paymentType}</h5>
					<h5 onClick={()=> inputHandler("paymentType", "Manual")} className="bucket-creator--dropdown-option">Manual</h5>
					<h5 onClick={()=> inputHandler("paymentType", "Monthly")} className="bucket-creator--dropdown-option">Monthly</h5>
					<h5 onClick={()=> inputHandler("paymentType", "Quarterly")} className="bucket-creator--dropdown-option">Quarterly</h5>
					<h5 onClick={()=> inputHandler("paymentType", "Semi Yearly")} className="bucket-creator--dropdown-option">Semi Yearly</h5>
					<h5 onClick={()=> inputHandler("paymentType", "Yearly")} className="bucket-creator--dropdown-option">Yearly</h5>
				</div>
				<div className="bucket-creator--button-container">
					<button>Create</button>
					<button onClick={()=> inputHandler("flipped", !flipped)}>Cancel</button>
				</div>
			</div>
			</div>
		</div>
	);
};
};

export default BucketCreator;
import React, {Component} from "react";
import functions from "../../utils/functions.js";
import DropdownMenu from "../Utils/DropdownMenu.js";
import DropdownOptions from "../Utils/DropdownOptions.js";
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
				<DropdownMenu options ={DropdownOptions.BucketCreatorType} action={inputHandler} currentlySelected={type}/>
				<h3>starting Amount</h3>
				<input placeholder="current funds"></input>
				<DropdownMenu options ={DropdownOptions.BucketCreatorPaymentType} action={inputHandler} currentlySelected ={paymentType}/>
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
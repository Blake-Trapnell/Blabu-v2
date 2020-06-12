import React, {Component} from "react";
import functions from "../../utils/functions.js";
import DropdownMenu from "../Utils/DropdownMenu.js";
import DropdownOptions from "../Utils/DropdownOptions.js";
import {PlusIconSvg, CheckIconSvg, CloseIconSvg} from "../SVG/SVG.js";
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
			<div className="bucket-creator--card-back--outer">
				<div className="bucket-creator--card-back--inner">
					<DropdownMenu options ={DropdownOptions.BucketCreatorType} action={inputHandler} currentlySelected={type}/>
					<h3>Amount</h3>
					{type === "Remainder" ? null : 
					<div className="bucket-creator--amount-container">
					<input className="bucket-creator--input" onChange={(e)=>inputHandler("deposit amount", e.target.value)}/>
					{type === "Flat" ? <h3>$</h3> : <h3>%</h3>}
					</div>
					}
					<DropdownMenu options ={DropdownOptions.BucketCreatorPaymentType} action={inputHandler} currentlySelected ={paymentType}/>
					<div className="bucket-creator--button-container">
						<CheckIconSvg/>
						<CloseIconSvg onClick={()=> inputHandler("flipped", !flipped)}/>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};
};

export default BucketCreator;
import React, { Component } from "react";
import functions from "../../utils/functions.js";
import bucketFunctions from "../../utils/bucketFunctions.js";
import DropdownMenu from "../Utils/DropdownMenu.js";
import DropdownOptions from "../Utils/DropdownOptions.js";
import { PlusIconSvg, CheckIconSvg, CloseIconSvg } from "../SVG/SVG.js";
import "./bucketcreator.scss";

class BucketCreator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "Flat",
			flipped: false,
			paymentType: "Manual",
			goalAmount: 0,
			name: "",
		};
		this.inputHandler = functions.inputHandler.bind(this);
	}
	render() {
		const { type, paymentType, flipped } = this.state;
		const inputHandler = this.inputHandler;
		return (
			<div className="bucket-creator--outer-container">
				<div className={`bucket-creator--card-container ${flipped}`}>
					<div
						onClick={() => inputHandler("flipped", !flipped)}
						className="bucket-creator--card-front"
					>
						<div className="bucket-creator--card-front--inner">
							<h3>Create new Bucket</h3>
							<PlusIconSvg className="rainbow-icon bucket-creator--svg" />
						</div>
					</div>
					<div className="bucket-creator--card-back--outer">
						<div className="bucket-creator--card-back--inner">
							<h3>Name</h3>
							<input className="bucket-creator--input" type="text" onChange={(e)=>inputHandler("name", e.target.value)}/>
							<DropdownMenu
								options={DropdownOptions.BucketCreatorType}
								action={inputHandler}
								currentlySelected={type}
							/>
							<h3>Amount</h3>
							{type === "Remainder" ? null : (
								<div className="bucket-creator--amount-container">
									<input
										className="bucket-creator--input"
										onChange={(e) =>
											inputHandler(
												"goalAmount",
												e.target.value
											)
										}
									/>
									{type === "Flat" ? <h3>$</h3> : <h3>%</h3>}
								</div>
							)}
							<DropdownMenu
								options={
									DropdownOptions.BucketCreatorPaymentType
								}
								action={inputHandler}
								currentlySelected={paymentType}
							/>
							<div className="bucket-creator--button-container">
								<div className="bucket-creator--svg-container">
									<div onClick={()=>bucketFunctions.saveBucket(this.state)}>
									<CheckIconSvg  className="bucket-creator--svg" />
									</div>
								</div>
								<div
									className="bucket-creator--svg-container"
									onClick={() =>
										inputHandler("flipped", !flipped)
									}
								>
									<CloseIconSvg className="bucket-creator--svg" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BucketCreator;

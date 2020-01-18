import React, { Component } from "react";
import "./BucketController.scss";
import bucketFunctions from "../../utils/bucketFunctions.js";
import functions from "../../utils/functions";

export class BucketController extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.saveBucket = bucketFunctions.saveBucket.bind(this)
		this.inputHandler = functions.inputHandler.bind(this)
	}

	render() {

		return (
			<div className="bucket-controller--container">
				<h1 className="bucket-controller--h1">Bucket Name</h1>
				<input onChange={(e) => this.inputHandler("name", e.target.value)} />
				<h1 className="bucket-controller--h1">starting $</h1>
				<input onChange={(e) => this.inputHandler("starting", e.target.value)} />
				<h1 className="bucket-controller--h1">goal $</h1>
				<input onChange={(e) => this.inputHandler("goal", e.target.value)} />
				<button onClick={() => this.saveBucket(this.state)} className="bucket-controller--button">Create Bucket</button>
			</div>
		)
	};
};


export default BucketController
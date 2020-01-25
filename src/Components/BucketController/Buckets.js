import React, { Component } from "react";
import bucketFunctions from "../../utils/bucketFunctions.js";
import BucketController from "./BucketController.js";
import functions from "../../utils/functions.js";
import axios from "axios";
import "./Buckets.scss"

export default class Buckets extends Component {
	constructor(props) {
		super(props)
		this.state = {
			buckets: [],
			flip: false,
		}
		this.removeBucket = bucketFunctions.removeBucket.bind(this)
		this.inputHandler = functions.inputHandler.bind(this)
	}
	async componentDidMount() {
		let buckets = await axios.post(`/user/buckets`, this.props.user_id)
		buckets = buckets.data
		this.setState({
			buckets,
			controller: false,
		});
	};

	render() {
		const { buckets } = this.state
		return (
			<div className="buckets--outer-container">
				{buckets ?
					buckets.map((el, i) => {
						let containerWidth = 200
						let percentage = (el.current_amount / el.goal_amount)
						if (percentage > 1) {
							percentage = 1
						}
						const innerStyle = {
							width: percentage * containerWidth,
						}
						const outerStyle = {
							width: containerWidth
						}
						return (

							<div className="buckets--flip-card">
							<div className={this.state[i] ? "buckets--flip-card-inner-flipped" : "buckets--flip-card-inner"} >
							  <div class="buckets--flip-card-front">
								  <div className="buckets--goal-bar">
							  <div className="buckets--goal-inner" style={innerStyle}></div>
							<div className="buckets--goal-outer" style={outerStyle}></div>
								  </div>
										<h1>{el.name}</h1>
										<div className="buckets--button-container">
											<button className="btn--blue" onClick={() => this.removeBucket(el.bucket_id, i)}>Deposit</button>
											<button className="btn--blue" onClick={() => this.removeBucket(el.bucket_id, i)}>Withdraw</button>
											<button className="btn--blue" onClick={() => this.removeBucket(el.bucket_id, i)}>Transfer</button>
											<button className="btn--blue" onClick={() => {this.inputHandler(i, !this.state[i])}}>Edit</button>
										</div>
							  </div>
							  <div class="buckets--flip-card-back">
							  <button className="btn--blue" onClick={() => {this.inputHandler(i, !this.state[i])}}>back</button>
							  </div>
							</div>
						  </div>
						)
					})
					:
					<h1>Loading</h1>
				}
			</div>
		);
	};
}
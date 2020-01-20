import React, { Component } from "react";
import bucketFunctions from "../../utils/bucketFunctions.js";
import axios from "axios";
import "./Buckets.scss"

export default class Buckets extends Component {
	constructor(props) {
		super(props)
		this.state = {
			buckets: [],
		}
		this.removeBucket = bucketFunctions.removeBucket.bind(this)
	}
	async componentDidMount() {
		let buckets = await axios.post(`/user/buckets`, this.props.user_id)
		buckets = buckets.data
		this.setState({
			buckets,
		});
	};


	render() {
		const { buckets } = this.state
		return (
			<div className="buckets--outer-container">
				{buckets ?
					buckets.map((el, i) => {
						let percentage = 180 * (el.current_amount / el.goal_amount)
						if (percentage >= 180) {
							percentage = 180
						}
						const innerStyle = {
							width: percentage
						}
						return (
							<div className="buckets--inner-container" key={i}>
								<div className="buckets--goal-outer">
									<div className="buckets--goal-inner" style={innerStyle}>
										<h5 className="buckets--amount">{el.current_amount}</h5>
									</div>
									<h5 className="buckets--amount">{el.goal_amount}</h5>
								</div>
								<h1>{el.name}</h1>
								<div className="buckets--button-container">
								<button className="btn--blue" onClick={() => this.removeBucket(el.bucket_id, i)}>Deposit</button>
								<button className="btn--blue" onClick={() => this.removeBucket(el.bucket_id, i)}>Withdraw</button>
								<button className="btn--blue" onClick={() => this.removeBucket(el.bucket_id, i)}>Transfer</button>									
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
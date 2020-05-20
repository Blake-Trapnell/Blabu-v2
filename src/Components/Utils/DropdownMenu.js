import React from "react"
import "./dropdownMenu.scss";

const DropdownMenu = (props) => {
	return (
		<div className="dropdown-menu--outer-container">
			<h3>{props.options.stateName}</h3>
			<div className="dropdown-menu">
				<h5 className="dropdown-menu--selected">{props.currentlySelected}</h5>
				{props.options.name.map((el, i) => {
					return (
						<h5 key={i}
							className="dropdown-menu--option"
							onClick={() => props.action(props.options.stateName, el)}
						>
							{el}
						</h5>
					);
				})}
			</div>
		</div>
	);
};

export default DropdownMenu;
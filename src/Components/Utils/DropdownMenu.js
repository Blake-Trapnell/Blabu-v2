import React from "react";
import "./dropdownMenu.scss";

const DropdownMenu = (props) => {
	return (
		<div className="dropdown-menu--outer-container">
			<h3>{props.options.stateName}</h3>
			<div className="dropdown-menu">
				<div className="dropdown-menu--selected--container">
					<h5 className="dropdown-menu--selected">
						{props.currentlySelected}
					</h5>
					<div className="dropdown-menu--option-container">
						{props.options.name.map((el, i) => {
							return (
								<h5
									key={i}
									className="dropdown-menu--option"
									onClick={() =>
										props.action(
											props.options.stateName,
											el
										)
									}
								>
									{el}
								</h5>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropdownMenu;

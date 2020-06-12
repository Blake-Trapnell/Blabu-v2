const DropdownOptions = {
	BucketCreatorType: {
		stateName: "type",
		name: [
			"Flat",
			"Percentage of total deposit",
			"Percentage of remaining funds",
			"all of Remaining funds",
		],
	},
	BucketCreatorPaymentType: {
		stateName: "paymentType",
		name: ["Manual", "Monthly", "Quarterly", "Bi Annual", "Annual"],
	},
};

export default DropdownOptions;

/** @format */

export const getCategoryPic = (category) => {
	switch (category) {
		case "Electronics":
			return "https://static.thenounproject.com/attribution/2029891-600.png";
		case "Furniture":
			return "https://static.thenounproject.com/attribution/1183882-600.png";
		case "Apparel":
			return "https://static.thenounproject.com/attribution/5345875-600.png";
		case "Footwear":
			return "https://static.thenounproject.com/attribution/3108680-600.png";
		case "Appliances":
			return "https://static.thenounproject.com/attribution/4998191-600.png";
		case "Stationary":
			return "https://static.thenounproject.com/attribution/2219411-600.png";
		default:
			return "https://static.thenounproject.com/attribution/4154970-600.png";
	}
};

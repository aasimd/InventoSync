/** @format */

import { getCategoryPic } from "../../../utils/functions";

export const ItemCategoryPic = ({ category }) => {
	return <img src={getCategoryPic(category)} alt={category} title={category} />;
};

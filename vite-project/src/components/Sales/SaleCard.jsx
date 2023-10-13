/** @format */

export const SaleCard = ({ sale, index }) => {
	const { name, category, _id, createdAt, amount } = sale;
	return (
		<div>
			<table>
				<th>Order Number</th>
				<tr>
					<td>{index}</td>
				</tr>
				<tr></tr>
			</table>
		</div>
	);
};

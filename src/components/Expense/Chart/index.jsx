import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ dateExpensesList }) {
	const dataMaxValue = dateExpensesList.map((expense) => expense.value);
	const totalMaximum = Math.max(...dataMaxValue);

	const dataCharts = dateExpensesList.map((data) => (
		<ChartBar
			key={data.label}
			value={data.value}
			maxValue={totalMaximum}
			label={data.label}
		/>
	));

	return <div className="chart">{dataCharts}</div>;
}

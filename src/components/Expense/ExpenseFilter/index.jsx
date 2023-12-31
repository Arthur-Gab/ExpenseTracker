import "./ExpenseFilter.css";

export default function ExpenseFilter({ selectedYear, onChangeFilter }) {
	function handlerOnChange(e) {
		onChangeFilter(e.target.value);
	}

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select onChange={handlerOnChange} value={selectedYear}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
}

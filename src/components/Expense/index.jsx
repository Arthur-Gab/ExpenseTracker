import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

export default function Expenses({ onExpenseList }) {
	const [filteredYear, setFilteredYear] = useState("2022");

	function handlerOnChangeFilter(selectedYear) {
		setFilteredYear(selectedYear);
	}

	const expenseListFiltered = onExpenseList.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	const expenseListItem = expenseListFiltered.map((expense) => (
		<ExpenseItem
			key={expense.id}
			date={expense.date}
			title={expense.title}
			amount={expense.amount}
		/>
	));

	return (
		<div className="expenses">
			<ExpenseFilter
				selectedYear={filteredYear}
				onChangeFilter={handlerOnChangeFilter}
			/>
			{expenseListItem}
		</div>
	);
}

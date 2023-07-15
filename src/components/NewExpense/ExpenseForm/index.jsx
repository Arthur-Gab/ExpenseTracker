import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onSaveExpenseData }) {
	const [expense, setExpense] = useState({
		title: "",
		amount: "",
		date: "",
	});

	function handlerChange(e) {
		setExpense({
			...expense,
			[e.target.name]: e.target.value,
		});
	}

	function handlerSubmit(e) {
		e.preventDefault();

		// 2022-12-01
		const [year, month, day] = expense.date.split("-");

		// console.log(year); 2022
		// console.log(month); 12 (0,1,2,3,4,5,6,7,8,9,10,11)
		// console.log(day); 01
		const expenseData = {
			...expense,
			date: new Date(year, month - 1, day),
		};

		// Send expense data to NewExpense.jsx
		onSaveExpenseData(expenseData);

		setExpense({
			title: "",
			amount: "",
			date: "",
		});
	}

	return (
		<form onSubmit={handlerSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						name="title"
						onChange={handlerChange}
						value={expense.title}
						required
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						id="amount"
						name="amount"
						onChange={handlerChange}
						min={0.01}
						step={0.01}
						value={expense.amount}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						id="date"
						name="date"
						onChange={handlerChange}
						min={`2019-01-01`}
						max={`2022-12-31`}
						value={expense.date}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}
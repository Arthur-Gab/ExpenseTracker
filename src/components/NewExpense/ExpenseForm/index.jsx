import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ saveExpenseData, isOpen }) {
	const [expense, setExpense] = useState({
		title: "",
		amount: "",
		date: "",
	});

	// Atualizar os valores da expense com base no title do input
	function handlerChange(e) {
		setExpense((prevExpense) => {
			return { ...prevExpense, [e.target.name]: e.target.value };
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
			// Trasnformar a string em number
			amount: parseFloat(expense.amount),
			date: new Date(year, month - 1, day),
		};

		// Send expense data to NewExpense.jsx
		saveExpenseData(expenseData);

		handlerCleanForm();
	}

	/* Limpar as entradas do formulário 
	e focar no title para criar outra despesa mais rápidamente*/
	function handlerCleanForm() {
		setExpense({
			title: "",
			amount: "",
			date: "",
		});

		document.querySelector("#title").focus();
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
						autoFocus
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
						required
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
						required
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				{/* Close the form */}
				<button type="button" onClick={isOpen}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

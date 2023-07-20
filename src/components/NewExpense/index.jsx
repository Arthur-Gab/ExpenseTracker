import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ expenseDataPush, nextID }) {
	// Controlar se o formulário aparece ou não
	const [isOpen, setIsOpen] = useState(false);

	function handlerIsOpenForm() {
		setIsOpen(!isOpen);
	}

	function handlerSaveExpenseData(expenseDataEntered) {
		const expenseData = {
			id: nextID,
			...expenseDataEntered,
		};
		// Sand expense data to App.jsx
		expenseDataPush(expenseData);
	}

	// Variavel destinada a conter o formulário XOR (ou exclusivo) o botão
	let form = (
		<ExpenseForm
			saveExpenseData={handlerSaveExpenseData}
			isOpen={handlerIsOpenForm}
		/>
	);
	if (!isOpen) {
		form = <button onClick={handlerIsOpenForm}>Add New Expense</button>;
	}

	return <div className="new-expense">{form}</div>;
}

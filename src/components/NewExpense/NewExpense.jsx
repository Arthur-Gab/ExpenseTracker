import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ onExpenseDataPush }) {
	function handlerSaveExpense(expenseDataEntered) {
		const expenseData = {
			...expenseDataEntered,
			id: Math.random().toString(),
		};
		// Sand expense data to App.jsx
		onExpenseDataPush(expenseData);
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={handlerSaveExpense} />
		</div>
	);
}

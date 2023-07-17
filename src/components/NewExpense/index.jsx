import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ expenseDataPush, nextID }) {
	function handlerSaveExpenseData(expenseDataEntered) {
		const expenseData = {
			id: nextID,
			...expenseDataEntered,
		};
		// Sand expense data to App.jsx
		expenseDataPush(expenseData);
	}

	return (
		<div className="new-expense">
			<ExpenseForm saveExpenseData={handlerSaveExpenseData} />
		</div>
	);
}

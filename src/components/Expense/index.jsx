import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ onExpenseList }) {
	const expenseListItem = onExpenseList.map((expense) => (
		<ExpenseItem
			key={expense.id}
			date={expense.date}
			title={expense.title}
			amount={expense.amount}
		/>
	));

	return <div className="expenses">{expenseListItem}</div>;
}

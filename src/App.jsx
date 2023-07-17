import "./App.css";
import "./normalize.css";
import Expenses from "./components/Expense";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

const EXPENSES = [
	{
		id: 1,
		title: "Coffee",
		amount: 1.05,
		date: new Date(2020, 1, 9),
	},
	{
		id: 2,
		title: "Toilet papper",
		amount: 2.75,
		date: new Date(2021, 6, 26),
	},
	{
		id: 3,
		title: "Tomato",
		amount: 5.5,
		date: new Date(2019, 8, 1),
	},
	{
		id: 4,
		title: "Rice",
		amount: 11.05,
		date: new Date(2022, 4, 15),
	},
];

export default function App() {
	const [expenses, setExpenses] = useState(EXPENSES);
	/*
	Receive expenses data for NewExpense.jsx 
	and push/add into the BD of expense
	*/
	function handlerExpenseDataPush(expense) {
		setExpenses((prevExpense) => [...prevExpense, expense]);
	}

	return (
		<>
			<NewExpense
				expenseDataPush={handlerExpenseDataPush}
				nextID={expenses.length + 1}
			/>
			<Expenses expenseList={expenses} />
		</>
	);
}

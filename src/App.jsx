import "./App.css";
import "./normalize.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
		date: new Date(2021, 8, 1),
	},
	{
		id: 4,
		title: "Rice",
		amount: 11.05,
		date: new Date(2022, 4, 15),
	},
];

/*
Receive expenses data for NewExpense.jsx 
and push/add into the BD of expense
*/
function handlerExpenseDataPush(expense) {
	console.log("In App.js");
	console.log(expense);
}

export default function App() {
	return (
		<>
			<NewExpense onExpenseDataPush={handlerExpenseDataPush} />
			<Expenses onExpenseList={EXPENSES} />
		</>
	);
}

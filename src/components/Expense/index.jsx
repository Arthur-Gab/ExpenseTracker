import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

// Mostrar despesas com base no ano selecionado
export default function Expenses({ expenseList }) {
	// useState destinado a manter e atualizar o valor do ano selecionado
	const [filteredYear, setFilteredYear] = useState("2022");

	// Captura a mudança do ano selecionado
	function handlerOnChangeFilter(selectedYear) {
		setFilteredYear(selectedYear);
	}

	// Filtra a lista com base no ano selecionado (filteredYear)
	const expenseListFiltered = expenseList.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// Cria a lista de de despesa dinamicamente com base no array filtrado pela lógica acima ↑ (expeseListFiltered)
	// E a armazenar na variavél abaixo
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

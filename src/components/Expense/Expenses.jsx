import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expenseList }) {
  return (
    <div className="expenses">
      {expenseList.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
}

import "./ExpenseDate.css";

export default function ExpenseDate({ date }) {
  let MONTH = date.toLocaleString("pt-BR", { month: "long" });
  MONTH = MONTH.charAt(0).toUpperCase() + MONTH.slice(1);
  const YEAR = date.getFullYear();
  const DAY = date.toLocaleString("pt-BR", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{MONTH}</div>
      <div className="expense-date__year">{YEAR}</div>
      <div className="expense-date__day">{DAY}</div>
    </div>
  );
}

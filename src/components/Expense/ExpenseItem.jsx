import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
  const [updtTitle, setUpdtTitle] = useState(title);

  function handlerClick() {
    setUpdtTitle("Updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{updtTitle}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
      <button onClick={handlerClick}>Change Title</button>
    </Card>
  );
}

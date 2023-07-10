import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function handlerTitle(e) {
        setTitle(e.target.value);
    }
    function handlerAmount(e) {
        setAmount(e.target.value);
    }
    function handlerDate(e) {
        setDate(e.target.value);
    }
    
    return (
      <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={handlerTitle} value={title}/>
        </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" onChange={handlerAmount} min={0.01} step={0.01} value={amount}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" onChange={handlerDate} min={`2019-01-01`} max={`2022-12-31`} value={date}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
  
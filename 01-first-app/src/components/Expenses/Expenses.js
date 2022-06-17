import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;

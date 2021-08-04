import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	return (
		<div>
			<div className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</div>
		</div>
	);
}

export default Expenses;

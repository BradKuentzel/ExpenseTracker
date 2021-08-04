import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const expenses = [
		{
			id: 1,
			title: "Car Insurance",
			amount: 95.77,
			date: new Date(2021, 7, 12),
		},
		{ id: 2, title: "StarBucks", amount: 15.65, date: new Date(2021, 7, 12) },
		{
			id: 3,
			title: "Credit Card Payment",
			amount: 200.0,
			date: new Date(2021, 7, 26),
		},
		{ id: 4, title: "Netflix", amount: 10.75, date: new Date(2021, 7, 12) },
	];

	const addExpenseHandler = (expense) => {
		console.log("In App.js");
		console.log(expense);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;

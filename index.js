let table = document.getElementById("expense-table");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let expenseName = document.getElementById("expense-name").value;
  let expenseValue = document.getElementById("expense-value").value;

  if (expenseName.length == 0 || expenseValue.length == 0) return;

  const expense = {
    expenseName,
    expenseValue,
    id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("form").reset();

  showExpenses();
});

const showExpenses = () => {
  const expenseTable = document.getElementById("table");
  expenseTable.innerHTML = "";

  if (expenses.length > 0) {
    expenseTable.appendChild(createDataRow(expenses[i]));
  } else {
    expenseTable.appendChild(createEmptyRow());
  }
};

const createEmptyRow = () => {
  const expenseRowElement = document.createElement("TR");
  const expenseTDElement = document.createElement("TD");

  expenseTDElement.setAttribute("colspan", 5);
  expenseTDElement.textContent = "No Expenses Yet!";

  expenseRowElement.appendChild(expenseTDElement);

  return expenseRowElement;
};

const createDataRow = (expense) => {
  const expenseRowElement = document.createElement("TR");
  const expenseTDElement = document.createElement("TD");


};

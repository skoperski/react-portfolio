import { useState } from "react";
import "../../styles/home-budget.css";
import "../../styles/variables.css";

export const HomeBudget = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeValue, setIncomeValue] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [incomeMsg, setIncomeMsg] = useState("");
  const [expenseMsg, setExpenseMsg] = useState("");

  const sum = (arr) => {
    return arr.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  };

  const renderIncome = () => {
    return incomes.map((item) => (
      <li key={item.id} className="flex flex--space-between budget__list__item">
        {item.isEditable ? (
          <>
            <div className="item">
              <input
                className="budget__edit__input"
                type="text"
                value={item.editName}
                onChange={(e) => setEditedIncomeName(item.id, e.target.value)}
              />
              <input
                className="budget__edit__input"
                type="number"
                value={item.editAmount}
                onChange={(e) => setEditedIncomeAmount(item.id, e.target.value)}
              />
              PLN
            </div>
            <div className="budget__list__item__buttons__wrapper">
              <button
                className="budget__list__item__button budget__list__item__button--edit"
                onClick={() => confirmIncomeEditItem(item.id)}>
                Yes
              </button>
              <button
                className="budget__list__item__button budget__list__item__button--delete"
                onClick={() => toggleIncomeItemEditable(item.id)}>
                No
              </button>
            </div>
          </>
        ) : (
          <>
            {item.name} - {item.amount} PLN
            <div className="budget__list__item__buttons__wrapper">
              <button
                className="budget__list__item__button budget__list__item__button--edit"
                onClick={() => toggleIncomeItemEditable(item.id)}>
                Edit
              </button>
              <button
                className="budget__list__item__button budget__list__item__button--delete"
                onClick={() => removeIncomeItem(item.id)}>
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    ));
  };

  const renderExpense = () => {
    return expenses.map((item) => (
      <li key={item.id} className="flex flex--space-between budget__list__item">
        {item.isEditable ? (
          <>
            <div className="item">
              <input
                className="budget__edit__input"
                type="text"
                value={item.editName}
                onChange={(e) => setEditedExpenseName(item.id, e.target.value)}
              />
              <input
                className="budget__edit__input"
                type="number"
                value={item.editAmount}
                onChange={(e) =>
                  setEditedExpenseAmount(item.id, e.target.value)
                }
              />
              PLN
            </div>
            <div className="budget__list__item__buttons__wrapper">
              <button
                className="budget__list__item__button budget__list__item__button--edit"
                onClick={() => confirmExpenseEditItem(item.id)}>
                Yes
              </button>
              <button
                className="budget__list__item__button budget__list__item__button--delete"
                onClick={() => toggleExpenseItemEditable(item.id)}>
                No
              </button>
            </div>
          </>
        ) : (
          <>
            {item.name} - {item.amount} PLN
            <div className="budget__list__item__buttons__wrapper">
              <button
                className="budget__list__item__button budget__list__item__button--edit"
                onClick={() => toggleExpenseItemEditable(item.id)}>
                Edit
              </button>
              <button
                className="budget__list__item__button budget__list__item__button--delete"
                onClick={() => removeExpenseItem(item.id)}>
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    ));
  };

  const setEditedIncomeName = (id, newName) => {
    setIncomes((prevIncomes) =>
      prevIncomes.map((item) =>
        item.id === id ? { ...item, editName: newName } : item
      )
    );
  };

  const setEditedIncomeAmount = (id, newAmount) => {
    setIncomes((prevIncomes) =>
      prevIncomes.map((item) =>
        item.id === id ? { ...item, editAmount: Number(newAmount) } : item
      )
    );
  };

  const confirmIncomeEditItem = (id) => {
    const item = incomes.find((income) => income.id === id);
    const newName = item.editName;
    const newAmount = item.editAmount;

    setIncomes((prevIncomes) =>
      prevIncomes.map((income) =>
        income.id === id
          ? { ...income, name: newName, amount: newAmount, isEditable: false }
          : income
      )
    );
  };

  const setEditedExpenseName = (id, newName) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((item) =>
        item.id === id ? { ...item, editName: newName } : item
      )
    );
  };

  const setEditedExpenseAmount = (id, newAmount) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((item) =>
        item.id === id ? { ...item, editAmount: Number(newAmount) } : item
      )
    );
  };

  const confirmExpenseEditItem = (id) => {
    const item = expenses.find((expense) => expense.id === id);
    const newName = item.editName;
    const newAmount = item.editAmount;

    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id
          ? { ...expense, name: newName, amount: newAmount, isEditable: false }
          : expense
      )
    );
  };

  const toggleIncomeItemEditable = (id) => {
    setIncomes((prevIncomes) =>
      prevIncomes.map((item) =>
        item.id === id
          ? {
              ...item,
              isEditable: !item.isEditable,
              editName: item.name,
              editAmount: item.amount,
            }
          : item
      )
    );
  };

  const toggleExpenseItemEditable = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((item) =>
        item.id === id
          ? {
              ...item,
              isEditable: !item.isEditable,
              editName: item.name,
              editAmount: item.amount,
            }
          : item
      )
    );
  };

  const removeIncomeItem = (id) => {
    setIncomes((prevIncomes) =>
      prevIncomes.filter((income) => income.id !== id)
    );
  };

  const removeExpenseItem = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const addNewIncomeItem = (e) => {
    e.preventDefault();

    if (incomeTitle === "" || incomeValue === "") {
      setIncomeMsg("Name or value missing");
    } else {
      const newItem = {
        id: incomes.length + 1,
        name: incomeTitle,
        amount: Number(incomeValue),
        isEditable: false,
        editName: "",
        editAmount: 0,
      };

      setIncomes((prevIncomes) => [...prevIncomes, newItem]);
      setIncomeMsg("");
      setIncomeTitle("");
      setIncomeValue("");
    }
  };

  const addNewExpenseItem = (e) => {
    e.preventDefault();

    if (expenseTitle === "" || expenseValue === "") {
      setExpenseMsg("Name or value missing");
    } else {
      const newItem = {
        id: expenses.length + 1,
        name: expenseTitle,
        amount: Number(expenseValue),
        isEditable: false,
        editName: "",
        editAmount: 0,
      };

      setExpenses((prevExpenses) => [...prevExpenses, newItem]);
      setExpenseMsg("");
      setExpenseTitle("");
      setExpenseValue("");
    }
  };

  const finalResult = sum(incomes) - sum(expenses);
  const budgetMsg = () => {
    if (finalResult > 0) {
      return `You can still spend ${finalResult.toFixed(2)}`;
    } else if (finalResult < 0) {
      return `Your balance is negative. You are missing ${finalResult.toFixed(
        2
      )}`;
    } else {
      return `Your balance is ${finalResult.toFixed(2)}`;
    }
  };

  return (
    <>
      <div className="budget__background">
        <div className="budget__container">
          <header>
            <h1 className="text--center budget__h1">Home budget</h1>
            <div className="app__logo">
              <img src="/public/budget.png" alt="Budget" />
            </div>
            <div
              id="budgetState"
              className="budget__state budget__state--success">
              <p className="text--center">
                <span id="budgetValue">{budgetMsg()}</span> PLN
              </p>
            </div>
          </header>
          <section className="flex flex--space-between budget__list__wrapper">
            <div className="budget__incomes">
              <h2 className="budget__list__header incomes__header budget__h2">
                Incomes
              </h2>
              <form
                id="incomeForm"
                className="budget__list__form"
                onSubmit={addNewIncomeItem}>
                <input
                  type="text"
                  id="incomeTitle"
                  className="budget__list__form__input budget__list__form__input--text budget__input"
                  placeholder="name"
                  value={incomeTitle}
                  onChange={(e) => setIncomeTitle(e.target.value)}
                />
                <input
                  type="number"
                  id="incomeValue"
                  className="budget__list__form__input budget__list__form__input--number budget__input"
                  placeholder="value"
                  value={incomeValue}
                  onChange={(e) => setIncomeValue(e.target.value)}
                />
                <input
                  type="submit"
                  id="incomeSubmit"
                  value="Add"
                  className="budget__list__form__input__button"
                />
                <div id="incomeMsg" className="budget__list__form_msg">
                  {incomeMsg}
                </div>
              </form>
              <ul id="incomesList" className="budget__list">
                {renderIncome()}
              </ul>
              <p className="budget__list__summary">
                Incomes sum:{" "}
                <span id="incomesValue" type="number">
                  {sum(incomes).toFixed(2)}
                </span>{" "}
                PLN
              </p>
            </div>
            <div className="budget__expenses">
              <h2 className="budget__list__header expenses__header budget__h2">
                Expenses
              </h2>
              <form
                id="expenseForm"
                className="budget__list__form"
                onSubmit={addNewExpenseItem}>
                <input
                  type="text"
                  id="expenseTitle"
                  className="budget__list__form__input budget__list__form__input--text budget__input"
                  placeholder="name"
                  value={expenseTitle}
                  onChange={(e) => setExpenseTitle(e.target.value)}
                />
                <input
                  type="number"
                  id="expenseValue"
                  className="budget__list__form__input budget__list__form__input--number budget__input"
                  placeholder="value"
                  value={expenseValue}
                  onChange={(e) => setExpenseValue(e.target.value)}
                />
                <input
                  type="submit"
                  id="expenseSubmit"
                  value="Add"
                  className="budget__list__form__input__button"
                />
                <div id="expenseMsg" className="budget__list__form_msg">
                  {expenseMsg}
                </div>
              </form>
              <ul id="expensesList" className="budget__list">
                {renderExpense()}
              </ul>
              <p className="budget__list__summary">
                Expenses sum:{" "}
                <span id="expensesValue">{sum(expenses).toFixed(2)}</span> PLN
              </p>
            </div>
          </section>
        </div>
        <footer className="budget__footer">
          <a
            className="icon__credentials"
            href="https://www.flaticon.com/free-icons/accounting"
            title="accounting icons">
            Accounting icons created by Eucalyp - Flaticon
          </a>
        </footer>
      </div>
    </>
  );
};

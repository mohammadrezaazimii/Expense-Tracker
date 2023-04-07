/** @format */

import React from "react";
import styles from "./App.module.css";
import "./general.css";
import ExpenseApp from "./components/ExpenseApp/ExpenseApp";

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <h1>Expense Tracker</h1>
      </header>
      <ExpenseApp/>
    </div>
  );
};
export default App;

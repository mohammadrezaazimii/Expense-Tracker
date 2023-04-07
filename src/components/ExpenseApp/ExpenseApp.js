import React, { useEffect, useState } from "react";
import OverView from "./Overview/OverView";
import TransActions from "./TransActions/TransActions";
import styles from "./ExpenseApp.module.css";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transActions, setTransActions] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    searchTransaction(search);
  }, [transActions]);
  const addTransAction = (transAction) => {
    setTransActions([...transActions, { ...transAction, id: Date.now() }]);
    if (transAction.type === "expense") {
      setExpense((preExpense) => preExpense + Number(transAction.amount));
    } else if (transAction.type === "income") {
      setIncome((preIncome) => preIncome + Number(transAction.amount));
    }
  };
  const searchTransaction = (search) => {
    console.log(search);
    const filteredTransaction = transActions.filter((transAction) =>
      transAction.desc.includes(search)
    );
    setFiltered(filteredTransaction);
  };
  return (
    <section className={styles.container}>
      <OverView
        addTransAction={addTransAction}
        income={income}
        expense={expense}
      />
      <TransActions
        search={search}
        setSearch={setSearch}
        searchTransaction={searchTransaction}
        filtered={filtered}
        transActions={transActions}
      />
    </section>
  );
};
export default ExpenseApp;

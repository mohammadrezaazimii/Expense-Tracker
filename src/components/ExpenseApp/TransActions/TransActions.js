import React, { useState } from "react";
import styles from "./transActions.module.css";
const TransActions = ({
  filtered,
  transActions,
  searchTransaction,
  setSearch,
  search,
}) => {
  const changeHandler = (e) => {
    setSearch(e.target.value);
    searchTransaction(e.target.value);
  };
  const render = () => {
    if (!filtered.length && !transActions.length) return <div>Add some transActions!</div>;
    else if(!filtered.length && transActions.length ) return <div>No such Item match</div>
    else {
      return filtered.map((transAction) => (
        <div
          key={transAction.id}
          className={`${styles.transAction} ${
            transAction.type === "expense" ? styles.expense : styles.income
          }`}
        >
          <p>{transAction.desc}</p>
          <p>{transAction.amount} $</p>
        </div>
      ));
    }
  };

  return (
    <section className={styles.container}>
      <input
        type="text"
        placeholder="Search into Transactions"
        value={search}
        onChange={changeHandler}
        className={styles.search}
      />
      {render()}
    </section>
  );
};

export default TransActions;

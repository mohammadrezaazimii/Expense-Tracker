import React, { useState } from "react";
import styles from "./OverView.module.css";
import TransActionsForm from "../TransActionsForm/TransActionsForm";
const OverView = ({ income, expense, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  let amount_character = income > expense ? "+" : income < expense ? "-" : "";
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <p
          className={
            income > expense
              ? styles.income
              : income < expense
              ? styles.expense
              : ""
          }
        >
          Balance:
          <b>
            {" "}
            {amount_character} {Math.abs(income - expense)} $
          </b>
        </p>
        <button className={`${styles.btn} ${isShow? styles.cancel:''} `} onClick={() => setIsShow(!isShow)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>

      {isShow && <TransActionsForm addTransAction={addTransAction} />}

      <div className={styles.resultSection}>
        <p className={styles.amount_price}>
          Expense:{" "}
          <span className={styles.amount + " " + styles.expense}>
            {expense} $
          </span>
        </p>
        <p className={styles.amount_price}> 
          Income:
          <span className={styles.amount + " " + styles.income}>
            {income} $
          </span>
        </p>
      </div>
    </div>
  );
};

export default OverView;

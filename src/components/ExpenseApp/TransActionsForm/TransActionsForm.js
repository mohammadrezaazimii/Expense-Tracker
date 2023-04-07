import React, { useEffect, useRef, useState } from "react";
import styles from "./TransAcionForm.module.css";
const TransActionsForm = ({ addTransAction }) => {
  const inputRef = useRef(null);
  const [transActionData, setTransActionData] = useState({
    desc: "",
    amount: "",
    type: "expense",
  });

  useEffect(() => {
    inputRef.current.focus();
  }, [transActionData.desc]);

  const changeHandler = (e) => {
    setTransActionData({ ...transActionData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!transActionData.amount || !transActionData.desc) {
      alert("Please Enter the amount and desc");
      return;
    }
    addTransAction(transActionData);
    setTransActionData({
      desc: "",
      amount: "",
      type: transActionData.type,
    });
  };
  return (
    <div>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <input
          ref={inputRef}
          placeholder="Enter Decrpiction"
          value={transActionData.desc}
          onChange={changeHandler}
          type="text"
          name="desc"
        />

        <input
          placeholder="Enter Amount"
          value={transActionData.amount}
          onChange={changeHandler}
          type="number"
          name="amount"
        />
        
        <div onChange={changeHandler} className={styles.radio_btn_container}>
          <div className={styles.radio_btn}>
            <input
              type="radio"
              value="expense"
              name="type"
              checked={transActionData.type === "expense"}
              id="expense"
            />
            <label htmlFor="expense">Expense</label>
          </div>
          <div className={styles.radio_btn}>
            <input
              type="radio"
              value="income"
              name="type"
              checked={transActionData.type === "income"}
              id="income"
            />
            <label htmlFor="income">Income</label>
          </div>
        </div>
        <button className={styles.btn} type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransActionsForm;

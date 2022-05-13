import React, { useState, useEffect } from "react";

const Balance = () => {
  const [totalAmount, setTotalAmount] = useState();
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();

  useEffect(() => {
    // getting data from localStorage
    const data = JSON.parse(localStorage.getItem("transaction"));
    // extracting amount from data
    const amount = !data ? [] : data.map((e) => parseInt(e.transAmount));
    // console.log({ amount });
    // converting string array to number array
    const numArr = [];
    amount.forEach((str) => {
      numArr.push(Number(str));
    });
    // console.log({ numArr });
    // adding amount values
    const filtered = numArr.reduce((a, b) => {
      return (a += b);
    }, 0);
    console.log({ filtered });
    setTotalAmount(filtered);

    // calculating expense from amount
    const inc = amount
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0);
    console.log({ inc });
    setIncome(inc);

    // calculating expense from amount
    const exp =
      amount
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1;
    console.log({ exp });
    setExpense(exp);
  }, []);

  return (
    <>
      <div>
        <div>
          <h4>Current Balance</h4>
          <h1 style={{ marginTop: "-1rem" }}>${totalAmount}</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              backgroundColor: "darkslategrey",
              padding: "0px 20px",
              color: "whitesmoke",
            }}
          >
            <h4>Income:</h4>
            <h4>{income}</h4>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              backgroundColor: "darkslategrey",
              padding: "0px 20px",
              color: "whitesmoke",
            }}
          >
            <h4>Expense:</h4>
            <h4>{expense}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;

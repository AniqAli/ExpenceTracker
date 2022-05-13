import React, { useState, useEffect } from "react";

const Transaction = ({ transactions }) => {
  //   console.log({ transactions });

  //   const [temp, setTemp] = useState();
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transaction"));
    console.log({ data });
    setTransactionHistory(data);
    // setTemp(transactions);
  }, []);

  const deleteTrans = (e) => {
    console.log({ e });
    // console.log({ temp });
    transactions.filter((t) => t.id !== e);
    localStorage.setItem("transaction", JSON.stringify(transactions));
  };

  //   const sign = transactions.transAmount < 0 ? "-" : "+";

  return (
    <>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{transactions.transDesc}</td>
            <td>{transactions.transAmount}</td>
            <td>
              <button
                style={{
                  backgroundColor: "red",
                  color: "whitesmoke",
                  margin: "10px 1px",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={() => deleteTrans(transactions.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <li style={{ listStyleType: "none" }}>{transactions.transDesc}</li>
        <li style={{ listStyleType: "none" }}>{transactions.transAmount}</li>
        <button
          style={{
            backgroundColor: "red",
            color: "whitesmoke",
            margin: "10px 1px",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={() => deleteTrans(transactions.id)}
        >
          Delete
        </button>
      </div> */}
      {/* <li className={transactions.transAmount < 0 ? "minus" : "plus"}> */}
    </>
  );
};

export default Transaction;

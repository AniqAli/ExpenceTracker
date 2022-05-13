import React, { useState, useEffect } from "react";
import del from "../delete.png";

const Transaction = ({ transactions }) => {
  //   console.log(typeof transactions);

  //   const [temp, setTemp] = useState();
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transaction"));
    console.log({ data });
    setTransactionHistory(data);
    // setTemp(transactions);
  }, []);

  const deleteTrans = (id) => {
    console.log({ id });
    // console.log({ temp });
    // transactionHistory.splice(id, 1);
    const filtered = transactionHistory.filter((t) => t.id !== id);
    console.log({ filtered });
    setTransactionHistory(filtered);

    // setTransactionHistory(
    localStorage.setItem("transaction", JSON.stringify(filtered));
    // );
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
                  background: "none",
                  //   color: "whitesmoke",
                  //   margin: "10px 1px",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={() => deleteTrans(transactions.id)}
              >
                <img src={del} width="20px" height="20px" alt="" />
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

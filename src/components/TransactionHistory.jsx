import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transaction"));
    // console.log(typeof data);
    setTransactions(data);
  }, []);

  // const deleteTrans = (e) => {
  //   console.log({ e });
  //   transactions.splice(e, 1);
  //   localStorage.setItem("transaction", JSON.stringify(transactions));
  // };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2>Transaction History</h2>
        <hr />
        <ul>
          {!transactions ? (
            <p>No Records Found.</p>
          ) : (
            transactions.map((trans) => (
              <Transaction key={trans.id} transactions={trans} />
            ))
          )}
        </ul>
        {/* <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!transactions ? (
              <p>No Records Found</p>
            ) : (
              transactions.map((trans, i) => {
                // console.log({ trans });
                return (
                  <tr key={i}>
                    <td>{trans.transDesc}</td>
                    <td>{trans.transAmount}</td>
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
                        onClick={() => deleteTrans(i)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default TransactionHistory;

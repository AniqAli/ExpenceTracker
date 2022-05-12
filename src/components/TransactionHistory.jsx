import React, { useEffect, useState } from "react";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transaction"));
    // console.log({ data });
    setTransactions(data);
  }, []);

  const deleteTrans = (e) => {
    console.log({ e });
    transactions.splice(e, 1);
    localStorage.setItem("transaction", JSON.stringify(transactions));
  };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2>Transaction History</h2>
        <hr />
        {/* <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "lightgray",
            padding: "0 1rem",
          }}
        >
          <p>{trans.transDesc}</p>
          <p>{trans.transAmount}</p>
          <button
            style={{
              backgroundColor: "red",
              color: "whitesmoke",
              margin: "10px 1px",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div> */}
        <table style={{ width: "100%" }}>
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
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;

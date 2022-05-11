import React, { useEffect, useState } from "react";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transaction"));
    console.log({ data });
    setTransactions(data);
  }, []);

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2>Transaction History</h2>
        <hr />
        {transactions.map((trans, i) => {
          console.log({ trans });
          return (
            // <div
            //   key={i}
            //   style={{
            //     display: "flex",
            //     justifyContent: "space-between",
            //     backgroundColor: "lightgray",
            //     padding: "0 1rem",
            //   }}
            // >
            //   <p>{trans.transDesc}</p>
            //   <p>{trans.transAmount}</p>
            //   <button
            //     style={{
            //       backgroundColor: "red",
            //       color: "whitesmoke",
            //       margin: "10px 1px",
            //       border: "none",
            //       borderRadius: "3px",
            //       cursor: "pointer",
            //     }}
            //   >
            //     Delete
            //   </button>
            // </div>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
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
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
          //   <div
          //     style={{
          //       display: "flex",
          //       justifyContent: "space-between",
          //       backgroundColor: "lightgray",
          //       padding: "0 1rem",
          //     }}
          //   >
          //     <p>{trans.transDesc}</p>
          //     <button
          //       style={{
          //         backgroundColor: "red",
          //         color: "whitesmoke",
          //         margin: "10px 1px",
          //         border: "none",
          //         borderRadius: "3px",
          //         cursor: "pointer",
          //       }}
          //     >
          //       Delete
          //     </button>
          //   </div>;
        })}
      </div>
    </>
  );
};

export default TransactionHistory;

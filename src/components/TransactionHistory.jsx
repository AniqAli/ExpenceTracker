import React from "react";

const TransactionHistory = () => {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2>Transaction History</h2>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "lightgray",
            padding: "0 1rem",
          }}
        >
          <p>asd</p>
          <p>$2</p>
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
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;

import React from "react";

const Balance = () => {
  return (
    <>
      <div>
        <div>
          <h4>Current Balance</h4>
          <h1 style={{ marginTop: "-1rem" }}>$12</h1>
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
            <h4>50</h4>
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
            <h4>50</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;

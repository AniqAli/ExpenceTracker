import React, { useState } from "react";

const AddTransaction = () => {
  const [trans, setTrans] = useState({
    transDesc: "",
    transAmount: "",
  });

  const handleChange = (e) => {
    console.log("handleChange->", e.target.value);
    // const val = e.target.value;
    // setTrans({
    //   ...trans,
    //   [e.target.value]: val,
    // });
    setTrans({
      transDesc: e.target.value,
      transAmount: e.target.value,
    });

    // setTransDesc(e.target.value);
  };

  const handleBtn = (e) => {
    e.preventDefault();

    // console.log({ transDesc });
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <h2>Add Transaction</h2>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 1rem",
          }}
        >
          <input
            type="text"
            name="transDesc"
            value={trans.transDesc}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Description"
            style={{
              padding: "12px",
              borderRadius: "3px",
              fontSize: "14px",
            }}
          />
          <input
            type="number"
            name="transAmount"
            value={trans.transAmount}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Amount"
            style={{
              padding: "12px",
              borderRadius: "3px",
              fontSize: "14px",
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: "darkslategrey",
            color: "whitesmoke",
            padding: "0.8rem 0.8rem",
            marginTop: "1rem",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={handleBtn}
        >
          Add Transaction
        </button>
      </div>
    </>
  );
};

export default AddTransaction;

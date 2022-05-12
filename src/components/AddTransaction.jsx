import React, { useState } from "react";

const AddTransaction = () => {
  const [transDesc, setTransDesc] = useState();
  const [transAmount, setTransAmount] = useState();
  const [id, setId] = useState(1);
  // const [trans, setTrans] = useState([]);

  // const curr = new Date();
  // const time = new curr.getTime();
  // console.log({ curr });
  // console.log({ time });
  var change = id;

  const handleSubmit = (e) => {
    e.preventDefault();
    setId((change += 1));
    setTransDesc("");
    setTransAmount("");
    // console.log({ id });
    let storedData = JSON.parse(localStorage.getItem("transaction")) || [];
    // console.log("stored data", storedData);

    const body = { id, transDesc, transAmount };
    // console.log("new data", body);
    const payload = storedData.concat(body);

    console.log({ payload });
    localStorage.setItem("transaction", JSON.stringify(payload));

    // var storedData = JSON.parse(localStorage.getItem("transaction"));
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <h2>Add Transaction</h2>
        <hr />
        <form onSubmit={handleSubmit}>
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
              value={transDesc}
              onChange={(e) => setTransDesc(e.target.value)}
              //   onChangeText={setTransDesc}
              //   onChange={handleChange}
              autoComplete="off"
              placeholder="Description"
              style={{
                padding: "12px",
                borderRadius: "3px",
                fontSize: "14px",
              }}
              required
            />
            <input
              type="number"
              name="transAmount"
              value={transAmount}
              onChange={(e) => setTransAmount(e.target.value)}
              //   onChangeText={setTransAmount}
              //   onChange={handleChange}
              autoComplete="off"
              placeholder="Amount"
              style={{
                padding: "12px",
                borderRadius: "3px",
                fontSize: "14px",
              }}
              required
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
          >
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;

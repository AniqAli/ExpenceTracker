import React, { useState } from "react";

const AddTransaction = (props) => {
  console.log({ props });
  const [transDesc, setTransDesc] = useState();
  const [transAmount, setTransAmount] = useState(0);
  const [inputData, setInputData] = useState([]);
  // const [trans, setTrans] = useState([]);
  // const [id, setId] = useState(1);

  // var change = id;

  // useEffect(() => {
  //   let storedData = JSON.parse(localStorage.getItem("transaction")) || [];
  //   console.log("stored data", storedData);
  //   if (storedData) {
  //     setTrans(storedData);
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setId((change += 1));
    // if (!inputData) {
    // } else {
    //   let storedData = JSON.parse(localStorage.getItem("transaction")) || [];
    //   console.log("stored data", storedData);

    //   const body = {
    //     id: Math.floor(Math.random() * 100000000),
    //     transDesc,
    //     transAmount,
    //   };
    //   // console.log("new data", body);
    //   const payload = storedData.concat(body);
    //   console.log({ payload });
    //   setInputData([...storedData, inputData]);

    //   localStorage.setItem("transaction", JSON.stringify(payload));
    //   setTransDesc("");
    //   setTransAmount("");
    // }
    // console.log({ id });
    let storedData = JSON.parse(localStorage.getItem("transaction")) || [];
    console.log("stored data", storedData);

    const body = {
      id: Math.floor(Math.random() * 100000000),
      transDesc,
      transAmount,
    };
    // setInputData([...inputData, body]);

    // console.log("new data", body);
    const payload = storedData.concat(body);
    console.log({ payload });
    // console.log("added");
    // if (payload) {
    //   setTrans(payload);
    // }

    // setInputData(payload);
    // console.log({ inputData });
    localStorage.setItem("transaction", JSON.stringify(payload));

    // let getData = JSON.parse(localStorage.getItem("transaction")) || [];
    // console.log("get data", getData);
    // var storedData = JSON.parse(localStorage.getItem("transaction"));
  };

  return (
    <>
      <div style={{ padding: "0 1.5rem" }}>
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

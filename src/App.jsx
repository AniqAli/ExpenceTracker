import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <>
      <div
        className="container"
        style={{
          textAlign: "center",
          width: "500px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem 2rem",
          backgroundColor: "lightsteelblue",
        }}
      >
        <Header />
        <Balance />
        <TransactionHistory />
      </div>
    </>
  );
}

export default App;

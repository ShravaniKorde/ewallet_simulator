import Navbar from "../components/Navbar";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  const dummyData = [
    { from: "1001", to: "1002", amount: 500, time: "15 Jan 2026" }
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <TransactionTable transactions={dummyData} />
      </div>
    </>
  );
}

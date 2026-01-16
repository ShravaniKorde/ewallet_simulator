import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="page-title">Dashboard</h2>
        <BalanceCard balance={5000} />
      </div>
    </>
  );
}

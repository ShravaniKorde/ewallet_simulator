import Navbar from "../components/Navbar";

export default function Transfer() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card" style={{ maxWidth: "480px", margin: "2rem auto" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>Send Money</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Recipient Wallet ID</label>
            <input placeholder="e.g. 882299" />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>Amount (₹)</label>
            <input type="number" placeholder="0.00" style={{ fontSize: "1.5rem", fontWeight: "600" }} />
          </div>

          <button style={{ padding: "16px", fontSize: "1rem" }}>Confirm Transfer</button>
        </div>
      </div>
    </>
  );
}
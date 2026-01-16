export default function BalanceCard({ balance }) {
  return (
    <div className="card" style={{ 
      background: "var(--primary)", 
      color: "white",
      padding: "2rem" 
    }}>
      <p style={{ opacity: 0.7, fontSize: "0.85rem", marginBottom: "8px", fontWeight: "500" }}>
        TOTAL BALANCE
      </p>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "-1px" }}>
        ₹{balance.toLocaleString('en-IN')}
      </h1>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
         <div style={{ background: "rgba(255,255,255,0.1)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem" }}>
            Active Account
         </div>
      </div>
    </div>
  );
}
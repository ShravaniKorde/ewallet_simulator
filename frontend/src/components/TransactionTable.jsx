export default function TransactionTable({ transactions }) {
  return (
    <div className="card" style={{ marginTop: "2rem" }}>
      <h3 style={{ marginBottom: "1.5rem", fontWeight: "700" }}>Recent Activity</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", color: "var(--text-muted)", fontSize: "0.8rem", textTransform: "uppercase" }}>
            <th style={{ padding: "12px 0" }}>Entity</th>
            <th>Status</th>
            <th>Date</th>
            <th style={{ textAlign: "right" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: "16px 0" }}>
                <div style={{ fontWeight: "600" }}>{t.to === "1001" ? t.from : t.to}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>ID: {t.to}</div>
              </td>
              <td>
                <span style={{ 
                  background: "#dcfce7", 
                  color: "#166534", 
                  padding: "4px 8px", 
                  borderRadius: "6px", 
                  fontSize: "0.7rem", 
                  fontWeight: "600" 
                }}>Success</span>
              </td>
              <td style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{t.time}</td>
              <td style={{ textAlign: "right", fontWeight: "700", color: t.from === "1001" ? "#e11d48" : "#059669" }}>
                {t.from === "1001" ? "-" : "+"} ₹{t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
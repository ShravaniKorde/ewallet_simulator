import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{ 
      background: "#fff", 
      borderBottom: "1px solid var(--border)", 
      padding: "1rem 0",
      position: "sticky",
      top: 0,
      zIndex: 100 
    }}>
      <div className="container" style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "0 2rem" 
      }}>
        <div style={{ fontSize: "1.2rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
          NEO<span style={{ color: "var(--accent)" }}>WALLET</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <NavLink to="/dashboard" active={isActive("/dashboard")}>Overview</NavLink>
          <NavLink to="/transfer" active={isActive("/transfer")}>Send</NavLink>
          <NavLink to="/transactions" active={isActive("/transactions")}>History</NavLink>
          <Link to="/login" style={{ 
            textDecoration: "none", 
            color: "#e11d48", 
            fontSize: "0.9rem", 
            fontWeight: "500" 
          }}>Logout</Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link to={to} style={{ 
      textDecoration: "none", 
      color: active ? "var(--primary)" : "var(--text-muted)",
      fontWeight: active ? "600" : "500",
      fontSize: "0.9rem",
      borderBottom: active ? "2px solid var(--primary)" : "none",
      paddingBottom: "4px"
    }}>
      {children}
    </Link>
  );
}
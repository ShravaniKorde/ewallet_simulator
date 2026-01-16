// components/AuthLayout.jsx (Helper)
const AuthLayout = ({ children, title, subtitle }) => (
  <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
    <div className="card" style={{ width: "100%", maxWidth: "400px", padding: "2.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "8px" }}>{title}</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>{subtitle}</p>
      {children}
    </div>
  </div>
);

export default function Login() {
  return (
    <AuthLayout title="Welcome back" subtitle="Enter your details to access your vault">
      <label style={{ fontSize: "0.8rem", fontWeight: "600" }}>Email Address</label>
      <input type="email" placeholder="name@company.com" />
      
      <label style={{ fontSize: "0.8rem", fontWeight: "600" }}>Password</label>
      <input type="password" placeholder="••••••••" />
      
      <button>Sign In</button>
      <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.85rem" }}>
        New here? <a href="/register" style={{ color: "var(--accent)", fontWeight: "600" }}>Create account</a>
      </p>
    </AuthLayout>
  );
}
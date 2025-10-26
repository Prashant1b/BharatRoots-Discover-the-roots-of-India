import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Welcome, {user?.name || "User"} 🎉</h1>
      <p>Email: {user?.email}</p>
      <p>State: {user?.state}</p>
      <button onClick={logout} style={{ marginTop: "20px", padding: "10px 20px", background: "#7b5fcf", color: "#fff", border: "none", borderRadius: "5px" }}>
        Logout
      </button>
    </div>
  );
}

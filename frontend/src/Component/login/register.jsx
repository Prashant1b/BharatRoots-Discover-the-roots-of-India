import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import countries from "../dummy/country";
export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("learner");
    const [hobby, setHobby] = useState("");
    const [country, setCountry] = useState("India");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const containerStyle = { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", width: "100%", padding: "15px", boxSizing: "border-box", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" };

    const formStyle = { background: "#fff", padding: "30px 20px", borderRadius: "15px", width: "100%", maxWidth: "400px", boxShadow: "0 10px 25px rgba(0,0,0,0.25)", boxSizing: "border-box", margin: 0 };

    const titleStyle = { textAlign: "center", marginBottom: "25px", fontSize: "26px", fontWeight: "bold", color: "#333" };

    const labelStyle = { fontSize: "15px", fontWeight: 500, color: "#444", margin: "12px 0 6px", textAlign: "left" };

    const inputStyle = { display: "block", width: "100%", padding: "12px", marginBottom: "18px", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9", fontSize: "15px", outline: "none", boxSizing: "border-box" };

    const buttonStyle = { width: "100%", padding: "12px", border: "none", borderRadius: "8px", background: "#7b5fcf", color: "#fff", fontSize: "16px", fontWeight: "bold", cursor: "pointer" };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return; // stop submission
        }
        alert(`Registration Successful  ${fullName}\n Welocome to BharatRoots Website`);
        navigate("/login");
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div id="roo">
                    <h1 style={titleStyle}>Register</h1>
                </div>

                <h2 style={labelStyle}>Full Name:</h2>
                <input type="text" placeholder="Enter your name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={inputStyle} required />

                <h2 style={labelStyle}>Email:</h2>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />

                <h2 style={labelStyle}>Mobile No.:</h2>
                <input type="tel" placeholder="Enter your Mobile no." value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} pattern="[0-9]{10}" maxLength={10} required />
                <h2 style={labelStyle}>Full Address:</h2>
                <input type="text" placeholder="Enter your Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} required />
                <h2 style={labelStyle}>Country:</h2>
                <select style={inputStyle} value={country} onChange={(e) => setCountry(e.target.value)} >
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <h2 style={labelStyle}>Password:</h2>
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />

                <h2 style={labelStyle}>Confirm Password:</h2>
                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={inputStyle} required />

                {/* Role Selection */}
                <h2 style={labelStyle}>Register As:</h2>
                <select style={inputStyle} value={role} onChange={handleRoleChange}>
                    <option value="learner">Learner</option>
                    <option value="creator">Creator</option>
                </select>

                {/* Conditional Hobby input */}
                {role === "creator" && (
                    <>
                        <h2 style={labelStyle}>Skill You Can Teach:</h2>
                        <input type="text" placeholder="E.g., Kathak,Singer,Dancer..." style={inputStyle} value={hobby} onChange={(e) => setHobby(e.target.value)} required />
                    </>
                )}

                <button type="submit" style={buttonStyle}>Register</button>
                <Link to="/login" style={{ display: "block", textAlign: "center", marginTop: "15px", fontSize: "14px", color: "#7b5fcf", textDecoration: "none" }}>Back to Login</Link>
                <Outlet />
            </form>
        </div>
    );
}

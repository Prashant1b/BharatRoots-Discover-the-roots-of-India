import React from "react";
import ReactDom from "react-dom/client";
import { Link, Outlet } from "react-router";
import { useNavigate } from "react-router";
export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    navigate("/");
  };
    return (
        <div id="login" >
            <form onSubmit={handleSubmit}>
                <div id="roo">
                    <h1>Login Page</h1>
                </div>
                <h2>E-mail id:</h2>
                <input  type="email" placeholder="Enter Email id" required ></input>
                <h2>Password:</h2>
                <input id="Password" type="password" placeholder="Enter Password" required min={6}></input>

                <button type="submit" value="submit">Submit</button>
                <Link to="/Register" style={{ display: "block", textAlign: "center", marginTop: "15px", fontSize: "14px", color: "#7b5fcf", textDecoration: "none" }}>Register Now</Link>
                <Outlet>

                </Outlet>
            </form>

        </div>
    );
};

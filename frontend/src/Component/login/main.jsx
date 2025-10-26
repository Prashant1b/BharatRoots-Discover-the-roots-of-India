import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Register from "./register";
import Login from "./login";
import Home from "./home";
export default function Apps() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
ReactDom.createRoot(document.querySelector("#root")).render(<Apps />)
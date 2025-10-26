import React from "react";
import "./connect.css"
import { BrowserRouter, Link, Route, Routes } from "react-router";
import ReactDom from "react-dom/client"
import Home from "./home";
import About from "./about";
import Login from "../login/login";
import Register from "../login/register"
import ProfileSearch from "../Profile/search";
import Articles from "../article/article";
import Suggestion from "../dummy/suggestion";
import Quiz from "../dummy/Quiz";
function Connect() {

    return (
        <>
            <BrowserRouter>
                <nav>
                    <h1>BharatRoots</h1>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/article">Article</Link>
                        <Link to="/Quiz">Quiz</Link>
                        <Link to="/Suggestion">Suggestion</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login">Login/Signup</Link>
                    </div>
                </nav>

                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/article" element={<Articles />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/search" element={<ProfileSearch />}></Route>
                    <Route path="/Suggestion" element={<Suggestion />}></Route>
                    <Route path="/Quiz" element={<Quiz/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDom.createRoot(document.querySelector("#root")).render(<Connect />)
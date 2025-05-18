import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Background from "./Background";
import Header from "./component/header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
    return (
        <Router>
            <Background/>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App;
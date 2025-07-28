import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Header from "./component/header";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProjectPage from "./pages/ProjectPage";
import AdminPanel from "./my-admin-panel/AdminPanel";
import Commercial from "./pages/Commercial";
import AddProperty from "./my-admin-panel/AddProperty";
import EnquiryList from "./my-admin-panel/EnquiryList";
import AdminLoginPage from "./my-admin-panel/AdminLoginPage";
import CommercialPage from "./pages/CommercialPage";



function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname.startsWith("/projects/");

  return (
    <>
      {/* <Banner /> */}
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/commercialproject/:slug" element={<CommercialPage />} />
        <Route path="/adminloginpage" element={<AdminLoginPage />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/addproperty" element={<AddProperty/>}/>
        <Route path="/enquirylist" element={<EnquiryList/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

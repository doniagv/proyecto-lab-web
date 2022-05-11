import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landingpage from "./components/Landingpage";
import Login from "./components/Login";
import ResponsiveNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landingpage from "./components/Landingpage";
import Login from "./components/Login";
import ResponsiveNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Recomendacion from "./components/Recomendacion";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/roadtrip" element={<Recomendacion />} />
      </Routes>
    </>
  );
}

export default App;

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
        <Route path="/" exact element={<Landingpage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/logout" exact element={<Login />} />
        <Route path="/roadtrip" exact element={<Recomendacion />} />
      </Routes>
    </>
  );
}

export default App;

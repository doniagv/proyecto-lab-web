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
        <Route path="http://34.125.58.211//login" exact element={<Login />} />
        <Route path="http://34.125.58.211//dashboard" exact element={<Dashboard />} />
        <Route path="http://34.125.58.211//logout" exact element={<Login />} />
        <Route path="http://34.125.58.211//roadtrip" exact element={<Recomendacion />} />
      </Routes>
    </>
  );
}

export default App;

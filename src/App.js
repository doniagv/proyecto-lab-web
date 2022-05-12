import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landingpage from "./components/Landingpage";
import Login from "./components/Login";
import ResponsiveNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landingpage from "./components/Landingpage";
import ResponsiveNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default App;

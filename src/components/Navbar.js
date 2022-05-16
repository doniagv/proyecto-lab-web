/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const ResponsiveNavbar = () => {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(null);
  const [logged, setLogged] = useState("Login");
  const [pages, setPages] = useState([
    {
      link: "dashboard",
      name: "Dashboad",
    },
    {
      link: "roadtrip",
      name: "Roadtrip",
    },
    {
      link: logged.toLowerCase(),
      name: logged,
    },
  ]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token_roadtripfy");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token_roadtripfy", token);
    }

    setToken(token);

    const autenticado = window.localStorage.getItem("token_roadtripfy") !== null;
    setAuthenticated(autenticado);
    const isLogged = autenticado ? "Logout" : "Login";
    setLogged(isLogged);
    setPages([
      {
        link: "dashboard",
        name: "Dashboad",
      },
      {
        link: "roadtrip",
        name: "Roadtrip",
      },
      {
        link: isLogged.toLowerCase(),
        name: isLogged,
      },
    ]);
  }, [token]);
  // Cambiar cuando se implementé autenticación con firebase
  // const authenticated = window.localStorage.getItem("token") !== null;

  const navLinks = pages.map((page) => (
    <a key={page.link} className="no-underline text-gray-800 font-semibold hover:text-gray-600" href={`${page.link}`}>
      {page.name}
    </a>
  ));

  const Navbar = ({ menuOpen, setMenuOpen }) => (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <p className="text-3xl">🚀</p>
        <a href="/" className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600">
          Roadtripfy
        </a>
      </div>
      <nav className="hidden md:block space-x-6">{navLinks}</nav>
      <button
        type="button"
        aria-label="Toggle mobile menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50">
        <MenuAlt4Svg menuOpen={menuOpen} />
      </button>
    </div>
  );

  const MobileMenu = ({ children }) => <nav className="p-4 flex flex-col space-y-3 md:hidden">{children}</nav>;

  const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? "transform rotate-90" : ""}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-400">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </div>
  );
};

export default ResponsiveNavbar;

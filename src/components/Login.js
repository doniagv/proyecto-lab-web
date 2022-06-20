// import { LockClosedIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  var scope = "user-read-private user-read-email user-follow-read user-top-read user-library-read";
  const CLIENT_ID = "d3c2fc677be24a668f8d320ef9a78800";
  // const REDIRECT_URI = "http://34.127.42.85:86/";
  const REDIRECT_URI = "https://adorable-tanuki-84fb9c.netlify.app";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
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
  }, [token]);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token_roadtripfy");
    navigate("/login");
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{token == null ? "Inicia sesión con tu cuenta de Spotify" : "Cerrar sesión"}</h2>

            {/* <p className="mt-2 text-center text-sm text-gray-600">
              O{" "}
              <a href="/signin" className="font-medium text-teal-600 hover:text-indigo-500">
                registrate
              </a>
            </p> */}
          </div>
          <div className="grid">
            {token == null ? (
              <a
                className="text-center p-4 bg-teal-500 rounded-lg font-bold text-white mt-5 hover:bg-gray-600"
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Login to Spotify
              </a>
            ) : (
              <button onClick={logout} className="p-4 bg-teal-500 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

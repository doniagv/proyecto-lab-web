import React, { useState, useEffect } from "react";
import axios from "axios";

const Recomendacion = () => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    let token = window.localStorage.getItem("token_roadtripfy");
    setToken(token);
  }, []);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    console.log(data);
    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id} className="m-3 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {artist.images.length ? <img className="rounded-t-lg" src={artist.images[0].url} alt="" /> : <div>No Image</div>}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{artist.name}</h5>
        </div>
      </div>
    ));
  };

  return (
    <>
      {token ? (
        <>
          <div className="flex justify-center m-6">
            <form onSubmit={searchArtists} className="input-group relative flex mb-4">
              <input
                type="text"
                onChange={(e) => setSearchKey(e.target.value)}
                className="orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Buscar artista"
              />
              <button
                type={"submit"}
                className="btn ml-2 inline-block px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Search
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-center">{renderArtists()}</div>
        </>
      ) : (
        <div className="flex justify-center m-6">Se requiere inicio de sesión</div>
      )}
    </>
  );
};

export default Recomendacion;

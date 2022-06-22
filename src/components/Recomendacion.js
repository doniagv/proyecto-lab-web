/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import MultiStepForm from "./MultiStepForm";
// import RecommendationForm from "./RecommendationForm";

import Artist from "./Artist";
import TracksRecommended from "./TracksRecommended";
const Recomendacion = () => {
  // const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState(null);
  const [genres, setGenres] = useState([]);
  // const [selectedGenre, setSelectedGenre] = useState(null);
  // const [searchParams, setSearchParams] = useState({});
  const [data, setData] = useState({});
  const [recommendedSongs, setRecommendedSongs] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    let token = window.localStorage.getItem("token_roadtripfy");
    setData({
      token: token,
    });

    const fetchGenres = (token) => {
      axios("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        console.log(response);
        setGenres(response.data.genres);
      });
    };
    const fetchPlaylists = async (token, id) => {
      axios("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        setPlaylists(response.data.items);
      });
    };

    fetchPlaylists(token);
    fetchGenres(token);
    setToken(token);
  }, []);

  // const searchArtists = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     params: {
  //       q: searchParams.searchKey,
  //       type: "artist",
  //     },
  //   });
  //   console.log(data);
  //   setArtists(data.artists.items);
  // };

  const renderArtists = () => {
    return artists.map((artist) => (
      <Artist key={artist.id} artist={artist} />
      // <div key={artist.id} className="m-3 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      //   {artist.images.length ? <img className="rounded-t-lg" src={artist.images[0].url} alt="" /> : <div>No Image</div>}
      //   <div className="p-5">
      //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{artist.name}</h5>
      //   </div>
      // </div>
    ));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    // setSearchParams({
    //   ...searchParams,
    //   [name]: value,
    // });
  };

  const getRecommendations = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    // const res = await fetch("http://34.127.42.85:8000/", {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    const json_data = JSON.stringify(data);
    const res = await fetch("http://34.127.42.85:84/", {
      method: "POST",
      mode: "no-cors",

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json_data,
    });
    // const res = await fetch("http://34.127.42.85:84/", {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    const apijson = await res.json();
    setRecommendedSongs(JSON.parse(apijson));
  };

  const renderTracks = () => {
    if (recommendedSongs) {
      return recommendedSongs.map((track) => (
        <TracksRecommended key={track.track_id} track={track} />
        // <div key={artist.id} className="m-3 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        //   {artist.images.length ? <img className="rounded-t-lg" src={artist.images[0].url} alt="" /> : <div>No Image</div>}
        //   <div className="p-5">
        //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{artist.name}</h5>
        //   </div>
        // </div>
      ));
    } else {
      return <p className="font-sans text-2xl text-white font-bold antialiased">No hay información disponible</p>;
    }
  };

  return (
    <>
      {token ? (
        <>
          <div className="flex justify-center m-6">
            {console.log(playlists)}
            {/* <RecommendationForm onChange={onChange} onClick={getRecommendations} searchArtists={searchArtists} searchParams={searchParams} genres={genres} /> */}
            <div className="w-full max-w-lg">
              <h2
                className="
          mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6
        ">
                Descubre canciones solo para ti
              </h2>

              <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg mb-6">Elige una playlist para recomendarte canciones que te gusten</p>
              <div className="flex justify-center m-5">
                <select name="playlist" onChange={onChange} value={data.playlist ? data.playlist : ""}>
                  <option selected value="">
                    Seleccione una opción
                  </option>
                  {playlists &&
                    playlists.map((playlist) => {
                      return (
                        <>
                          <option value={playlist.name}>{playlist.name}</option>
                        </>
                      );
                    })}
                </select>
              </div>

              <div className="flex justify-center m-5">
                <button
                  onClick={getRecommendations}
                  className="btn ml-2 inline-block px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                  Obtener recomendaciones
                </button>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center m-6">
            

            <form onSubmit={searchArtists} className="input-group relative flex mb-4"></form>
          </div> */}
          <div className="flex flex-wrap justify-center">{renderArtists()}</div>
          {/* <button onClick={getRecommendations}>Obtener recomendaciones</button> */}
          {console.log(recommendedSongs)}
          <div className="grid justify-center">
            <div className="flex flex-wrap justify-center">{renderTracks()}</div>
          </div>
        </>
      ) : (
        <div className="flex justify-center m-6">Se requiere inicio de sesión</div>
      )}
    </>
  );
};

export default Recomendacion;

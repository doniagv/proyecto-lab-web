import React, { useState, useEffect } from "react";
import axios from "axios";
// import MultiStepForm from "./MultiStepForm";
import RecommendationForm from "./RecommendationForm";

const Recomendacion = () => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchParams, setSearchParams] = useState({});

  useEffect(() => {
    let token = window.localStorage.getItem("token_roadtripfy");
    const fetchGenres = (token) => {
      axios("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        console.log(response);
        setGenres(response.data.genres);
      });
    };
    fetchGenres(token);
    setToken(token);
  }, []);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchParams.searchKey,
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

  const onChange = (e) => {
    const { name, value } = e.target;

    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  return (
    <>
      {token ? (
        <>
          <div className="flex justify-center m-6">
            <RecommendationForm onChange={onChange} searchArtists={searchArtists} searchParams={searchParams} genres={genres} />
          </div>
          {/* <div className="flex justify-center m-6">
            

            <form onSubmit={searchArtists} className="input-group relative flex mb-4"></form>
          </div> */}
          <div className="flex flex-wrap justify-center">{renderArtists()}</div>
        </>
      ) : (
        <div className="flex justify-center m-6">Se requiere inicio de sesión</div>
      )}
    </>
  );
};

export default Recomendacion;

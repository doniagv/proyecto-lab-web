/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
// import Artist from "./Artist";
import FollowedArtists from "./FollowedArtists";
import Tracks from "./Tracks";

const Dashboard = () => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [followedArtists, setFollowedArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [tracksAnalyzed, setTracksAnalyzed] = useState([]);

  useEffect(() => {
    let token = window.localStorage.getItem("token_roadtripfy");
    const fetchCurrentUser = (token) => {
      axios("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        setCurrentUser(response.data);
      });
    };
    // const fetchFollowedArtists = (token) => {
    //   axios("https://api.spotify.com/v1/me/following?type=artist", {
    //     method: "GET",
    //     headers: { Authorization: "Bearer " + token },
    //   }).then((response) => {
    //     console.log(response);
    //     setFollowedArtists(response.data.artists.items);
    //   });
    // };
    const fetchTopArtists = (token) => {
      axios("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10", {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        setFollowedArtists(response.data.items);
      });
    };
    const fetchTopTracks = async (token) => {
      axios("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10", {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        setTopTracks(response.data.items);
        response.data.items.forEach((track) => {
          fetchtTracksAnalysis(token, track.id);
        });
        return response.data.items;
      });
    };

    const fetchtTracksAnalysis = async (token, id) => {
      axios(`https://api.spotify.com/v1/audio-features/${id}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {
        let tmpTracks = tracksAnalyzed;
        tmpTracks.push(response.data);
        setTracksAnalyzed(tmpTracks);
      });
    };

    const fetchPlaylists = (token) => {
      axios("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }).then((response) => {});
    };
    fetchPlaylists(token);
    fetchCurrentUser(token);
    fetchTopArtists(token);
    fetchTopTracks(token);

    // fetchFollowedArtists(token);
    setToken(token);
  }, []);

  const renderArtists = () => {
    if (followedArtists) {
      return followedArtists.map((artist) => (
        <FollowedArtists key={artist.id} artist={artist} />
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
  const renderTracks = () => {
    if (topTracks) {
      return topTracks.map((track) => (
        <Tracks key={track.id} track={track} />
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
    <div className="bg-gray-800">
      {console.log(tracksAnalyzed)}
      {token && currentUser ? (
        <>
          <div>
            <UserCard currentUser={currentUser} />
            <div className="flex flex-col rounded-lg items-center pb-10 pt-4 bg-teal-600 mt-10 mb-10">
              <h2 className="p-3 font-sans text-3xl font-bold antialiased text-white">Top 10 Artistas más escuchados</h2>
            </div>

            <div className="grid justify-center">
              <div className="flex flex-wrap justify-center">{renderArtists()}</div>
            </div>
            <div className="flex flex-col rounded-lg items-center pb-10 pt-4 bg-teal-600 mt-10 mb-10">
              <h2 className="p-3 font-sans text-3xl font-bold antialiased text-white">Top 10 Canciones más escuchadas</h2>
            </div>
            <div className="grid justify-center">
              <div className="flex flex-wrap justify-center">{renderTracks()}</div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center text-white p-6">
          <p className="font-sans text-2xl font-bold antialiased">Se requiere inicio de sesión</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

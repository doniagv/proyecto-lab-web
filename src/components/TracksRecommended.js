import React from "react";

const Tracks = ({ track }) => {
  return (
    <div key={track.track_id} className="m-2 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700">
      {track.url ? <img className="rounded-t-lg" src={track.url ? track.url : ""} alt="" /> : <div>No Image</div>}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{track.track_name}</h5>

        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{track.genres.join(" ")}</p> */}
      </div>
    </div>
  );
};

export default Tracks;

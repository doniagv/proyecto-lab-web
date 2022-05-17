import React from "react";

const Artist = ({ artist }) => {
  return (
    <div key={artist.id} className="m-3 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {artist.images.length ? <img className="rounded-t-lg" src={artist.images[0].url} alt="" /> : <div>No Image</div>}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{artist.name}</h5>
      </div>
    </div>
  );
};

export default Artist;

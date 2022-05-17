import React from "react";

const UserCard = ({ currentUser }) => {
  return (
    <div className="rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-4">
        <img className="mb-6 w-72 h-72 rounded-full shadow-lg" src={currentUser.images[0].url} alt="Profile" />
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">{currentUser.display_name ? currentUser.display_name : ""}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Seguidores: {currentUser.followers.total}</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            rel="noreferrer"
            target="_blank"
            href={currentUser.external_urls.spotify ? currentUser.external_urls.spotify : "#"}>
            Ir a perfil
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

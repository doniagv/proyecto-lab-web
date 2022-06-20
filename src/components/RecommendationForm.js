import React from "react";

const RecommendationForm = (props) => {
  return (
    <>
      <form onSubmit={props.getRecommendations} className="w-full max-w-lg">
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

        <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg mb-6">Elige una playlist para recomendarte canciones</p>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Género
            </label>
            <select
              name="genre"
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
              onChange={props.onChange}
              value={props.searchParams.genre ? props.searchParams.genre : ""}>
              <option disabled selected value="">
                Selecciona un género
              </option>
              {props.genres &&
                props.genres.map((genre) => {
                  return <option value={genre}>{genre.toUpperCase()}</option>;
                })}
            </select>
          </div> */}
          {/* <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Artista
            </label>
            <input
              name="searchKey"
              type="text"
              onChange={props.onChange}
              className="orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Buscar artista"
              value={props.searchParams.searchKey}
            />
          </div> */}
        </div>
        {/* <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div> */}

        {/* <div className="flex justify-center m-5">
          <button
            onClick={props.getRecommendations}
            type={"submit"}
            className="btn ml-2 inline-block px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            Obtener recomendaciones
          </button>
        </div> */}
      </form>
    </>
  );
};

export default RecommendationForm;

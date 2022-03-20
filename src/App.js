import "./App.css";
import Hero from "./components/Hero";
import ResponsiveNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <ResponsiveNavbar />

      <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-5xl text-white">Roadtripfy 🚀🎶</h1>
        <p className="text-gray-400 mt-5 text-lg">Empieza una nueva aventura</p>
        <button class="p-4 bg-teal-500 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">Comenzar</button>
      </div>
    </>
  );
}

export default App;

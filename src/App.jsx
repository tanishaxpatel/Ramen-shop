import BigWave from "./Components/Pages/BigWave";
import CharterModal from "./Components/Pages/CharterModal";
import BanzaiFlavors from "./Components/Pages/BanzaiFlavors";
import Hero from "./Components/Pages/Hero";
import Home from "./Components/Pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import ChickenNoodles from "./Components/Pages/ChickenNoodles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noodles" element={<ChickenNoodles />} />
    </Routes>
  );
}

export default App;

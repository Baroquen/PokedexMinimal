import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Pokedex, PokemonDetails } from "./features/pokedex/";
import { History } from "./features/history/"
import { Layout } from "./Components/Layout";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pokedex />} />
        <Route path="pokemon/:name" element={<PokemonDetails />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<Pokedex />} />
      </Route>
    </Routes>
  );
}

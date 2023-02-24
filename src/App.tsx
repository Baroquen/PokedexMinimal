import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Pokedex, PokemonDetails } from "./features/pokedex/";
import { History } from "./features/history/"
import { SearchLayout, Layout } from "./Components/";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchLayout />}>
        <Route index element={<Pokedex />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<Pokedex />} />
      </Route>
      <Route path="/pokemon" element={<Layout />}>
        <Route path=":name" element={<PokemonDetails />} />
      </Route>
      <Route path="/history/pokemon" element={<Layout />}>
        <Route path=":name" element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
}

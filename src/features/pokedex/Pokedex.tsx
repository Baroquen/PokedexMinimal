import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useGetPokedexQuery, PokemonCard, UrlBase } from "./";
import { useFilter } from "../../Components/Layout";

export function Pokedex() {
  const { data: pokedex } = useGetPokedexQuery();
  const [display, setDisplay] = useState<UrlBase[]>([]);
  const { filter } = useFilter();

  useEffect(() => {
    if (!!pokedex) {
      setDisplay(
        pokedex.pokemon_entries.map((pokemon) => pokemon.pokemon_species)
      );
    }
  }, [pokedex]);

  return (
    <>
      {filter === "" && (
          <Row className="row-cols-md-6">
            {display.map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={pokemon.name} />;
            })}
          </Row>
      )}
      {filter !== "" && (
        <Row className="row-cols-md-6">
          {display
            .filter((x) => x.name.startsWith(filter))
            .map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={pokemon.name} />;
            })}
        </Row>
      )}
    </>
  );
}

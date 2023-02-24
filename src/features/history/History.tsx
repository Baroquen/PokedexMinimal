import { FC } from "react";
import { Row } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { PokemonCard } from "../pokedex";
import { useFilter } from "../../Components/SearchLayout";

export const History: FC = () => {
  const searchHistory = useAppSelector((state) => state.history);
  const { filter } = useFilter();

  return (
    <>
      {filter === "" && (
        <Row className="row-cols-md-6">
          {searchHistory.value.map((pokemon) => {
            return <PokemonCard name={pokemon.name} key={pokemon.name} />;
          })}
        </Row>
      )}
      {filter !== "" && (
        <Row className="row-cols-md-6">
          {searchHistory.value
            .filter((x) => x.name.startsWith(filter))
            .map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={pokemon.name} />;
            })}
        </Row>
      )}
    </>
  );
};

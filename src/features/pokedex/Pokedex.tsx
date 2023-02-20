import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import { If, Then, Else } from "react-if";
import { useGetPokemonQuery } from "./pokedexApi";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "../history/SearchBar";
import { PokemonUrls } from "./types.d";
import { useAppSelector } from "../../app/hooks";

export function Pokedex() {
  const searchHistory = useAppSelector((state) => state.history);

  const { data, isLoading } = useGetPokemonQuery();
  const [display, setDisplay] = useState<PokemonUrls[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    if (!!data) {
      setDisplay(data.results);
    }
  }, [data]);

  const onChange = (newValue: string) => {
    setFilter(newValue);
  };

  return (
    <Container>
      <Row>
        <SearchBar onChange={onChange} disabled={isLoading} />
      </Row>
      <Accordion defaultActiveKey={["1"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Recent Views</Accordion.Header>
          <Accordion.Body>
            {searchHistory.value.map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={`history-${pokemon.name}`} />;
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pokedex</Accordion.Header>
          <Accordion.Body>
            <If condition={filter === ""}>
              <Then>
                <Row className="row-cols-md-6">
                  {display?.map((pokemon) => {
                    return (
                      <PokemonCard name={pokemon.name} key={pokemon.name} />
                    );
                  })}
                </Row>
              </Then>
              <Else>
                <Row className="row-cols-md-6">
                  {display
                    ?.filter((x) => x.name.startsWith(filter))
                    .map((pokemon) => {
                      return (
                        <PokemonCard name={pokemon.name} key={pokemon.name} />
                      );
                    })}
                </Row>
              </Else>
            </If>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

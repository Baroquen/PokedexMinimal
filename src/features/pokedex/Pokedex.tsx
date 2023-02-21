import { useState, useEffect } from "react";
import { Container, Row, Accordion } from "react-bootstrap";
import { useGetPokemonQuery, PokemonCard, UrlBase } from "./";
import { SearchBar } from "../history/SearchBar";
import { useAppSelector } from "../../app/hooks";

export function Pokedex() {
  const searchHistory = useAppSelector((state) => state.history);
  const { data, isLoading } = useGetPokemonQuery();
  const [display, setDisplay] = useState<UrlBase[]>([]);
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
            <Row className="row-cols-md-6">
              {searchHistory.value.map((pokemon) => {
                return (
                  <PokemonCard
                    name={pokemon.name}
                    key={`history-${pokemon.name}`}
                  />
                );
              })}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pokedex</Accordion.Header>
          <Accordion.Body>
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
                    return (
                      <PokemonCard name={pokemon.name} key={pokemon.name} />
                    );
                  })}
              </Row>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

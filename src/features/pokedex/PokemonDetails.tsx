import { FC } from "react";
import { ListGroup, Card } from "react-bootstrap";
import {
  useGetPokemonByNameQuery,
  useGetSpeciesQuery,
  useGetEvolutionChainQuery,
  useGetEncountersQuery,
} from "./pokedexApi";
import { UrlBaseList } from "../../Components/UrlBaseList";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { Col, Badge } from "react-bootstrap/";

export const PokemonDetails: FC = () => {
  const { name } = useParams();
  const { data: pokemon } = useGetPokemonByNameQuery(name ? name : skipToken);
  const { data: species } = useGetSpeciesQuery( pokemon ? pokemon.species.url : skipToken );
  const { data: evolutionChain, isLoading } = useGetEvolutionChainQuery( species ? species.evolution_chain.url : skipToken );
  const { data: encounters } = useGetEncountersQuery( pokemon ? pokemon.location_area_encounter : skipToken )

  return (
    <Col className="mx-auto" lg="7">
      {!!pokemon && (
        <Card>
          <Card.Img src={pokemon.sprites.front_default} />
          <Card.Body>
            <Card.Title className="text-center">{pokemon.name}</Card.Title>
            <Card.Subtitle className="text-center">
              {pokemon.types.map((x) => {
                return (
                  <Badge key={x.slot} bg={x.slot === 1 ? "primary" : "secondary"}>
                    {x.type.name}{" "}
                  </Badge>
                );
              })}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item key="color">
              <>
                <b>Color: </b>
                {species?.color.name}
              </>
            </ListGroup.Item>
            <ListGroup.Item key="location">
                <UrlBaseList label="Location" data={encounters?.locationAreas } />
            </ListGroup.Item>
            <ListGroup.Item key="habitat">
              <>
                <b>Habitat: </b>
                {species?.habitat?.name}
              </>
            </ListGroup.Item>
            <ListGroup.Item key="abilities">
              <UrlBaseList label="Abilities" data={pokemon.abilities.map((x) => x.ability)} />
            </ListGroup.Item>
            <ListGroup.Item key="moves">
              <UrlBaseList label="Moves" data={pokemon.moves.map((x) => x.move)} />
            </ListGroup.Item>
            <ListGroup.Item key="varieties">
              <UrlBaseList label="Varieties" data={species?.varieties.map((x) => x.pokemon)} />
            </ListGroup.Item>
            <ListGroup.Item key="evolution_chain">
              {!!!isLoading &&
              <UrlBaseList label="Evolution Chain" data={evolutionChain} />}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </Col>
  );
};

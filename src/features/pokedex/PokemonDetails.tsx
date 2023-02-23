import { FC } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  useGetPokemonByNameQuery,
  useGetSpeciesQuery,
  useGetEvolutionChainQuery,
} from "./pokedexApi";
import { UrlBaseList } from "../../Components/UrlBaseList";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { Col, Badge } from "react-bootstrap/";

export const PokemonDetails: FC = () => {
  const { name } = useParams();
  const { data: pokemon } = useGetPokemonByNameQuery(name ? name : skipToken);
  const { data: species } = useGetSpeciesQuery(
    pokemon ? pokemon.species.url : skipToken
  );
  const { data: evolutionChain } = useGetEvolutionChainQuery(
    species ? species.evolution_chain : skipToken
  );

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
                  <Badge bg={x.slot === 1 ? "primary" : "secondary"}>
                    {x.type.name}{" "}
                  </Badge>
                );
              })}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <>
                <b>Color: </b>
                <text>{species?.color.name}</text>
              </>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Abilities: </b>
              <UrlBaseList data={pokemon.abilities.map((x) => x.ability)} />
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Moves: </b>
              <UrlBaseList data={pokemon.moves.map((x) => x.move)} />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </Col>
  );
};

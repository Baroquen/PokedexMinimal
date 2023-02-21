import { FC } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useGetPokemonByNameQuery } from "./pokedexApi";
import { UrlBaseList } from "../../Components/UrlBaseList"
import { useParams } from "react-router-dom"

export const PokemonDetails: FC = () => {
  const { name } = useParams()
  const { data } = useGetPokemonByNameQuery(name);

  return (
    <>
      {!!data && (
        <Card>
          <Card.Img variant="top" src={data.sprites.front_default} />
          <Card.Body>
            <Card.Title className="text-center">{data.name}</Card.Title>
            <Card.Subtitle className="text-center">
              <UrlBaseList data={data.types.map((x) => x.type)} />
            </Card.Subtitle>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Abilities: </b>
              <UrlBaseList data={data.abilities.map((x) => x.ability)} />
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Moves: </b>
               <UrlBaseList data={data.moves.map((x) => x.move)} />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </>
  );
};

import { FC } from "react";
import { Pokemon } from "./types.d";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

interface PokemonDetailProps {
  pokemon: Pokemon;
  display: boolean | undefined;
  handleClose: () => void;
}

export const PokemonDetails: FC<PokemonDetailProps> = ({
  pokemon,
  display,
  handleClose,
}) => {
  return (
    <Modal show={display} onHide={handleClose}>
      <Modal.Body>
        <Card>
          <Card.Img
            variant="top"
            src={pokemon.sprites.front_default}
          />
          <Card.Body>
            <Card.Title className="text-center">{pokemon.name}</Card.Title>
            <Card.Subtitle className="text-center">
              {pokemon.types
                .map((x) => <>{x.type.name}</>)
                .reduce((prev, cur) =>
                  prev === null 
                  ? (cur) 
                  : (<>{prev}, {cur}</>)
                )}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Abilities: </b>
              {pokemon.abilities
                .map((x) => <>{x.ability.name}</>)
                .reduce((prev, cur, index) =>
                  index === 0
                  ? (cur) 
                  : (<>{prev}, {cur}</>), <></>
                )}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Moves: </b>
              {pokemon.moves
                .map((x) => <>{x.move.name}</>)
                .reduce((prev, cur, index) =>
                  index === 0
                  ? (cur) 
                  : (<>{prev}, {cur}</>), <></>
                )}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

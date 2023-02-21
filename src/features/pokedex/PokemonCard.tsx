import { FC } from "react";
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "./pokedexApi";
import { useAppDispatch } from "../../app/hooks";
import { add } from "../history/historySlice";
import { Spinner, Card } from "react-bootstrap";

interface PokemonProps {
  name: string;
}

export const PokemonCard: FC<PokemonProps> = ({ name }: PokemonProps) => {
  const { data, isLoading } = useGetPokemonByNameQuery(name);
  const dispatch = useAppDispatch();

  if (!!isLoading) {
    return (
      <Card>
        <Card.Body>
          <Spinner />
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      {!!data && (
        <Link to={`pokemon/${name}`} onClick={() => dispatch(add(data))}>
          <Card>
            <Card.Img variant="top" src={data.sprites.front_default} />
            <Card.Body>
              <Card.Title className="text-center">{data.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      )}
    </>
  );
};

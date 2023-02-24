import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "./pokedexApi";
import { useAppDispatch } from "../../app/hooks";
import { add } from "../history/historySlice";
import { Spinner, Card } from "react-bootstrap";

interface PokemonProps {
  name: string;
}

export const PokemonCard: FC<PokemonProps> = ({ name }: PokemonProps) => {
  const [skip, setSkip] = useState(false)
  const { data, isLoading, error } = useGetPokemonByNameQuery(name, {skip});
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

  if (!!error) {
    setSkip(true);
  }

  return (
    <>
      {!!data && (
        <Link
          style={{ paddingTop: "12px" }}
          to={`pokemon/${name}`}
          onClick={() => dispatch(add(data))}
        >
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

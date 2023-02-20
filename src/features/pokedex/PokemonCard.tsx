import { FC, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useGetPokemonByNameQuery } from "./pokedexApi";
import { PokemonDetails } from "./PokemonDetails";
import { useAppDispatch } from "../../app/hooks";
import { Pokemon } from "./types.d";
import { add } from "../history/historySlice";

interface PokemonProps {
  name: string;
}

export const PokemonCard: FC<PokemonProps> = ({ name }: PokemonProps) => {
  const { data} = useGetPokemonByNameQuery(name);
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleClick = (pokemon: Pokemon) => {
    setIsDisplayed(true);
    dispatch(add(pokemon));
  };

  return (
    <>
        {!!data && (
          <>
            <Button onClick={() => handleClick(data)} className="btn btn-light">
              <Card>
                <Card.Img variant="top" src={data.sprites.front_default} />
                <Card.Body>
                  <Card.Title className="text-center">{data.name}</Card.Title>
                </Card.Body>
              </Card>
            </Button>
            <PokemonDetails pokemon={data} display={isDisplayed} handleClose={() => { setIsDisplayed(false); }} />
          </>
        )}
        </>
  );
};

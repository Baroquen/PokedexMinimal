import { FC } from "react";
import { UrlBase } from "../features/pokedex/types.d";

interface ListProps {
  data: UrlBase[];
}

export const UrlBaseList: FC<ListProps> = ({ data }: ListProps) => {
  return (
    <>
      {data
        .map((x) => <>{x.name}</>)
        .reduce(
          (prev, cur, index) =>
            index === 0 ? (
              cur
            ) : (
              <>
                {prev}, {cur}
              </>
            ),
          <></>
        )}
    </>
  );
};

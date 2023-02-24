import { FC } from "react";
import { UrlBase } from "../features/pokedex/types.d";

interface ListProps {
  label: string;
  data: UrlBase[] | undefined;
}

export const UrlBaseList: FC<ListProps> = ({ label, data }: ListProps) => {
  return (
    <>
      <b>{label}: </b>
      {!!data && data
          .map((x) => <>{x.name}</>)
          .reduce(
            (prev, cur, index) =>
              index === 0 
                ? ( cur ) 
                : (<>{prev}, {cur}</>),
            <></>
          )}
    </>
  );
};

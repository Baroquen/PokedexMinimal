import { FC } from "react";

interface searchBarProps {
  disabled?: boolean;
  onChange: (n: string) => void;
}

export const SearchBar: FC<searchBarProps> = ({ disabled, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
      <input
        type="search"
        placeholder="Pikachu..."
        onChange={handleChange}
        disabled={disabled}
      />
  );
};

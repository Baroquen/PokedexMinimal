import { Pokedex } from "./features/pokedex/Pokedex";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  return (
    <Container>
      <Pokedex />
    </Container>
  );
}

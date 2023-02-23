import { FC, useState } from "react";
import { Outlet, NavLink, useOutletContext } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SearchBar } from "../features/history/SearchBar";

type ContextType = { filter: string };

export const Layout: FC = () => {
  const [filter, setFilter] = useState<string>("");

  const onChange = (newValue: string) => {
    setFilter(newValue);
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Collapse id="navbar">
            <Nav>
              <NavLink to="/">Home</NavLink>
              {" "}
              <NavLink to="/history">Recently Viewed</NavLink>
            </Nav>
          </Navbar.Collapse>
          <SearchBar onChange={onChange} />
        </Container>
      </Navbar>
      <Container>
        <Outlet context={{ filter }} />
      </Container>
    </Container>
  );
};

export function useFilter() {
  return useOutletContext<ContextType>();
}

import { FC, useState } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/history">Recently Viewed</Link>
              </Nav.Link>
            </Nav>
            <Container className="d-flex right">
              <SearchBar onChange={onChange} />
            </Container>
          </Navbar.Collapse>
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

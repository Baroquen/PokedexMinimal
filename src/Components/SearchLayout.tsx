import { FC, useState } from "react";
import { Outlet, NavLink, useOutletContext } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SearchBar } from "../features/history/SearchBar";

type ContextType = { filter: string };

export const SearchLayout: FC = () => {
  const [filter, setFilter] = useState<string>("");

  const onChange = (newValue: string) => {
    setFilter(newValue);
  };

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };  

  const activeLinkStyle = {
    margin: "1rem",
    color: 'blue',
  };  

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Nav>
            <NavLink style={({isActive}) => isActive ? activeLinkStyle : linkStyle } to="/">Home</NavLink>
            <NavLink style={({isActive}) => isActive ? activeLinkStyle : linkStyle } to="/history">Recently Viewed</NavLink>
          </Nav>
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

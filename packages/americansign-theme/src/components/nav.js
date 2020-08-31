import React from "react";
import { connect, styled } from "frontity";
import Link from "../components/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ state }) => (
  <Container>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
    <NavItem>
      <FontAwesomeIcon icon={faSearch} />
    </NavItem>
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin: 0 18px;
  font-size: 16px;

  & > a {
    color: #444;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
    &[aria-current="page"] {
      color: #fff;
    }
  }
  * > :last-child {
    color: #fff;
  }
`;

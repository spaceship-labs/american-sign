import React from "react";
import { connect, styled } from "frontity";
import Nav from "../components/nav";
// import Logo from "../assets/header/americansign-logo.svg";

const Header = () => (
  <Container>
    <Img src={Logo} alt="React Logo" />
    <Nav />
  </Container>
);

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 40px;
  background-color: #000;
`;

const Img = styled.img`
  width: 200px;
`;

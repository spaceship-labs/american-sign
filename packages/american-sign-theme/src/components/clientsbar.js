import React from "react";
import { styled } from "frontity";
import Asur from "../assets/home/Asur.svg";
import Xcaret from "../assets/home/Xcaret.svg";
import Ultrafemme from "../assets/images/home/Ultrafemme.png";
import Mayakoba from "../assets/images/home/mayakoba.png";
import Ultramar from "../assets/images/home/ultramarlogo.png";
import Loreal from "../assets/home/Loreal.svg";

const clientsLogos = [
  [Asur, "Asur"],
  [Xcaret, "Xcaret"],
  [Ultrafemme, "Ultrafemme"],
  [Mayakoba, "Mayakoba"],
  [Ultramar, "Ultramar"],
  [Loreal, "Loreal"],
];

const ClientsBar = () => (
  <Container>
    {clientsLogos.map(([logo, alt], index) => (
      <img key={index} src={logo} alt={alt} />
    ))}
  </Container>
);

export default ClientsBar;

const Container = styled.div`
  height: 200px;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: row;
  & > img {
    /* flex: 1; */
    width: 20px;
  }
`;

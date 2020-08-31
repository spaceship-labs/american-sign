import React from "react";
import { styled } from "frontity";
import Image from "@frontity/components/image";
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
      <div key={index}>
        <Image src={logo} alt={alt} />
      </div>
    ))}
  </Container>
);

export default ClientsBar;

const Container = styled.div`
  display: flex;
  background-color: #000;
  height: 200px;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  & > div {
    display: flex;
    /* flex: 1; */
    align-items: center;
    justify-content: center;
    & > img {
      width: 50%;
    }
  }
`;

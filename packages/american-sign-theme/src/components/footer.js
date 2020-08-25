import React from "react";
import { styled } from "frontity";

const Footer = () => (
  <MainContainer>
    <Container>
      <div></div>
      <div>
        <p>contacto</p>
        <p>sm. 307 mx. 305 lt. 2 al 9 bodega #14.</p>
        <p>blvd. luis donaldo colosio. carretera - aeropuerto.</p>
        <p>cancún, quintana roo 77500</p>
      </div>
      <div>
        <p>cancún</p>
        <p>(998) 884 16 41</p>
      </div>
      <div>
        <p>manténgase conectado</p>
        <div></div>
      </div>
    </Container>
  </MainContainer>
);

export default Footer;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 300px;
  background-color: #202124;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  color: #a6adb4;
  text-transform: uppercase;
  padding: 5em;
`;

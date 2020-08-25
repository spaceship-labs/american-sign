import React from "react";
import { styled } from "frontity";
import Button from "../components/button";
import Catalogo from "../assets/images/home/Catalogo.jpg";

const Signaling = () => (
  <MainContainer>
    <Container>
      <div>
        <h2>señalización covid-19</h2>
        <p>
          Te guiamos a través de este catálogo todas las formas en que se debe
          cumplir con las pautas
        </p>
        <p>
          requeridas y brindarle tranquilidad mientras reanudas las operaciones
          comerciales.
        </p>
        <Button name="DESCARGAR CATÁLOGO" />
      </div>
    </Container>
    <Container>
      <img src={Catalogo} alt="" />
    </Container>
  </MainContainer>
);

export default Signaling;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* flex: 1; */
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  & > img {
    min-width: 100%;
  }
  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    margin-left: 5em;
    & > h2 {
      text-transform: uppercase;
      font-size: 35px;
      line-height: 10px;
    }
    & > p {
      font-size: 16px;
      line-height: 4px;
    }
  }
`;
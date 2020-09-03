import React from "react";
import { styled } from "frontity";
import Button from "../components/button";

const Slide = () => (
  <Container>
    <ContentWrapper>
      <h1>Tu imagen merece lo mejor</h1>
      <p>
        Crea una apariencia de alta definición con la última tecnología en
        señaliación.
      </p>
      <Button name="VER PRODUCTOS" />
    </ContentWrapper>
  </Container>
);

export default Slide;

const Container = styled.div`
  padding: 0;
  max-width: 100%;
  height: 500px;
  background-color: #555555;
  display: flex;
  align-items: center;
  @media screen and (max-width: 560px) {
    justify-content: center;
  }
`;

const ContentWrapper = styled.div`
  color: #fff;
  margin-left: 100px;
  & > h1 {
    font-size: 50px;
    margin: 0;
  }
  & > p {
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;

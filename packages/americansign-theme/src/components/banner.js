import React from "react";
import { styled } from "frontity";
import Image from "@frontity/components/image";
import HPWall from "../assets/images/home/HP-Wallart.jpg";
import Button from "./button";

const Banner = () => (
  <Container>
    <ImageContainer>
      <Img src={HPWall} alt="HP Wallart" />
      <Content>
        <h2>HP Wall Suite</h2>
        <p>
          Diseñado para ayudarlo a impulsar un nuevo crecimiento en aplicaciones
          decorativas.
        </p>
        <p>
          Siena la experiencia de organizar toda su habitación acompañado de
          tecnología HP Wall suite y
        </p>
        <p>americansign ofrece para usted</p>
        <Button name="SABER MÁS" />
      </Content>
    </ImageContainer>
  </Container>
);

export default Banner;

const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  display: block;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  vertical-align: middle;
  color: white;
  & > h2 {
    font-size: 35px;
  }
  & > p {
    display: inline-table;
    vertical-align: middle;
    line-height: 100%;
    font-size: 16px;
    margin: 4px 0;
  }
`;

const Img = styled(Image)`
  max-width: 100%;
`;

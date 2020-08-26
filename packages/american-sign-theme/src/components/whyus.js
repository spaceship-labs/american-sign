import React from "react";
import { styled } from "frontity";
import Guarantee from "../assets/about/Garantia.svg";
import Personal from "../assets/about/Personal.svg";
import Envios from "../assets/about/Envios.svg";
import EcoGreen from "../assets/about/EcoGreen.svg";

const items = [
  {
    imgAttributes: [Guarantee, "Experiencia Garantizada"],
    Content: () => (
      <TextContainer>
        <strong>Experiencia Garantizada</strong>
        <p>Te ayudamos y asesoramos antes de </p>
        <p>iniciar tu proyecto.</p>
      </TextContainer>
    ),
  },
  {
    imgAttributes: [Personal, "Personal Capacitado"],
    Content: () => (
      <TextContainer>
        <strong>Personal capacitado</strong>
        <p>Contamos con la experiencia y los</p>
        <p>servicios más avanzados del mercado.</p>
      </TextContainer>
    ),
  },
  {
    imgAttributes: [Envios, "Entrega Rápida"],
    Content: () => (
      <TextContainer>
        <strong>Entrega Rápida</strong>
        <p>Ofrecemos tiempos de entrega y</p>
        <p>resultados confiables.</p>
      </TextContainer>
    ),
  },
  {
    imgAttributes: [EcoGreen, "Eco Green Sign"],
    Content: () => (
      <TextContainer>
        <strong>Eco Green Sign</strong>
        <p>Socialmente sustentables. Protegemos</p>
        <p>la flora y fauna del sureste mexicano.</p>
      </TextContainer>
    ),
  },
];

const Item = ({ imgAttributes: [icon, alt], Content }) => (
  <ItemContainer>
    <Circle>
      <Img src={icon} alt={alt} />
    </Circle>
    <Content />
  </ItemContainer>
);

const WhyUs = () => (
  <MainContainer>
    <div>
      <h2>¿por qué nosotros?</h2>
    </div>
    <Container>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Container>
  </MainContainer>
);

export default WhyUs;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div:nth-child(1) {
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    & > h2 {
      font-size: 35px;
      font-weight: 200;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: space-around; */
  /* margin: 25px 50px; */
`;

const TextContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  & > p {
    margin: 4px;
  }
  & > strong {
    margin: 10px;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const Img = styled.img`
  width: 80px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    min-width: 100%;
  }
`;

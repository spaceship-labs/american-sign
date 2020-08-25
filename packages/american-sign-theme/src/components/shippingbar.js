import React from "react";
import { styled } from "frontity";
import ShippingFast from "../assets/home/Envios.svg";
import Payment from "../assets/home/FacilidadPago.svg";
import Installation from "../assets/home/Instalacion.svg";
import Delivery from "../assets/home/Entrega.svg";

const items = [
  {
    imgAttributes: [ShippingFast, "Envíos"],
    title: "Envíos",
    Content: () => (
      <TextContainer>
        <p>Envíos a toda la República</p>
        <p>Mexicana y el mundo.</p>
      </TextContainer>
    ),
  },
  {
    imgAttributes: [Payment, "Facilidad Pago"],
    title: "Facilidades de pago",
    Content: () => (
      <TextContainer>
        <p>Paga a meses sin intereses con</p>
        <p>tarjeta o pregunta por american</p>
        <i>finance.</i>
      </TextContainer>
    ),
  },
  {
    imgAttributes: [Installation, "Instalación"],
    title: "Instalación",
    Content: () => (
      <TextContainer>
        <p>Contamos con personal</p>
        <p>capacitado en constante</p>
        <p>capacitación.</p>
      </TextContainer>
    ),
  },
  {
    imgAttributes: [Delivery, "Entrega"],
    title: "Entrega",
    Content: () => (
      <TextContainer>
        <p>Fecha de entrega personalizada.</p>
        <p>Recibe el día que más te</p>
        <p>convenga.*</p>
      </TextContainer>
    ),
  },
];

const Item = ({ imgAttributes: [icon, alt], title, Content }) => (
  <ItemContainer>
    <Circle>
      <Img src={icon} alt={alt} />
    </Circle>
    <strong>{title}</strong>
    <Content />
  </ItemContainer>
);

const ShippingBar = () => (
  <Container>
    {items.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </Container>
);

export default ShippingBar;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 25px 50px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  & > strong {
    margin: 15px 0;
  }

  @media only screen and (max-width: 800px) {
    min-width: 100%;
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

const TextContainer = styled.div`
  text-align: center;
  & > p {
    margin: 4px 0;
  }
`;

const Img = styled.img`
  width: 80px;
`;

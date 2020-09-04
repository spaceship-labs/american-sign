import React from 'react';
import ShippingFast from '../assets/home/Envios.svg';
import Payment from '../assets/home/FacilidadPago.svg';
import Installation from '../assets/home/Instalacion.svg';
import Delivery from '../assets/home/Entrega.svg';
import { Container, Row, Col } from 'reactstrap';

const items = [
  {
    imgAttributes: [ShippingFast, "Envíos"],
    title: "Envíos",
    Content: () => (
      <>
        <p>Envíos a toda la República</p>
        <p>Mexicana y el mundo.</p>
      </>
    ),
  },
  {
    imgAttributes: [Payment, "Facilidad Pago"],
    title: "Facilidades de pago",
    Content: () => (
      <>
        <p>Paga a meses sin intereses con</p>
        <p>tarjeta o pregunta por american</p>
        <i>finance.</i>
      </>
    ),
  },
  {
    imgAttributes: [Installation, "Instalación"],
    title: "Instalación",
    Content: () => (
      <>
        <p>Contamos con personal</p>
        <p>capacitado en constante</p>
        <p>capacitación.</p>
      </>
    ),
  },
  {
    imgAttributes: [Delivery, "Entrega"],
    title: "Entrega",
    Content: () => (
      <>
        <p>Fecha de entrega personalizada.</p>
        <p>Recibe el día que más te</p>
        <p>convenga.*</p>
      </>
    ),
  },
];


const Item = ({ imgAttributes: [Icon, alt], title, Content }) => (
  <Col lg="3" mg="12" className="mt-5 text-center">
    <div className="rounded-circle text-white mb-2">
      <Icon width="50px" alt={alt} />
    </div>
    <strong>{title}</strong>
    <Content />
  </Col>
);

const ShippingBar = () => (
  <Container>
    <Row>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Row>
  </Container>
);

export default ShippingBar;
import React from 'react';
import { CardDeck, Container } from 'reactstrap';
import ServiceCard from '../ServiceCard';
import rotulacion from "../assets/images/home/camionetas-2.jpg";
import impresionDigital from "../assets/images/home/Impresion-Digital.jpg";
import senalizacion from "../assets/images/home/Senalizacion.jpg";
import anunciosLuminosos from "../assets/images/home/CajaDeluz.jpg";
import corteLaser from "../assets/images/home/Corte-Laser.jpg";
import displays from "../assets/images/home/Displays.jpg";
import decoPrint from "../assets/images/home/DecoPrint.jpg";
import gruposConvenciones from "../assets/images/home/G&C.jpg";
import aplicaciones from "../assets/images/home/Aplicaciones.jpg";

const services = [
  {
    title: "rotulación",
    src: rotulacion,
  },
  {
    title: "impresión digital",
    src: impresionDigital,
  },
  {
    title: "señalización",
    src: senalizacion,
  },
  {
    title: "anuncios luminosos",
    src: anunciosLuminosos,
  },
  {
    title: "corte láser",
    src: corteLaser,
  },
  {
    title: "displays & stands",
    src: displays,
  },
  {
    title: "deco print",
    src: decoPrint,
  },
  {
    title: "grupos & convenciones",
    src: gruposConvenciones,
  },
  {
    title: "aplicaciones",
    src: aplicaciones,
  },
];
const HomeServices = () => {
  return (
    <Container>
      <CardDeck>
        {
          services.map((ServiceProps) => <ServiceCard {...ServiceProps} />)
        }
      </CardDeck>
    </Container>
  );
};


export default HomeServices;
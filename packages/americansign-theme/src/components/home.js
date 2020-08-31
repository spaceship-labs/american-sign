import React from "react";
import { styled, connect } from "frontity";
import Slide from "./slide";
import ServiceCard from "./service";
import GalleryBar from "./gallerybar";
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

const Home = ({ state }) => (
  <div>
    <Slide />
    <ServicesContainer>
      {services.map(({ title, src }, index) => (
        <ServiceCard key={index} title={title} src={src} />
      ))}
    </ServicesContainer>
    <GalleryBar />
  </div>
);

export default connect(Home);

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 50px;
  flex-direction: row;
  flex-wrap: wrap;
`;

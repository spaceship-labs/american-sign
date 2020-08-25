import React from "react";
import { styled } from "frontity";
import Slide from "../../components/slide";
import ServiceCard from "../../components/card/service";
import ShippingBar from "../../components/shippingbar";
import Banner from "../../components/banner";
import ClientsBar from "../../components/clientsbar";
import Signaling from "../../components/signaling";
import rotulacion from "../../assets/images/home/camionetas-2.jpg";
import impresionDigital from "../../assets/images/home/Impresion-Digital.jpg";
import senalizacion from "../../assets/images/home/Senalizacion.jpg";
import anunciosLuminosos from "../../assets/images/home/CajaDeluz.jpg";
import corteLaser from "../../assets/images/home/Corte-Laser.jpg";
import displays from "../../assets/images/home/Displays.jpg";
import decoPrint from "../../assets/images/home/DecoPrint.jpg";
import gruposConvenciones from "../../assets/images/home/G&C.jpg";
import aplicaciones from "../../assets/images/home/Aplicaciones.jpg";

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

const Home = () => (
  <div>
    <Slide />
    <ServicesContainer>
      {services.map(({ title, src }, index) => (
        <ServiceCard key={index} title={title} src={src} />
      ))}
    </ServicesContainer>
    <ShippingBar />
    <Banner />
    <ClientsBar />
    <Signaling />
  </div>
);

export default Home;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 50px;
  flex-direction: row;
  flex-wrap: wrap;
`;

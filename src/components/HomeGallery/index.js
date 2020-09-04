import React from 'react';
import { Container, Button } from 'reactstrap';

const HomeGallery = () => (
  <Container style={ContainerStyle} className="pl-5 align-middle" fluid>
    <h2 className="text-uppercase">Galería de fotos</h2>
    <p>Conoce nuestro trabajo más reciente.</p>
  </Container>
);

const ContainerStyle = {
  minHeight: "70vh",
  paddingTop: "30vh"
};

export default HomeGallery;
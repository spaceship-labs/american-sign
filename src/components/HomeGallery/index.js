import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gallery from '../Gallery';
const HomeGallery = () => (
  <Container style={ContainerStyle} className="pl-5 align-middle" fluid>
    <Row>
      <Col lg={3} sm={12} className="pt-5">
        <h2 className="text-uppercase">Galería de fotos</h2>
        <p>Conoce nuestro trabajo más reciente.</p>
      </Col>
      <Col lg={9} sm={12}>
        <Gallery />
      </Col>
    </Row>
  </Container>
);

const ContainerStyle = {
  minHeight: "70vh",
  paddingTop: "20vh"
};

export default HomeGallery;
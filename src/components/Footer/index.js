import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Isotype from '../assets/footer/isotipo.svg'
const Footer = () => (
  <footer className="container-fluid bg-dark text-white pt-4 pb-4">
    <Container className="text-muted mt-4">
      <Row className="text-uppercase text-white">
        <Col lg={1} xs={2}><Isotype width="50px" /></Col>
        <Col lg={5} xs={6}>
          <strong>Contacto</strong>
        </Col>
        <Col lg={{ size: 3, offset: 3 }} xs={4}>
          <strong> Manténgase en contacto</strong>
        </Col>
      </Row>
      <Row className="text-uppercase">
        <Col lg={{ size: 5, offset: 1 }} xs={5} className="border-right border-light">
          <p className="mb-0">sm. 307 mx. 305 lt. 2 al 9 bodega #14.</p>
          <p className="mb-0">blvd. luis donaldo colosio. carretera - aeropuerto.</p>
          <p className="mb-0">cancún, quintana roo 77500</p>
        </Col>
        <Col lg={3} xs={4}>
          <p className="mb-0">cancún</p>
          <p className="mb-0">(998) 884 16 41</p>
        </Col>
        <Col lg={3} xs={2} className="text-center">I Y F</Col>
      </Row>

      <Col className="text-muted" lg={{ size: 2, offset: 10 }} xs={{ size: 4, offset: 8 }}>American Sign 2020 </Col>
    </Container>
  </footer >
)

export default Footer;
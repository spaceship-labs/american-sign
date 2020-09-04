import React from 'react';
import Autosur from '../assets//home/Asur.svg'
import Xcaret from '../assets/home/Xcaret.svg'
import Ultrafemme from '../assets/images/home/Ultrafemme.png'
import Mayakoba from '../assets/images/home/mayakoba.png'
import Ultramar from '../assets/images/home/ultramarlogo.png'
import Loreal from '../assets/home/Loreal.svg'
import { Container, Row, Col } from 'reactstrap';


const BlackBrand = () => (
  <Container fluid className="bg-dark pt-4 pb-4">
    <Container>
      <Row>
        <Col className="mt-4" lg={2}><Autosur height="25px" /></Col>
        <Col className="mt-4" lg={2}><Xcaret height="25px" /></Col>
        <Col className="" lg={2}><img height="75px" src={Ultrafemme} /></Col>
        <Col className="" lg={2}><img height="85px" src={Mayakoba} /></Col>
        <Col className="mt-4" lg={2}><img height="25px" src={Ultramar} /></Col>
        <Col className="mt-4" lg={2}><Loreal height="25px" /></Col>
      </Row>
    </Container>
  </Container>
)

export default BlackBrand;
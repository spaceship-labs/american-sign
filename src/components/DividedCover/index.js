import React from 'react';
import CoverWithContent from '../CoverWithContent';
import { Row, Col, Button } from 'reactstrap';
import Catalogos from '../assets/images/home/Catalogo.jpg'
const DividedCover = () => (
  <CoverWithContent pt="0" color="#000">
    <Row>
      <Col lg={{ size: 5, offset: 1 }} sm={12} className="pr-5" style={ColumnStyle}>
        <h2>SEÑALIZACIÓN COVID-19</h2>
        <p className="mt-4">
          Te guiamos a travez de esté catalogo todas las formas en que se debe cumplir con
          las pautas requeridas y brindarle tranquilidad mientras reanuda las operaciones
          comerciales.
        </p>
        <Button className="pl-4 pr-4" color="primary">DESCARGAR CATÁLOGO</Button>
      </Col>
      <Col className="pl-0 pr-0" lg={6} sm={12}>
        <CoverWithContent bgImage={Catalogos} />
      </Col>
    </Row>
  </CoverWithContent>
);

const ColumnStyle = {
  marginTop: "20vh"
}
export default DividedCover;
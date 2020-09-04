import React from 'react';
import WallSuite from '../assets/images/home/HP-Wallart.jpg';
import CoverWithContent from '../CoverWithContent';
import { Button, Col } from 'reactstrap';

const CoverWallSuite = () => (
  <CoverWithContent bgImage={WallSuite} pt="10vh">
    <Col lg={12} md={6} sm={6}>
      <h2 className="text-center">HP Wall Suite</h2>
      <p className="text-center font-weight-bold">
        Diseñado para ayudarlo a impulsar un nuevo crecimiento en aplicaciones decorativas.
      </p>
      <p className="text-center font-weight-bold">
        Sienta la experiencia de organizar toda su habitación acompañado de la tecnología HP Wall Suite y
      </p>
      <p className="text-center font-weight-bold">
        americansign ofrece para usted
      </p>
      <div className="d-flex justify-content-center mb-4">
        <Button className="text-center pl-4 pr-4" color="primary">SABER MÁS</Button>
      </div>
    </Col>

  </CoverWithContent>
);

export default CoverWallSuite;
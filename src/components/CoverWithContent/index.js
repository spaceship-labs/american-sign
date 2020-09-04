import React from 'react';

import { Container } from 'reactstrap';

const Cover = ({ children, bgImage, pt = "30vh", color = "#fff" }) => (

  <Container fluid style={CoverStyle(bgImage, pt, color)}>
    {children}
  </Container>
);

const CoverStyle = (bgImage, pt, color) => ({
  paddingTop: pt,
  paddingBottom: pt,
  color: color,
  minHeight: "70vh",
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "80% 100%",
});

export default Cover;
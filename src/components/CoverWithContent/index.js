import React from 'react';

import { Container } from 'reactstrap';

const Cover = ({ children, bgImage, pt = "30vh", color = "#fff", bgColor = "#f2f2f2" }) => (

  <Container fluid style={CoverStyle(bgImage, pt, color, bgColor)}>
    {children}
  </Container>
);

const CoverStyle = (bgImage, pt, color, bgColor) => ({
  paddingTop: pt,
  paddingBottom: pt,
  color: color,
  minHeight: "70vh",
  backgroundColor: bgColor,
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "80% 100%",
});

export default Cover;
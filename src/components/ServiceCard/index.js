import React from 'react';
import { Col, Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';

const ServiceCard = ({
  src,
  title
}) => (
    <Col lg="4" md="6" sm="12" className=" mt-3">
      <Card inverse className="h-100">
        <CardImg top width="100%" src={src} alt="service" />
        <CardImgOverlay className="text-center" style={cardStyle}>
          <CardTitle>{title}</CardTitle>
          <Button style={buttonStyle} outline>VER MÁS</Button>
        </CardImgOverlay>
      </Card>
    </Col>
  );

const cardStyle = {
  backgroundColor: "rgba(0,0,0,.5)",
  paddingTop: "40%",
  textTransform: "uppercase",
  letterSpacing: "3px",
};
const buttonStyle = {
  borderColor: "#fff",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  color: "#fff"
};
export default ServiceCard;
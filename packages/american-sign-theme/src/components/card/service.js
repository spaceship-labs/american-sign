import React from "react";
import { styled } from "frontity";
import camionetas from "../../assets/images/home/camionetas-2.jpg";

const ServiceCard = ({ title, src }) => (
  <Container>
    <img src={camionetas} alt="" />
  </Container>
);

export default ServiceCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
  margin-top: 15px;
  & > img {
    width: 95%;
    /* height: 200px; */
    max-width: 100%;
    max-height: 100%;
  }
`;

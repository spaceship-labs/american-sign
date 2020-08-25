import React from "react";
import { styled } from "frontity";

const ServiceCard = ({ title, src }) => (
  <Container>
    <ImageContainer>
      <img src={src} alt="" />
      <Content>
        <p>{title}</p>
        <Button>ver más</Button>
      </Content>
    </ImageContainer>
  </Container>
);

export default ServiceCard;

const Container = styled.div`
  justify-content: center;
  margin: 15px;
  position: relative;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.65;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  transition: opacity 0.6s;
  vertical-align: middle;
  text-transform: uppercase;
  & > p {
    color: white;
    display: inline-table;
    vertical-align: middle;
    line-height: 100%;
    font-size: 16px;
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: block;
  height: 100%;
  & > img {
    height: 100%;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 6px;
  border-color: #ffffff;
  outline: none;
  cursor: pointer;
`;

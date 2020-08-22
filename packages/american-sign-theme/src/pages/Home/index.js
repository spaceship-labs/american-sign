import React from "react";
import { styled } from "frontity";
import Slide from "../../components/slide";
import ServiceCard from "../../components/card/service";

const Home = () => (
  <div>
    <Slide />
    <ServicesContainer>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </ServicesContainer>
  </div>
);

export default Home;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 50px;
  flex-direction: row;
  flex-wrap: wrap;
`;

import React from "react";
import { styled } from "frontity";
import Slide from "../../components/slide";
import WhyUs from "../../components/whyus";
import WhoAreWe from "../../components/whoarewe";

const AboutUs = () => (
  <Main>
    <Slide />
    <WhyUs />
    <WhoAreWe />
  </Main>
);

export default AboutUs;

const Main = styled.div`
  background-color: #fff;
`;

import React from "react";
import { styled } from "frontity";
import Slide from "../../components/slide";
import WhyUs from "../../components/whyus";
import WhoAreWe from "../../components/whoarewe";
import CertificationsBar from "../../components/certifications";

const AboutUs = () => (
  <Main>
    <Slide />
    <WhyUs />
    <WhoAreWe />
    <CertificationsBar />
  </Main>
);

export default AboutUs;

const Main = styled.div`
  background-color: #fff;
`;

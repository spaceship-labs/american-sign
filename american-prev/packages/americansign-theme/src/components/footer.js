import React from "react";
import { styled } from "frontity";
import Image from "@frontity/components/image";
import Isotype from "../assets/footer/Isotipo.svg";
// import Facebook from "../assets/footer/Facebook.svg";
// import Instagram from "../assets/footer/Instagram.svg";
// import YouTube from "../assets/footer/YouTube.svg";

// const socialMediaLogos = [Facebook, Instagram, YouTube];

const Footer = () => (
  <MainContainer>
    <Container>
      <div>
        <IsotypeImage src={Isotype} alt="" />
      </div>
      <div>
        <p>contacto</p>
        <p>sm. 307 mx. 305 lt. 2 al 9 bodega #14.</p>
        <p>blvd. luis donaldo colosio. carretera - aeropuerto.</p>
        <p>cancún, quintana roo 77500</p>
      </div>
      <div>
        <div>
          <p>cancún</p>
          <p>(998) 884 16 41</p>
        </div>
      </div>
      <div>
        <p>manténgase conectado</p>
      </div>
    </Container>
    <div></div>
  </MainContainer>
);

export default Footer;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 300px;
  background-color: #202124;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  color: #a6adb4;
  text-transform: uppercase;
  & > div:nth-of-type(1) {
    display: flex;
    flex-basis: 20%;
    justify-content: flex-end;
    & > img {
      width: 10%;
      margin-bottom: 80px;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    margin-left: 5px;
    flex-direction: column;
    justify-content: center;
    & > p:nth-of-type(1) {
      font-weight: 600;
    }
    & > p {
      margin: 5px;
    }
  }
  & > div:nth-of-type(3) {
    display: flex;
    margin-left: 15px;
    flex-basis: 20%;
    flex-direction: column;
    justify-content: center;
    & > div {
      border-left: 2px solid #a6adb4;
      & > p {
        margin: 5px;
      }
    }
  }
  & > div:nth-of-type(4) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: row;
      & > img {
        margin-right: 45px;
        width: 40px;
      }
    }
  }
`;

const IsotypeImage = styled(Image)`
  width: 10%;
  margin-bottom: 80px;
`;

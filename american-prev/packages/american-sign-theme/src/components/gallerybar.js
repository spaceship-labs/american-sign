import React from "react";
import { styled } from "frontity";

const GalleryBar = () => (
  <MainContainer>
    <div>
      <div>
        <h2>galería de fotos</h2>
        <p>conoce nuestro trabajo más reciente</p>
      </div>
    </div>
    <div></div>
  </MainContainer>
);

export default GalleryBar;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 400px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
  }
`;

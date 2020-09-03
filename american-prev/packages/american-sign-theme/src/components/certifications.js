import React from "react";
import { styled } from "frontity";
import Greenguard from "../assets/images/about/greenguard+.png";
import TresM from "../assets/about/3M.svg";
import Mcs from "../assets/about/3M-MCS.svg";

const CertificationsBar = () => (
  <Main>
    <div>
      <h2>certificaciones</h2>
      <p>americansign ha sido reconocido por sus logros durante varios años.</p>
    </div>
    <div></div>
  </Main>
);

export default CertificationsBar;

const Main = styled.div`
  display: flex;
  flex: 1;
`;

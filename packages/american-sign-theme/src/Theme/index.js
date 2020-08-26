import React from "React";
import { Global, css, connect, styled, Head } from "frontity";
import Home from "../pages/Home";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutUs from "../pages/AboutUs";

const Theme = () => (
  <>
    <Global styles={globalStyles} />
    <Header />
    <AboutUs />
    <Footer />
  </>
);

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Open Sans", Open Sans Light, sans-serif;
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTRa1RVmPjeKy21_GQJaLlJI.woff)
      format("woff");
    background-color: #ebeded;
  }
`;

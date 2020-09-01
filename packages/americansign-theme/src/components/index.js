import React from "react";
import { connect, Head, Global, css } from "frontity";
import Title from "./title";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles} />

      <Header />
      <Home />
      <Footer />
      {JSON.stringify(state)}
      {}
    </>
  );
};

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

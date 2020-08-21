import React from "React";
import { Global, css, connect, styled, Head } from "frontity";
import Home from "../pages/Home";
import Header from "../components/header";

const Theme = () => (
  <>
    <Global styles={globalStyles} />
    <Header />
  </>
);

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
  }
`;

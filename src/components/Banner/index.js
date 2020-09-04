import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Banner = ({buttonText, contentText}) => (
  <Jumbotron style={JumboStyle} className="bg-secondary text-white pl-5 align-middle" fluid>
    {contentText}
    <Button color="primary">{buttonText}</Button>
  </Jumbotron>
);

const JumboStyle = {
  minHeight: "70vh",
  paddingTop: "30vh"
};

export default Banner;
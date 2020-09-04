import React from "react"
import { Jumbotron, Button } from "reactstrap"

const Banner = ({ buttonText, contentText }) => (
  <Jumbotron
    style={JumboStyle}
    className="bg-secondary text-white pl-5 align-middle"
    fluid
  >
    <>
      <h1>
        Tu imagen merece <strong>lo mejor</strong>
      </h1>
      <p>
        Crea una apariencia de alta definición con la última tecnología en
        señalización.
      </p>
    </>
    <Button color="primary"> VER PRODUCTOS </Button>
  </Jumbotron>
)

const JumboStyle = {
  minHeight: "70vh",
  paddingTop: "30vh",
}

export default Banner

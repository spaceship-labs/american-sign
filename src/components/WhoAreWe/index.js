import React from "react"
import Dsign from "../assets/images/about/03.jpg"
import { Container, Row, Col } from "reactstrap"
import SectionTitle from "../SectionTitle"

export default function WhoAreWe() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <img width="100%" src={Dsign} alt="service" />
        </Col>
        <Col lg={6} style={{ backgroundColor: "#ebeded" }}>
          <SectionTitle>
            <h2>¿Quiénes somos?</h2>
          </SectionTitle>
          <p>
            americansign se fundó en 1993, desde el inicio nuestra empresa ha
            evolucionado cada día ofreciéndole innovaciones tecnológicas y
            verdaderas soluciones gráficas.
            <br />
            En 1996 fuimos los primeros en utilizar la impresión digital en el
            Sureste de México, impulsando fuertemente la era moderna de la
            publicidad exterior.
            <br />
            Somos reconocidos en la industria como la empresa más estable y con
            el equipo tecnlógico más actualizado en el mercado.
          </p>
        </Col>
      </Row>

      <SectionTitle></SectionTitle>
    </Container>
  )
}

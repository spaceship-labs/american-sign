import React from "react"
import { Container, Row, Col } from "reactstrap"
import Guarantee from "../assets/about/Garantia.svg"
import Personal from "../assets/about/Personal.svg"
import Envios from "../assets/about/Envios.svg"
import EcoGreen from "../assets/about/EcoGreen.svg"

const items = [
  {
    imgAttributes: [Guarantee, "Envíos"],
    title: "Experiencia Garantizada",
    Content: () => (
      <>
        <p>Te ayudamos y asesoramos antes de iniciar tu proyecto.</p>
      </>
    ),
  },
  {
    imgAttributes: [Envios, "Facilidad Pago"],
    title: "Personal capacitado",
    Content: () => (
      <>
        <p>
          Contamos con la experiencia y los servicios más avanzados del mercado.
        </p>
      </>
    ),
  },
  {
    imgAttributes: [Personal, "Instalación"],
    title: "Enrtega rápida",
    Content: () => (
      <>
        <p>Ofrecemos tiempos de entrega y resultados confiables.</p>
      </>
    ),
  },
  {
    imgAttributes: [EcoGreen, "Entrega"],
    title: "Eco Green Sign",
    Content: () => (
      <>
        <p>
          Socialmente sustentables. Protegemos la flora y fauna del sureste
          mexicano.
        </p>
      </>
    ),
  },
]

const Item = ({ imgAttributes: [Icon, alt], title, Content }) => (
  <Col lg="3" mg="12" className="mt-5 text-center">
    <div className="rounded-circle text-white mb-2">
      <Icon width="50px" alt={alt} />
    </div>
    <strong>{title}</strong>
    <Content />
  </Col>
)

const WhyUsBar = () => (
  <Container>
    <Container className="text-center">
      <h2>¿POR QUÉ NOSOTROS?</h2>
    </Container>
    <Container>
      <Row>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Row>
    </Container>
  </Container>
)

export default WhyUsBar

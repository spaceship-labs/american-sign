import React from "react"
import { Container, Row, Col } from "reactstrap"

const SectionTitle = ({ children }) => (
  <Container fluid className="text-center">
    {children}
  </Container>
)

export default SectionTitle

import React from 'react';
import { Container, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'
const ContactForm = () => (
  <Container className="pt-4 mt-4 mb-5 text-muted">
    <Col lg={{ size: 8, offset: 2 }} sm={12}>
      <h1 class="text-uppercase text-left">Trabajemos juntos</h1>
      <p> Rellene el siguiente formulario y nos pondremos en contacto con usted.</p>
      <Form>
        <Row>
          <Col lg={6} sm={12}>
            <FormGroup>
              <Input style={InputStyle} type="text" name="Name" id="Name" placeholder="Nombre" />
            </FormGroup>
          </Col>
          <Col lg={6} sm={12}>
            <FormGroup>
              <Input style={InputStyle} type="text" name="Phone" id="Phone" placeholder="Teléfono" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input style={InputStyle} type="email" name="Email" id="email" placeholder="E-mail" />
        </FormGroup>
        <Label>¿Necesita asistencia de diseño gráfico?</Label>
        <FormGroup check>
          <Label check>
            <Input style={InputStyle} type="checkbox" />{' '} Si
        </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input style={InputStyle} type="checkbox" />{' '} No
        </Label>
        </FormGroup>
        <FormGroup className="mt-2">
          <Label for="exampleText">Describa su proyecto</Label>
          <Input style={InputStyle} type="textarea" name="text" rows={8} />
        </FormGroup>
        <Button className="col-12 text-center" color="primary">Enviar</Button>

      </Form>
      <small>
        <p className="text-muted mt-4 text-center"> Enseguida nos pondremos en contacto con usted</p>
        <p className="text-center"><a className="text-secondary" href="mailto:ventas@americansign.com">ventas@americansign.com</a> </p>
      </small>
    </Col>

  </Container>
)

const InputStyle = {
  backgroundColor: "#f2f2f2",
  resize: "none"
}

export default ContactForm;
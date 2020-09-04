import React from "react";
import { Col } from 'reactstrap';
import Layout from "../components/layout";
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import CoverWithContent from '../components/CoverWithContent';
import Footer from '../components/Footer';
export default function Home() {
  return <Layout PageBg="#fff">
    <Header />
    <ContactForm />
    <CoverWithContent color="#000" pt="10vh" bgColor="#f2f2f2">
      <Col lg={6}>
        Visitanos y platiquemos de como tu próximo proyecto se convertirá en un
        trabajo de éxito.
      </Col>
    </CoverWithContent>
    <Footer />
  </Layout>
}

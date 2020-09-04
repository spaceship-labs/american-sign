import React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import Banner from "../components/Banner"
import WhyUsBar from "../components/WhyUsBar"

export default function Acerca() {
  const headerOptions = {
    contentText: (
      <>
        <h1>WIDE FORMAT PRINT LAB</h1>
        <p>Impulsando la era moderna de la publicidad exterior desde 1993</p>
      </>
    ),
    buttonText: " CONOCE MÁS ",
  }
  return (
    <Layout>
      <Header />
      <Banner {...headerOptions} />
      <WhyUsBar />
      Hello world!G
    </Layout>
  )
}

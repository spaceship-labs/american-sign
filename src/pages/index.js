import React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import Banner from "../components/Banner"
import HomeServices from "../components/HomeServices"
import ShippingBar from "../components/Shippingbar"
import CoverWithContent from "../components/WallSuiteCover"
import HomeGallery from "../components/HomeGallery"

export default function Home() {
  const headerOptions = {
    contentText: (
      <>
        <h1>
          Tu imagen merece <strong>lo mejor</strong>
        </h1>
        <p>
          Crea una apariencia de alta definición con la última tecnología en
          señalización.
        </p>
      </>
    ),
    buttonText: " VER PRODUCTOS ",
  }

  return (
    <Layout>
      <Header />
      <Banner {...headerOptions} />
      <HomeServices />
      <ShippingBar />
      <CoverWithContent />
      <HomeGallery />
      Hello world!2
    </Layout>
  )
}

import React from "react";
import Layout from "../components/layout";
import Header from '../components/Header';
import Banner from '../components/Banner';
import HomeServices from '../components/HomeServices';
import ShippingBar from '../components/Shippingbar';
import CoverWithContent from '../components/WallSuiteCover';
import HomeGallery from '../components/HomeGallery';

export default function Home() {
  return <Layout>
    <Header />
    <Banner />
    <HomeServices />
    <ShippingBar />
    <CoverWithContent />
    <HomeGallery />
    Hello world!2
  </Layout>
}

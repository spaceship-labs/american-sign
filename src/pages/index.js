import React from "react";
import Layout from "../components/layout";
import Header from '../components/Header';
import Banner from '../components/Banner';
import HomeServices from '../components/HomeServices';
import ShippingBar from '../components/Shippingbar';
import CoverWithContent from '../components/WallSuiteCover';
import HomeGallery from '../components/HomeGallery';
import BlackBrands from '../components/BlackBrands';
import DividedCover from '../components/DividedCover';
import Footer from '../components/Footer';
export default function Home() {
  return <Layout>
    <Header />
    <Banner />
    <HomeServices />
    <ShippingBar />
    <CoverWithContent />
    <HomeGallery />
    <BlackBrands />
    <DividedCover />
    <Footer />
  </Layout>
}

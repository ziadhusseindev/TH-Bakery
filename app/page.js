import React from "react";
import Hero from "/components/Hero";
import OurBread from '/components/OurBread';
import WhyUs from "@/components/WhyUs";
import OurMenu from "@/components/OurMenu";
import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";



const HomePage = () => {
  return (
    <>
       <Hero />
       <OurBread />
       <WhyUs />
       <OurMenu />
       <Banner />
       <Clients />
       <Contact />
    </>
  );
};

export default HomePage;

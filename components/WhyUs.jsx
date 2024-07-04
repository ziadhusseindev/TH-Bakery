"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      Offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full flex lg:flex-raw flex-raw justify-between items-center"
    >
      <div
        id="content-section"
        className="lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-20"
      >
        <h1
          data-aos="zoom-in"
          className="text-5xl font-semibold leading-[55px]"
        >
          Where Every Treat <br /> Tells a Tale
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="150"
          className="text-center text-xl text-slate-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quaerat corrupti, ipsum eveniet sunt a? Quaerat excepturi, qui
          laboriosam doloremque hic dolor ipsam alias cum harum error nostrum
          necessitatibus esse?
        </p>
        <button
          data-aos="flip-up"
          data-aos-delay="500"
          className="border-2 border-black px-14 py-3 rounded-full font-bold"
        >
          Read More
        </button>
      </div>

      <div data-aos="zoom-in" data-aos-delay="150" id="image-section" className="lg:w-[50%] w-full">
        <Image src="/banner6.jpg" alt="hero-banner" width={1005} height={600} className="bg-cover bg-center"/>
      </div>
    </section>
  );
};

export default WhyUs;

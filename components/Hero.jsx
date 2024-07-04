"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      Offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="hero"
      className="w-full flex lg:flex-row flex-col justify-between items-start"
    >
      <div id="image-section" className="lg:w-[50%] w-full">
        <Image
          data-aos="zoom-in"
          src="/hero.jpg"
          alt="hero-banner"
          width={1005}
          height={600}
          className="bg-cover bg-center"
        />
      </div>

      <div
        id="content-section"
        className="lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-20"
      >
        <Image
          data-aos="zoom-in"
          data-aos-delay="200"
          src="/logo.png"
          alt="logo"
          width={120}
          height={100}
        />
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="text-5xl text-black text-center leading-[55px]"
        >
          Fresh Breads <br /> Handcrafted Daily!
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-center text-1xl text-slate-500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint
          cumque officiis earum, magni, modi nobis, incidunt ullam praesentium
          minima recusandae. Sit facilis commodi enim ab nemo animi tempora
          iure.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          className="border-2 border-black px-5 py-2 mt-3 rounded-full text-sm font-semibold transform hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default Hero;

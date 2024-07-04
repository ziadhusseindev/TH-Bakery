"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 py-20 lg:px-20 px-10">
      <h1
        data-aos="zoom-in"
        className=" uppercase text-5xl font-semibold leading-[55px] text-black text-center"
      >
        Our freshly baked bread is the <br />
        hero of our breakfast menu
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-center text-xl text-slate-600"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste
        est reprehenderit incidunt officiis, <br/> deleniti explicabo laboriosam
        possimus laudantium tenetur illum iusto minima facere maiores sit, error
        nam quos tempora!
      </p>
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="border-2 border-black text-black px-14 py-4 rounded-full font-bold"
      >
        Read More
      </button>
      <div className="w-full flex flex-col bg-center bg-cover justify-center items-center">
        <Image
          data-aos="zoom-in"
          data-aos-delay="500"
          src="/banner3.jpg"
          alt="hero-banner"
          width={800}
          height={600}
          className="bg-cover bg-center"
        />
      </div>
    </section>
  );
};

export default Banner;

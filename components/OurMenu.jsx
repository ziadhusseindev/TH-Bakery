"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { menus } from "@/export";

const OurMenu = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, 
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="menu"
      className="w-full bg-cover bg-center h-fit flex flex-col justify-start items-center gap-10 py-20 lg:px-20 px-10"
      style={{ backgroundImage: `url('/banner10.jpg')` }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-[55px] text-white font-semibold text-center"
      >
        Our Fresh Menu
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4"
      >
        {menus.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center bg-black gap-4 p-10 rounded-xl h-60 opacity-75"
          >
            <h1 className="text-3xl font-semibold text-white">{item.title}</h1>
            <p className="text-white font-semibold">{item.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft } from "react-icons/fa";
import { clients } from "@/export";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full flex flex-col justify-center items-center gap-20 bg-cover h-fit py-20 lg:px-20 px-10 bg-center"
      style={{ backgroundImage: `url('/banner1.jpg')` }}
    >
      <h1
        data-aos="zoom-in"
        className="text-[55px] text-white font-semibold text-center"
      >
        Read What Our Clients Say
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-12"
      >
        {clients.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-1 bg-teal-700  h-[350px] p-10 rounded-lg relative"
          >
            <div
              id="icon-box"
              className="bg-white p-6 rounded-full text-teal-700 absolute -top-10 "
            >
              <FaQuoteLeft className="size-10" />
            </div>
            <p className="text-white text-lg">{item.about}</p>
            <h1 className="pt-6 text-white text-xl font-bold uppercase">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

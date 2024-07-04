"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ourbreads } from "@/export";

const OurBread = () => {
  useEffect(() => {
    AOS.init({
      Offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="bread"
      className="w-full flex flex-col justify-center items-center gap-10 bg-cover h-fit py-20 lg:px-20 px-10 bg-center"
      style={{ backgroundImage: `url('/banner4.jpg')` }}
    >
      <h1
        data-aos="zoom-in"
        className="text-5xl font-semibold text-center text-white"
      >
        Our Breads
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className=" w-full grid lg:grid-cols-4 grid-col-1 justify-center items-center gap-10"
      >
        {ourbreads.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center bg-white p-10 rounded-lg">
            <Image src={item.image} alt='bread image' width={300} height={400} className="w-[300px] h-[200px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer"/>
            <h1 className="mt-3 font-semibold">{item.title}</h1>
            <p className="text-center">{item.desc}</p>
            <button className="border-2 border-black px-5 py-2 mt-3 rounded-full text-sm font-semibold transform hover:scale-110 transition-transform duration-300 cursor-pointer">Read More</button>
          </div>

        ))}
      </div>
    </section>
  );
};

export default OurBread;

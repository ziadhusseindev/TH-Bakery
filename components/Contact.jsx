"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      Offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full flex flex-col justify-start items-end gap-20 bg-cover h-fit lg:py-20 py-10 lg:px-20 px-10 bg-center"
      style={{ backgroundImage: `url('banner.jpg')` }}
    >
      <div className="lg:w-[40%] w-full"></div>

      <div className="lg:w-[60%] w-full flex flex-col justify-start items-center gap-10 ">
        <h1
          data-aos="zoom-in"
          className="text-[55px]
          text-black font-semibold text-center"
        >
          Contact Us
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="300"
          className="text-center text-xl text-black"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, sequi
          nulla. <br />
          Libero, impedit corporis cum non fuga nam. Sunt dignissimos expedita
          vero aliquam nulla soluta quisquam fuga ipsam cupiditate praesentium.
        </p>
        <div className="flex flex-col justify-center items-center gap-6 lg-[80%] w-full">
          <div
            id="form-box"
            className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 w-full"
          >
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h1 className="text-lg font-semibold text-black">Full Name</h1>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-6 py-3  text-black outline-none border-slate-400 border-2 rounded-full focus:border-blue-600"
              />
            </div>

            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h1 className="text-lg font-semibold text-black">Email</h1>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-3  text-black outline-none border-slate-400 border-2 rounded-full focus:border-blue-600"
              />
            </div>
          </div>
          <button className="w-full bg-black rounded-full text-white font-semibold py-3 px-6  ">
            Submit
          </button>
        </div>
        <div
          id="address-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-end items-start gap-6 mt-10"
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-black font-bold text-2xl">Where to Find us</h1>
            <p className="text-xl text-center">Alexandria, Egypt <br /> Amryiah</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-black font-bold text-2xl">Call Us</h1>
            <p className="text-xl">(+20) 1023276906</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

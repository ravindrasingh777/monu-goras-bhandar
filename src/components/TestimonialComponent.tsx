"use client";
import React, { useState } from "react";
import product15 from "../../public/rate11.jpg";
import product6 from "../../public/rate4.jpg";
import MilkBackground from "../../public/milkBackground.png";
import product11 from "../../public/rate5.jpg";
import product12 from "../../public/rate6.jpg";
import product13 from "../../public/rate7.jpg";
import product14 from "../../public/rate8.jpg";
import product8 from "../../public/rate9.jpg";
import product9 from "../../public/rate10.jpg";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const TestimonialComponent = () => {
  const Testimonials = [
    {
      name: "Raghuman Singh ",
      description:
        "Amazing service and very fresh dairy products. The delivery was quick and hassle free!",
      image: product15,
    },
    {
      name: "Mohit Saini",
      description:
        "The yogurt is so creamy and fresh. The delivery staff was very courteous.",
      image: product11,
    },
    {
      name: "Sivam Sharma",
      description:
        "Very good service. Cheese quality is excellent and staff is helpful with queries.",
      image: product12,
    },
    {
      name: "Himanshu Jain",
      description:
        "Affordable prices with premium quality products. I’ll definitely order again!",
      image: product13,
    },
    {
      name: "Mal Singh Shekhawat",
      description:
        "Butter tastes just like homemade. Delivery team was on time and very polite.",
      image: product14,
    },
    {
      name: "Abhay Yadav",
      description:
        "Best online dairy store! Milk is always fresh and the staff is very supportive.",
      image: product8,
    },
    {
      name: "Karan Patel",
      description:
        "Smooth order process, timely delivery, and excellent paneer quality.",
      image: product9,
    },
    {
      name: "Sobit Ali",
      description:
        "Really impressed with the freshness and hygiene. Staff ensured a smooth delivery.",
      image: product6,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % Testimonials.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Testimonials.length) % Testimonials.length
    );
  };
  return (
    <>
      <Stack className="mt-10 mx-auto w-full h-[500px] flex flex-col gap-4 items-center justify-center">
        <Stack className="text-4xl text-amber-400 font-bold">
          Testimonial`&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`s
        </Stack>
        <Stack className="w-[300px] h-0.3 border border-amber-400"></Stack>
        <div
          style={{
            backgroundImage: `url(${MilkBackground.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="mx-auto max-w-5xl w-full   rounded-md mt-10 flex items-center justify-around relative"
        >
          {/* Left Button */}
          <button
            onClick={prevProduct}
            className="absolute left-0 z-10 bg-white  text-black p-4 rounded-full shadow-md"
          >
            &#10094;
          </button>

          {/* Outer Wrapper */}
          <div className="overflow-hidden p-5 w-full max-w-3xl  mx-auto">
            {/* Track that slides */}
            <div
              className="flex  transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Testimonials?.map((Testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col items-center justify-center gap-3 "
                >
                  <div className="h-40 w-40  overflow-hidden bg-slate-100 flex items-center justify-center rounded-full">
                    <Image
                      src={Testimonial.image}
                      width={200}
                      height={200}
                      alt="testimonial"
                      className="object-contain"
                    />
                  </div>
                  <Typography className="!text-2xl !font-bold">
                    {Testimonial.name}
                  </Typography>
                  <Typography className="text-center p-3 md:p-0">
                    {Testimonial.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextProduct}
            className="absolute right-0 z-10  bg-white  text-black p-4 rounded-full shadow-md"
          >
            &#10095;
          </button>
        </div>
      </Stack>
    </>
  );
};

export default TestimonialComponent;

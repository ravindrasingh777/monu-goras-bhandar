"use client";
import React, { useState } from "react";
import product1 from "../../public/1.png";
import product2 from "../../public/2.png";
import product3 from "../../public/3.png";
import product5 from "../../public/5.png";
import product6 from "../../public/7.png";
import product11 from "../../public/2-2.png";
import product12 from "../../public/3-3.png";
import product13 from "../../public/5-5.png";
import product14 from "../../public/7-7.png";
import product15 from "../../public/8-1.png";
import product8 from "../../public/8-2.png";
import product9 from "../../public/1-2.png";
import yellowBg from "../../public/yellow_bg1.jpg";

import Image from "next/image";
import { Stack } from "@mui/material";

const ProductCarousel = () => {
  const products = [
    {
      image: product6,
      image2: product14,
      title: "Goras Cow Milk 1kg",
      title2: "Goras Cow Milk 6kg",
    },
    {
      image: product1,
      image2: product9,
      title: "Goras Ghee-1Kg",
      title2: "Goras Ghee-15Kg",
    },
    {
      image: product15,
      image2: product8,
      title: "Goras Bilona Ghee 1Kg",
      title2: "Goras Bilona Ghee-15Kg",
    },
    { image: product5, image2: product13, title: "Goras Cow Milk 1/2 kg" },
    { image: product2, image2: product11, title: "Goras Chaach 1/2 kg" },
    { image: product3, image2: product12, title: "Goras Sri-Khand" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <>
      <div className="flex flex-col mt-10 items-center justify-center">
        <div className="text-3xl md:text-4xl text-amber-400 font-bold">
          Our Featured Products
        </div>
        <Stack className="w-[300px]  h-0.3 mt-5 border border-amber-400"></Stack>
        <div
          style={{
            backgroundImage: `url(${yellowBg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="mx-auto max-w-5xl w-full  rounded-md p-4 mt-10 flex items-center justify-around relative"
        >
          {/* Left Button */}
          <button
            onClick={prevProduct}
            className="absolute left-0 z-10 bg-white  text-black p-2 md:p-4 rounded-full shadow-md"
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
              {products?.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0  w-full flex flex-col items-center justify-center "
                >
                  <div className="flex  items-center justify-center gap-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={250}
                      height={250}
                      className="object-contain rounded-lg w-[130px] h-[130px] md:w-[250px] md:h-[250px]"
                    />
                    <Image
                      src={product.image2}
                      alt={product.title}
                      width={250}
                      height={250}
                      className="object-contain rounded-lg w-[130px] h-[130px] md:w-[250px] md:h-[250px]"
                    />
                  </div>
                  <div className="flex gap-14">
                    <h3 className="mt-4 font-bold text-[13px] md:text-lg text-center">
                      {product.title}
                    </h3>
                    {product.title2 && (
                      <h3 className="mt-4 font-bold text-[13px] md:text-lg text-center">
                        {product.title2}
                      </h3>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextProduct}
            className="absolute right-0 z-10 bg-white  text-black p-2 md:p-4 rounded-full shadow-md"
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;

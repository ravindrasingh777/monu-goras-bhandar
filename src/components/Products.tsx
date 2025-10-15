"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";
import product1 from "../../public/1.png";
import product2 from "../../public/2.png";
import product3 from "../../public/3.png";
import product5 from "../../public/5.png";
import product6 from "../../public/7.png";
import product7 from "../../public/gorasRasgulla.png";
import product15 from "../../public/8-1.png";
import product8 from "../../public/8-2.png";
import product9 from "../../public/1-2.png";
import bigPacketMilk from "../../public/7-71.png";
import MilkBackground from "../../public/milkBackground.png";
import Image from "next/image";
import AlertDialogSlide from "./Dialog";

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const GorasProducts = [
    {
      title: "Goras Ghee 1kg",
      description: "A2 cow 100% pure Ghee",
      image: product1,
      price: "₹725 - ₹800",
    },
    {
      title: "Goras Bilona Ghee 1Ltr",
      description: "A2 cow 100% pure Bilona Ghee",
      image: product15,
      price: "₹850 - ₹900",
    },
    {
      title: "Goras Ghee 15kg",
      description: "A2 cow 100% pure Ghee",
      image: product9,
      price: "₹10,875 - ₹12,000",
    },
    {
      title: "Goras Ghee Bilona 15kg",
      description: "A2 cow 100% pure Bilona Ghee",
      image: product8,
      price: "₹12,750 - ₹13,500",
    },
    {
      title: "Goras Milk 1kg",
      description: "A2 cow 100% pure Milk",
      image: product6,
      price: "₹56",
    },
    {
      title: "Goras Milk 6kg",
      description: "A2 cow 100% pure Milk",
      image: bigPacketMilk,
      price: "₹336",
    },
    {
      title: "Goras Milk 1/2kg",
      description: "A2 cow 100% pure Milk",
      image: product5,
      price: "₹28",
    },
    {
      title: "Goras Chaach 1/2kg",
      description: "A2 cow 100% pure Chaach",
      image: product2,
      price: "₹15",
    },
    {
      title: "Goras Sri-Khand 100gm",
      description: "A2 cow 100% pure Sri-khand",
      image: product3,
      price: "₹25",
    },
    {
      title: "Goras Rasgulla 1250gm",
      description: "Rasgulla made from 100% pure cow A2 milk",
      image: product7,
      price: "₹190",
    },
  ];
  return (
    <>
      <AlertDialogSlide open={open} setOpen={setOpen} />
      <Stack
        style={{
          backgroundImage: `url(${MilkBackground.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full mt-3"
      >
        <Stack
          className="max-w-6xl mx-auto"
          direction="column"
          gap={3}
          alignItems="center"
        >
          <div className="text-3xl mt-5 md:text-4xl text-amber-400 font-bold text-center">
            Goras Products
            <Stack className="w-[300px]  h-0.3 mt-5 border border-amber-400"></Stack>
          </div>
          <Stack className="w-full h-full p-1 md:p-4 ">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {GorasProducts.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-1 border border-amber-400 p-3 flex flex-col w-full h-full items-center justify-center"
                  >
                    <Image
                      width={200}
                      height={200}
                      alt={product.title}
                      src={product.image}
                    />
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyItems="center"
                      gap={1}
                      className="mt-5"
                    >
                      <Typography className="!text-center text-gray-700 !font-bold text-sm md:!text-xl">
                        {product.title}
                      </Typography>
                      <Typography className="!text-center !text-[11px] md:text-base">
                        {product.description}
                      </Typography>
                      <Typography className="!text-center font-bold text-green-600">
                        Price:- <strong>{product.price}</strong>
                      </Typography>
                      <button
                        onClick={() => setOpen(true)}
                        className="cursor-pointer text-amber-400 hover:bg-amber-400 rounded-md hover:text-white font-bold border border-amber-400 px-3 py-2"
                      >
                        Book Order
                      </button>
                    </Stack>
                  </div>
                );
              })}
            </div>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Products;

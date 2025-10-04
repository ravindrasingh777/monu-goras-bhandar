import { Stack, Typography } from "@mui/material";
import React from "react";
import truckVehicle2 from "../../public/truck2.jpg";
import MilkBackground from "../../public/milkBackground.png";
import Image from "next/image";

const ServicesComponent = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="center"
      justifyItems="center"
      className="mt-10 px-4"
    >
      {/* Heading */}
      <Typography className="!text-4xl text-amber-400 !font-bold text-center">
        Services Available Area&apos;s
      </Typography>
      <Stack className="w-32 md:w-64 h-0.2 border !mt-4 border-amber-400"></Stack>

      {/* Main Container */}
      <Stack
        style={{
          backgroundImage: `url(${MilkBackground.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full flex flex-col lg:flex-row gap-6 lg:gap-0 !mt-10 rounded-lg p-4 md:p-8 bg-gray-100"
      >
        <Stack className="flex flex-col items-center gap-4 text-center w-full h-auto p-4">
          <Stack className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-slate-100 rounded-full overflow-hidden">
            <Image
              src={truckVehicle2}
              alt="truck"
              className="object-cover"
              width={200}
              height={200}
            />
          </Stack>
          <Typography className="!text-2xl md:!text-3xl !font-bold">
            Sanganer
          </Typography>
          <Typography className="text-sm md:text-base leading-relaxed text-gray-700">
            We provide fast and reliable home delivery of fresh milk and dairy
            products in Sanganer. From pure cow & buffalo milk to paneer, curd,
            butter, and ghee everything is delivered straight to your doorstep.
            Our delivery staff is polite and punctual, ensuring you always get
            hygienic and fresh dairy products without hassle. Enjoy the taste of
            purity right at your home in Sanganer.
          </Typography>
        </Stack>

        <Stack className="flex flex-col items-center gap-4 text-center w-full h-auto p-4">
          <Stack className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-slate-100 rounded-full overflow-hidden">
            <Image
              src={truckVehicle2}
              alt="truck"
              className="object-cover"
              width={200}
              height={200}
            />
          </Stack>
          <Typography className="!text-2xl md:!text-3xl !font-bold">
            Pratap Nagar
          </Typography>
          <Typography className="text-sm md:text-base leading-relaxed text-gray-700">
            We provide fast and reliable home delivery of fresh milk and dairy
            products in Pratap Nagar. From pure cow & buffalo milk to paneer,
            curd, butter, and ghee everything is delivered straight to your
            doorstep. Our delivery staff is polite and punctual, ensuring you
            always get hygienic and fresh dairy products without hassle. Enjoy
            the taste of purity right at your home in Pratap Nagar.
          </Typography>
        </Stack>

        <Stack className="flex flex-col items-center gap-4 text-center w-full h-auto p-4">
          <Stack className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-slate-100 rounded-full overflow-hidden">
            <Image
              src={truckVehicle2}
              alt="truck"
              className="object-cover"
              width={200}
              height={200}
            />
          </Stack>
          <Typography className="!text-2xl md:!text-3xl !font-bold">
            Mansarovar
          </Typography>
          <Typography className="text-sm md:text-base leading-relaxed text-gray-700">
            We provide fast and reliable home delivery of fresh milk and dairy
            products in Mansarovar. From pure cow & buffalo milk to paneer,
            curd, butter, and ghee everything is delivered straight to your
            doorstep every morning. Our delivery staff is polite and punctual,
            ensuring you always get hygienic and fresh dairy products without
            any hassle. Enjoy the taste of purity in every sip and bite right at
            your home in Mansarovar.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesComponent;

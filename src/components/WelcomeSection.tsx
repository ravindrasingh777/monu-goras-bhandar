import { Stack } from "@mui/material";
import React from "react";

const WelcomeSection = () => {
  return (
    <>
      <Stack className="w-full h-96 rounded-md mt-10 flex flex-col items-center justify-center gap-6 p-4 bg-gray-100">
        <Stack className="text-3xl text-center md:text-5xl font-bold text-amber-400">
          Welcome To Monu Goras Bhandar!
        </Stack>
        <Stack className="w-[250px] md:w-xl h-0.2 border border-amber-400"></Stack>
        <Stack className="text-center text-sm md:text-xl">
          Monu Goras Bhandar is an integrated milk and dairy products Agency of
          goras bhandar.Goras Bhandar was Established in the year 1954 as an
          independent unit to amalgamate the traditional, cultural belief and
          the scientific approach in terms of conversation, breeding and rearing
          of cows. We have enriched the lives of millions over the last five
          decades, with wide range of quality products.
        </Stack>
      </Stack>
    </>
  );
};

export default WelcomeSection;

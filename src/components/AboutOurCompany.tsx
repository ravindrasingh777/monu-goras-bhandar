import { Stack, Typography } from "@mui/material";
import React from "react";

const AboutOurCompany = () => {
  return (
    <>
      <Stack className="w-full bg-[#fff3d3] ">
        <Stack className="mx-auto max-w-6xl h-96 md:h-84   p-4 flex flex-col items-center justify-center gap-6 text-center ">
          <div>
            <Typography className="!text-4xl text-amber-400 !font-bold text-center">
              About Us
            </Typography>
            <div className="!w-[150px] mt-3 md:w-56 h-0.3 border border-amber-400"></div>
          </div>
          <Typography className="!text-gray-700 !text-base md:!text-xl">
            <strong>Monu Goras Bhandar</strong> is a trusted{" "}
            <strong>Agency</strong> of Goras Bhandar, proudly serving Sanganer,
            Pratap Nagar, and Mansarovar for over 20 years. As the most popular
            and highest-grossing agency of Goras products in the region, we
            specialize in delivering fresh and pure Goras milk and dairy
            products right to your doorstep. Renowned for our quality,
            reliability, and customer satisfaction, Monu Goras Bhandar continues
            to be the first choice for healthy and natural milk products in
            Jaipur.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default AboutOurCompany;

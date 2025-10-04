import React from "react";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import WhyChooseUsBanner from "../../public/whychoose2.png";

const WhyChooseUs = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      className="mt-10 max-w-7xl mx-auto px-4"
    >
      <Typography className="!text-4xl text-amber-400 !font-bold text-center">
        Why Choose Us
      </Typography>
      <div className="w-40 h-0.5 bg-amber-400"></div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        {/* Left Image */}
        <div>
          <div className="relative w-full h-64 md:h-full">
            <Image
              src={WhyChooseUsBanner}
              alt="Why Choose Us Banner"
              fill
              className=" rounded-md"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-gray-100 p-4 flex flex-col gap-4 justify-center">
          {/* Card 1 */}
          <div className="w-full bg-white rounded-md p-4 flex flex-col gap-2 items-center text-center">
            <Typography className="!text-xl !font-bold">
              Home Delivery of All Goras Products
            </Typography>
            <Typography>
              Monu Goras Bhandar offers convenient home delivery of pure milk
              and dairy products in Sanganer, Pratap Nagar, and Mansarovar.
              Fresh, hygienic, and delivered on time every day.
            </Typography>
            <strong>Call Us: +91 9252139481</strong>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white rounded-md p-4 flex flex-col gap-2 items-center text-center">
            <Typography className="!text-xl !font-bold">
              Fresh Milk Supply for Sweets Shops
            </Typography>
            <Typography>
              We proudly supply pure and fresh milk to all major sweets shops
              across Pratap Nagar, Sanganer, and Mansarovar. Hygienic and timely
              delivery ensures authentic taste and quality in every sweet.
            </Typography>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white rounded-md p-4 flex flex-col gap-2 items-center text-center">
            <Typography className="!text-xl !font-bold">
              Bookings for Events, Weddings & Parties
            </Typography>
            <Typography>
              We provide fresh and hygienic dairy products in bulk for weddings,
              parties, and special events. Whether for sweets, catering, or
              direct use we ensure timely delivery and top quality.
            </Typography>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default WhyChooseUs;

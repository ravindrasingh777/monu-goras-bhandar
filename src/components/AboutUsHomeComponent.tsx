import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ourStoryBanner from "../../public/ourStoryPic.png";
import Link from "next/link";

const AboutUsHomeComponent = () => {
  return (
    <Stack className="flex mt-10 flex-col gap-6 items-center justify-center px-4 md:px-8">
      {/* Heading */}
      <div>
        <Typography className="!text-4xl text-amber-400 !font-bold text-center">
          About Us
        </Typography>
        <div className="w-[150px] mt-3 md:w-56 h-0.3 border border-amber-400"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-md overflow-hidden shadow-md">
        {/* Left Side: Image */}
        <div className="col-span-1">
          <Image
            src={ourStoryBanner}
            alt="ourStory"
            width={700}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="col-span-1 flex">
          <Stack className="w-full h-full bg-amber-200 flex flex-col items-center justify-center gap-6 p-6 md:p-10">
            <Typography className="!text-lg md:!text-2xl !font-bold text-center">
              Our Story
            </Typography>
            <Typography className="text-sm md:text-base !text-center leading-relaxed text-gray-800">
              Monu Goras Bhandar is an integrated milk and dairy products Agency
              of Goras Bhandar, which has enriched the lives of millions with
              the finest quality products over the last two decades. We produce
              a wide range of products across various categories like Bilona
              Ghee, Desi Cow Ghee, Lassi and Chaach, Pasteurized Milk, Shrikhand
              and more…
            </Typography>
            <Link href="/about-us">
              <button className="py-2 px-4 cursor-pointer text-black border border-black rounded-md hover:bg-black hover:text-white transition">
                Read More
              </button>
            </Link>
          </Stack>
        </div>
      </div>
    </Stack>
  );
};

export default AboutUsHomeComponent;

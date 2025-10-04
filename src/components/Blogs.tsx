import { Stack, Typography } from "@mui/material";
import React from "react";
import blog1 from "../../public/blog1.png";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";
import Image from "next/image";

const Blogs = () => {
  return (
    <>
      <Stack className="max-w-7xl mb-10 mx-auto flex flex-col items-center justify-center gap-3">
        <Typography className="!text-4xl text-amber-400 !font-bold">
          Blog&apos;s
        </Typography>
        <Stack className="w-[200px] h-0.3 border mb-10 border-amber-400"></Stack>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-1">
            <Stack className="w-full h-full hover:scale-105 duration-400 rounded-md bg-amber-200  gap-2 flex flex-col items-center justify-center p-4">
              <Stack className="w-full h-60 relative">
                <Image src={blog1} alt="blog" fill />
              </Stack>
              <Typography className="!text-2xl !text-center !font-bold">
                Always Hygienic & Fresh Milk Products
              </Typography>
              <Typography className="!text-center ">
                When you choose our home delivery service in Sanganer & Pratap
                Nagar, you’re not just getting milk you’re getting it as fresh
                as it can possibly be. The milk is delivered to your doorstep
                within just a few hours of milking, ensuring that every glass
                retains its natural taste, nutrition, and purity.
              </Typography>
            </Stack>
          </div>
          <div className="col-span-1">
            <Stack className="w-full h-full hover:scale-105 duration-400 rounded-md  bg-amber-200 gap-2 flex flex-col items-center justify-center p-4">
              <Stack className="w-full h-60 relative">
                <Image src={blog2} alt="blog" fill />
              </Stack>
              <Typography className="!text-2xl !text-center !font-bold">
                Top 5 Health Benefits of Including Dairy in Your Daily Diet
              </Typography>
              <Typography className="!text-center ">
                From strong bones to better digestion, dairy products play an
                important role in keeping you healthy. This blog explains the
                benefits of milk, curd, butter, and ghee in everyday life.
              </Typography>
            </Stack>
          </div>
          <div className="col-span-1">
            <Stack className="w-full h-full hover:scale-105 duration-400 rounded-md bg-amber-200 gap-2 flex flex-col items-center justify-center p-4">
              <Stack className="w-full h-60 relative">
                <Image src={blog3} alt="blog" fill />
              </Stack>
              <Typography className="!text-2xl !text-center !font-bold">
                How to Identify Pure and Fresh Dairy Products ?
              </Typography>
              <Typography className="!text-center ">
                When fresh milk is delivered directly to your home like in
                Sanganer & Pratap Nagar with our service, you get it within
                hours of milking. Packaged milk, on the other hand, often spends
                days in transport and storage before reaching you.
              </Typography>
            </Stack>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Blogs;

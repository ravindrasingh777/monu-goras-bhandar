import { Stack, Typography } from "@mui/material";
import BannerImage from "../../public/aboutUsBanner.jpg";
import product1 from "../../public/rate11.jpg";
import ravindra from "../../public/ravindra.png";
import bhagwan from "../../public/bhagwansingh2.png";
import React from "react";
import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      image: bhagwan,
      name: "Bhagwan Singh Shekhawat",
      title: "Director & CEO",
    },
    {
      image: ravindra,
      name: "Ravindra Singh Shekhawat",
      title: "Managing Director",
    },
    {
      image: product1,
      name: "Raghuman Singh Shekhawat",
      title: "Leads & Service Manager",
    },
  ];
  return (
    <>
      <Stack
        className="w-full my-10 "
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <Stack className="max-w-5xl py-5 mx-auto flex flex-col items-center justify-center gap-2 ">
          <div className="text-3xl md:text-4xl text-amber-400 font-bold">
            Our Team
          </div>
          <Stack className="w-[200px]  h-0.3 mt-5 border border-amber-400"></Stack>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2">
            {teamMembers.map((team, index) => {
              return (
                <div
                  key={index}
                  className="col-span-1  text-amber-400 flex flex-col items-center justify-center gap-2 p-4"
                >
                  <div className="w-32 h-32 border-2 border-white rounded-full overflow-hidden ">
                    <Image
                      src={team.image}
                      alt={team.name}
                      width={400}
                      height={400}
                    />
                  </div>
                  <Typography className="!font-bold !text-xl">
                    {team.name}
                  </Typography>
                  <Typography>{team.title}</Typography>
                </div>
              );
            })}
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Team;

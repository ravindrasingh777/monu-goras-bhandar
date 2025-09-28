import Image from "next/image";
import React from "react";
import monugorasbhandar from "../../public/goras-bhandar-stayTuned.png";

const Page = () => {
  return (
    <>
      <div className="max-w-7xl h-full">
        <Image fill alt="stay-tuned-Image" src={monugorasbhandar} />
      </div>
    </>
  );
};

export default Page;

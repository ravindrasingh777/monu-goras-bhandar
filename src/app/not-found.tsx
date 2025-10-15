import React from "react";
import MonuGorasBhandar from "../../public/goras-bhandar-stayTuned.png";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Image src={MonuGorasBhandar} width={500} height={500} alt="stay-tuned" />
      <Link href="/">
        <Button variant="outlined" color="primary">
          Back
        </Button>
      </Link>
    </>
  );
};

export default NotFound;

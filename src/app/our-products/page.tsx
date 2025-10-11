import Header from "@/components/Header";
import Products from "@/components/Products";
import { Stack } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <>
      <Stack className="max-w-7xl  py-2 px-3 mx-auto">
        <Header />
        <Products />
      </Stack>
    </>
  );
};

export default Page;

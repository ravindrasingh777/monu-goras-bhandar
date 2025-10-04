"use client";
import { Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/favicon.ico";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TemporaryDrawer from "./Drawer";

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="w-full"
      >
        <Stack
          direction="row"
          spacing={1}
          className="flex items-center !justify-between"
        >
          <Image width={70} height={70} alt="logo" src={logo} />
          <Typography className="!text-xl text-gray-700 !md:text-5xl !font-bold">
            Monu Goras Bhandar
          </Typography>
        </Stack>
        <TemporaryDrawer />

        <Stack>
          <div className="hidden md:block">
            <Tabs
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="nav tabs"
            >
              <Tab label="Home" />
              <Tab label="Our Products" />
              <Tab label="About Us" />
              <Tab label="Contact Us" />
            </Tabs>
          </div>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyItems="end"
        >
          <div className="hidden md:flex gap-2">
            <Stack className="text-base text-green-600 font-bold">
              Connect us with{" "}
            </Stack>
            <WhatsAppIcon fontSize="medium" color="success" />
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;

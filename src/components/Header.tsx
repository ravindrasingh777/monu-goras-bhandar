"use client";
import { Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/favicon.ico";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TemporaryDrawer from "./Drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [value, setValue] = useState(0);
  const pathname = usePathname();
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="w-full !sticky !top-0 !z-10 bg-white dark:bg-[#ededed] py-2 px-3"
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
            <ul className="flex gap-6">
              <Link href="/">
                {" "}
                <li
                  className={`${
                    pathname == "/" && "font-semibold text-amber-400"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href="/our-products">
                <li
                  className={`${
                    pathname == "/our-products" &&
                    "font-semibold text-amber-400"
                  }`}
                >
                  Our Products
                </li>
              </Link>
              <Link href="/about-us">
                <li
                  className={`${
                    pathname == "/about-us" && "font-semibold text-amber-400"
                  }`}
                >
                  About Us
                </li>
              </Link>
              <Link href="/contact-us">
                <li
                  className={`${
                    pathname == "/contact-us" && "font-semibold text-amber-400"
                  }`}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyItems="end"
        >
          <div className="hidden md:flex gap-2">
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B919887700428&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              {" "}
              <Stack className="text-base text-green-600 font-bold">
                Connect us with{" "}
              </Stack>
            </Link>
            <WhatsAppIcon fontSize="medium" color="success" />
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;

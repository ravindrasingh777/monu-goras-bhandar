import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="p-4 w-full !h-full flex flex-col items-start justify-start">
        <div className="w-full flex items-center justify-end mb-3">
          <IconButton onClick={() => toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>
        <ul className="space-y-4 text-lg font-semibold text-gray-700">
          <li>
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg transition-all duration-200 hover:bg-amber-100 hover:text-amber-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="block px-3 py-2 rounded-lg transition-all duration-200 hover:bg-amber-100 hover:text-amber-500"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-lg transition-all duration-200 hover:bg-amber-100 hover:text-amber-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-lg transition-all duration-200 hover:bg-amber-100 hover:text-amber-500"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-lg transition-all duration-200 text-green-500"
            >
              <WhatsAppIcon fontSize="medium" color="success" /> Connect us with
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div className="block md:hidden">
      <Button onClick={toggleDrawer(true)}>
        <div className="w-full flex items-center justify-end">
          <MenuIcon className="text-black" />
        </div>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

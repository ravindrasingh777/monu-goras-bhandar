import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ContacuUsBanner from "../../public/contactUsBanner.png";

const ContactUs = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      className="md:mt-10 max-w-7xl "
    >
      {/* Heading */}
      <Typography className="!text-4xl text-amber-400 !font-bold text-center">
        Contact Us
      </Typography>
      <div className="w-[150px] md:w-64 h-0.3 border border-amber-400"></div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
        {/* Left: Banner Image */}
        <div className="relative w-full h-[250px] md:h-[500px]">
          <Image
            src={ContacuUsBanner}
            alt="Contact Banner"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right: Contact Form */}
        <div className="bg-amber-200 rounded-md flex flex-col justify-center p-6 gap-4">
          <TextField id="name" label="Full Name" variant="outlined" fullWidth />
          <TextField
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="mobile"
            type="text"
            label="Mobile Number"
            variant="outlined"
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="enquiry-label">Enquiry For</InputLabel>
            <Select labelId="enquiry-label" id="enquiry" label="Enquiry For">
              <MenuItem value="Milk">Milk</MenuItem>
              <MenuItem value="Ghee">Ghee</MenuItem>
              <MenuItem value="Chaach">Chaach</MenuItem>
              <MenuItem value="Shrikhand">Shrikhand</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" className="mt-2">
            Submit
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default ContactUs;

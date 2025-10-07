"use client";
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
import React, { useState } from "react";
import ContacuUsBanner from "../../public/contactUsBanner.png";

const ContactUs = () => {
  const [loading, setLoading] = useState("SUBMIT");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading("Submitting...");

    const data = {
      name: e.target.name.value,
      mobile: e.target.phone.value,
      enquiryFor: e.target.enquiryBox.value,
    };

    const response = await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const Message = await response.json();
    if (Message.flag == 1) {
      alert(Message?.msg);
      e.target.reset();
      setLoading("SUBMIT");
    } else {
      alert(Message?.msg);
    }
  };
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
        <div className="relative w-full h-[250px] md:h-[450px]">
          <Image
            src={ContacuUsBanner}
            alt="Contact Banner"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={(e) => submitHandler(e)} action="">
          <div className="bg-amber-200 w-full h-full rounded-md flex flex-col justify-center p-6 gap-6">
            <TextField
              id="name"
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="mobile"
              type="text"
              name="phone"
              label="Mobile Number"
              variant="outlined"
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="enquiry-label">Enquiry For</InputLabel>
              <Select
                name="enquiryBox"
                labelId="enquiry-label"
                id="enquiry"
                label="Enquiry For"
              >
                <MenuItem value="Milk">Milk</MenuItem>
                <MenuItem value="Ghee">Ghee</MenuItem>
                <MenuItem value="Chaach">Chaach</MenuItem>
                <MenuItem value="Shrikhand">Shrikhand</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-2"
            >
              {loading}
            </Button>
          </div>
        </form>
      </div>
    </Stack>
  );
};

export default ContactUs;

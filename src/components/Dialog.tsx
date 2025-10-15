import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen }: any) {
  const [loading, setLoading] = React.useState("SUBMIT");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading("Submitting...");

    const data = {
      name: e.target.name.value,
      mobile: e.target.phone.value,
      enquiryFor: e.target.enquiryBox.value,
      quantity: e.target.quantity.value,
      address: e.target.address.value,
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        PaperProps={{
          className: "!max-w-xl !w-full",
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="flex items-center justify-between  !text-2xl !font-bold">
          Book a Order ?
          <IconButton onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => submitHandler(e)} action="">
            <div className=" w-full h-full flex flex-col justify-center mt-2 gap-6">
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
              <TextField
                id="quantity"
                type="number"
                name="quantity"
                label="No of Quantity"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="address"
                type="text"
                name="address"
                label="Address"
                variant="outlined"
                fullWidth
              />
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
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

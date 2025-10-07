import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: any) {
  try {
    const { name, mobile, enquiryFor } = await request.json();
    const userMail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userMail,
        pass: userPass,
      },
    });

    const mailOptions = {
      from: `Monu Goras Bhandar`,
      to: process.env.EMAIL_USER,
      subject: `New Enquiry: ${enquiryFor} from ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <h2 style="color: #d97706;">New Enquiry Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Mobile:</b> ${mobile}</p>
      <p><b>Enquiry For:</b> ${enquiryFor}</p>
      <hr />
      <p style="font-size: 13px; color: #555;">This enquiry was sent from the Monu Goras Bhandar website.</p>
    </div>
    `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      msg: "Form submitted successfully, we will reach you sortly...",
      flag: 1,
    });
  } catch (error: any) {
    return NextResponse.json({
      msg: error.message,
      flag: 0,
    });
  }
}

import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <div className="p-2">
      <Header />
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          borderRadius: "10px",
          paddingBottom: "10px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.8200410491154!2d75.7945693740146!3d26.813858164334423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dcb740b6ec2cb%3A0xfce9933f0b895f4b!2sMonu%20Goras%20bhandar!5e0!3m2!1sen!2sin!4v1760524260238!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;

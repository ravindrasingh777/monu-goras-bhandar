import AboutUsHomeComponent from "@/components/AboutUsHomeComponent";
import Blogs from "@/components/Blogs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCrousel";
import ServicesComponent from "@/components/ServicesComponent";
import Slider from "@/components/Slider";
import TestimonialComponent from "@/components/TestimonialComponent";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <>
      <Stack className="max-w-7xl  py-2 px-3 mx-auto">
        <Header />
        <Slider />
        <WelcomeSection />
        <WhyChooseUs />
        <ProductCarousel />
        <ServicesComponent />
        <AboutUsHomeComponent />
        <TestimonialComponent />
        <Blogs />
        <ContactUs />
      </Stack>
      <Footer />
    </>
  );
};

export default Page;

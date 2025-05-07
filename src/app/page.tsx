import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyUs />
      <Testimonials/>
    </div>
  );
}

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhoItsFor from "@/components/landing/WhoItsFor";
import About from "@/components/landing/About";
import Pricing from "@/components/landing/Pricing";
import Partners from "@/components/landing/Partners";
import Cta from "@/components/landing/Cta";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhoItsFor />
        <About />
        <Pricing />
        <Partners />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

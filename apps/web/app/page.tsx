import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Experience from "@/components/landing/Experience";
import ForSchools from "@/components/landing/ForSchools";
import ForTeachers from "@/components/landing/ForTeachers";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Experience />
        <ForSchools />
        <ForTeachers />
      </main>
    </div>
  );
}

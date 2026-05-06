import Image from "next/image";
import Navbar from "./components/landing-page/navbar/navbar";
import Hero from "./components/landing-page/hero-section/hero";
import LatestNews from "./components/landing-page/latest/latest";
import Services from "./components/landing-page/hero-section/services/services";
import About from "./components/landing-page/about/about";
import Footer from "./components/landing-page/footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <LatestNews/>
      <About/>
      <Services/>
      <Footer/>
    </main>
  );
}

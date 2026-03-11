import Navbar from "./(landing-page)/navbar";
import Hero from "./(landing-page)/hero";
import Footer from "./(landing-page)/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

import About from "@/components/About";
import Contact from "@/components/Contact";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnersMarquee from "@/components/PartnersMarquee";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="flex-1">
        <Hero />
        <PartnersMarquee />
        <Fleet />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

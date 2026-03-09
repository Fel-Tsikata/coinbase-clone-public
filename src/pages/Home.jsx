
import Hero from "../components/home/Hero";
import CryptoSection from "../components/home/CryptoSection";
import Features from "../components/home/Features";
import LearnSection from "../components/home/LearnSection";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Hero />
        <CryptoSection />
         <Features />
        <LearnSection />
        <CTA />
        <Footer />
    </>
  );
}

export default Home;


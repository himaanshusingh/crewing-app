import Hero from "../components/Hero";
import Features from "../components/Features";
import Solutions from "../components/Solutions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features id="features" />
      <Solutions id="solutions" />
      <Contact />
      <Footer id="aboutUs" />
    </>
  );
}

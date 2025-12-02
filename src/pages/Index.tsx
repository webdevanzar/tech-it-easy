import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/Chatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

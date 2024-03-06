import ContactSection from "@/components/Contact/contact";
import Hero from "@/components/Hero/hero";
import ProjectCardList from "@/components/Project/cardList";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectCardList />
      <ContactSection />
    </div>
  );
};

export default Home;

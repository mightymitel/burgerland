import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { longDescriptions } from "@/data/parkDescriptions";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Section
        id="welcome"
        title="Welcome to Burgerland"
        description={longDescriptions[0]}
      ></Section>

      <Section
        id="testimonials"
        title="Explore"
        description={longDescriptions[1]}
      ></Section>
    </>
  );
};

export default HomePage;

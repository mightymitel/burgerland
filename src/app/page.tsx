import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { shortDescriptions, longDescriptions, welcomeMessage} from "@/data/parkDescriptions";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>

        <Section
          id="welcome"
          title="Welcome to Burgerland"
          description={longDescriptions[0]}
        >
          
        </Section>

        <Section
          id="testimonials"
          title="Explore"
          description={longDescriptions[1]}
        >
    
        </Section>

       
      </Container>
    </>
  );
};

export default HomePage;

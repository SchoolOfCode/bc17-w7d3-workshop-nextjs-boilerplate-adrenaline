import HeroSection from "../Hero/HeroSection/HeroSection"
import HowItWorksSection from "../HowItWorks/HowItWorksSection/HowItWorksSection";
import Reviews from "../Reviews/reviews.jsx";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <Reviews />
      <HowItWorksSection />
    </main>
  );
};

export default Main;

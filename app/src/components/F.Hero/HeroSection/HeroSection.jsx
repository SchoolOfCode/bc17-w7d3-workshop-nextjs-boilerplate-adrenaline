import HeroDescription from "../HeroDescription/HeroDescription";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <HeroDescription />
    </section>
  );
};

export default HeroSection;

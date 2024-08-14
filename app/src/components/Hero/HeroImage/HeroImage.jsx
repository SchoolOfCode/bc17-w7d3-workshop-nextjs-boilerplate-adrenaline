import styles from './HeroImage.module.css';
import Image from 'next/image';

const HeroImage = () => {
    return (
        <Image
        src="/hero-mobile.png"
        alt="Cozy living room with a fireplace"
        className={styles.heroImage}
        width={704}
        height={636}
      />
    )
}

export default HeroImage
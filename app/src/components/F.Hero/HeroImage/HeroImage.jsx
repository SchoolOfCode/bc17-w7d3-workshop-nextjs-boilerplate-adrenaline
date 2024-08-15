import styles from './HeroImage.module.css';
import Image from 'next/image';

const HeroImage = () => {
    return (
        <Image
        src="/founder-mike-and-mandy.png"
        alt="Mike and Mandy AI"
        className={styles.heroImage}
        width={704}
        height={636}
      />
    )
}

export default HeroImage
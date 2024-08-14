
import styles from './HeroImage.module.css'
import Image from 'next/image'

const HeroImage = () => {
    return (
        <Image
        src="/images/hero-desktop.png"
        alt="Cozy living room with a fireplace"
        className={styles.heroImage}
        width={200}
        height={200}
      />
    )
}

export default HeroImage
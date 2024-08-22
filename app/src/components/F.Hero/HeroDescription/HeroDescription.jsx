import styles from './HeroDescription.module.css'
import HeroImage from '../HeroImage/HeroImage'

const HeroDescription = () => {

  return (

    <div className={styles.heroDescription}>

      <p className={styles.heroHeadline}>
        Meet the artisans behind <br />
        our masterpieces...
      </p>

      <p className={styles.names}>
        Mike and Mandy
      </p>

      <HeroImage />

    </div>
  )
}

export default HeroDescription
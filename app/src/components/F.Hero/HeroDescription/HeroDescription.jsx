
import styles from './HeroDescription.module.css'

const HeroDescription = () => {
    return (
        <div className={styles.heroDescription}>
        <p className={styles.heroHeadline}>
          Meet the artisans <br />
          behind our <br />
          masterpieces!
        </p>
        <p className={styles.names}>
          Mike and Mandy
        </p>
      </div>
    )
}

export default HeroDescription
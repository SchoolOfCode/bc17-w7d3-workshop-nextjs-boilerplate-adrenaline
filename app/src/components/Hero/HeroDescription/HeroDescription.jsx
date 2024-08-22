
import styles from './HeroDescription.module.css'

const HeroDescription = () => {
    return (
        <div className={styles.heroDescription}>
        <p className={styles.heroHeadline}>
          Discover the <br />
          perfect fireplace...
        </p>
        <p className={styles.consultationParagraph}>
          <span className={styles.numberSpan}>
            Book consultation <a href="http://localhost:3000/consultation" className={styles.link}>here</a>.
            </span>
        </p>
      </div>
    )
}

export default HeroDescription
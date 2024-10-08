import Separator from '../../Separator/Separator';
import styles from './Article.module.css';

const Article = ({ imageSrc, altText, title, description }) => {
  return (
    <article className={styles.tile}>
      <img src={imageSrc} alt={altText} className={styles.tileImage} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Separator />
    </article>
  );
};

export default Article;

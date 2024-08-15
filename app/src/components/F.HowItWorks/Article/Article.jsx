import styles from './Article.module.css';
import Image from 'next/image';

const Article = ({ imageSrc, altText, title, description }) => {
  return (
    <article className={styles.tile}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={imageSrc} alt={altText} className={styles.tileImage} width={700} height={424}/>
    </article>
  );
};

export default Article;

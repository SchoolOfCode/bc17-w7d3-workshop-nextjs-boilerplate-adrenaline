import styles from './styles.module.css';
import Article from '../Article/Article';

const HowItWorksSection = () => {

  const articlesData = [
    {
      imageSrc: '/founders-1.png',
      altText: 'Man in a workshop',
      title: 'Our craftsmanship',
      description: 'Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off',
    },
    {
      imageSrc: '/founders-2.png',
      altText: 'Tools being used',
      title: 'Our experience',
      description: "Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us.",
    },
    {
      imageSrc: '/founders-3.png',
      altText: 'Woodwork being done',
      title: 'Our guarantee',
      description: "If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!",
    },
  ];
  
  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.tiles}>
        {articlesData.map((article, index) => (
          <Article
            key={index}
            imageSrc={article.imageSrc}
            altText={article.altText}
            title={article.title}
            description={article.description}
            width = {700}
            height = {400}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

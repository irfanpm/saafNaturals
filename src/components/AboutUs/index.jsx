import Image from 'next/image';
import styles from './styles.module.scss';

const AboutUs = () => {
  const aboutTitle = "About Saaf Naturals";
  const aboutIntro =
    "Rooted in nature, we craft coconut wonders that nourish your body and the planet.";
  const valuesTitle = "Our Core Values";
  const valuesIntro =
    "Sustainability, purity, and passion drive us to bring you the best of the grove.";

  return (
    <section className={styles.about_section} id="about">
      <div className={styles.full_background}></div>
      <div className={styles.leaf_border}></div>

      <div className={styles.content_wrapper}>
        <div className={styles.left_card}>
          <h1 className={styles.title}>{aboutTitle}</h1>
          <p className={styles.text}>{aboutIntro}</p>
          <button className={styles.button}>Our Roots</button>
        </div>

        <div className={styles.center_image}>
          <Image
            src="/saafImage/oilBottle.png"
            alt="Coconut Oil Bottle"
            width={350}
            height={450}
            className={styles.image}
          />
        </div>

        <div className={styles.right_card}>
          <h1 className={styles.title}>{valuesTitle}</h1>
          <p className={styles.text}>{valuesIntro}</p>
          <button className={styles.button}>Our Heart</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
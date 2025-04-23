import Image from 'next/image';
import styles from './styles.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.container}>
        {/* Left Side: Text Content */}
        <div className={styles.text_content}>
          <h2 className={styles.text_header}>Saaf Naturals: Purely Natural, Sustainably Yours</h2>
          <p>
            At Saaf Naturals, we craft coconut products with unwavering commitment to purity, sustainability, and community. Our chemical-free offerings embody authenticity, sourced responsibly to honor the earth and empower local farmers. Every product reflects our dedication to quality, transparency, and eco-conscious innovation. By blending time-honored traditions with purposeful advancements, we deliver wholesome goodness that nurtures both people and the planet. Join us in our mission to create a cleaner, greener future—one coconut at a time.
          </p>
          <button className={styles.cta_button}>Discover Our Story</button>
        </div>

        {/* Right Side: Image */}
        <div className={styles.image_wrapper}>
          <Image
            src="/saafImage/coconut-still-life_(5)[1].jpg"
            alt="Coconut Oil Bottle with Natural Elements"
            width={450}
            height={550}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
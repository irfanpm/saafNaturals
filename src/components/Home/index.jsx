import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import Button from 'components/Button';
import styles from './styles.module.scss';

const staticInfo = {
  section: 'Purely Natural',
  title: 'Saaf Naturals: Coconut Alchemy',
  intro: 'Discover the essence of coconut—luxury crafted from nature’s finest.',
  tagline: 'Pure. Simple. Divine.',
};

const Home = () => (
  <div className={cn(styles.header, 'section_padding')} id="home">
    <div className={styles.full_background}></div>
    <div className={styles.leaf_border}></div>
    <div className={cn('app_container', 'app_wrapper', styles.content)}>
      <div className={styles.wrapper_info}>
        <SubHeading title={staticInfo.section} className="fade-in" />
        <h1 className={`${styles.header_h1} fade-in`}>{staticInfo.title}</h1>
        <p className={`${cn(styles.header_p, 'opensans')} fade-in`}>
          {staticInfo.intro}
        </p>
        <p className={`${styles.header_tagline} fade-in`}>{staticInfo.tagline}</p>
        <div className="button-container fade-in">
          <Button name="Shop Now" path="#products" />
          <Button name="Learn More" path="#about" variant="outline" />
        </div>
      </div>
      <div className={styles.hero_image}>
        <img src="/saafImage/coconut-splash.jpg" alt="Coconut Splash" />
      </div>
    </div>
  </div>
);

export default Home;
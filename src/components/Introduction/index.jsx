import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';

import images from 'constants/images';

import styles from './styles.module.scss';

// Static data for the Introduction component
const staticInfo = {
  section: 'Welcome to Our Restaurant',
  title: 'Our Culinary Journey',
  intro: 'Discover the flavors and traditions that make our dishes unique.',
  sub_info: 'John Doe',
  picture: {
    imgix_url: '/images/intro-image.jpg', // Replace with your actual image path
  },
};

const Introduction = () => {
  return (
    <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='intro'>
      <div className={cn('app_wrapper_img', 'app_wrapper_img_reverse')}>
        <div className={cn(styles.wrapper_img, 'img_padding')}>
        
            <Image
              src='/saafImage/bgleaf.webp'
              alt='intro_image'
              objectFit='cover'
              width={550}
              height={600}
            />
          
        </div>
      </div>
      <div className='app_wrapper_info'>
        <SubHeading title={staticInfo.section} />
        <h1 className='headtext_cormorant'>{staticInfo.title}</h1>
        <div className={styles.intro_content}>
          <div className={styles.intro_content_quote}>
            <p className='opensans'>{staticInfo.intro}</p>
          </div>
        </div>
        <div className={styles.intro_sign}>
          <p>{staticInfo.sub_info}</p>
          <p className='opensans'>Chef & Founder</p>
            <Image
              width={200}
              height={100}
              src={images.sign}
              alt='sign_image'
              objectFit='contain'
            />
        
        </div>
      </div>
    </div>
  );
}

export default Introduction;

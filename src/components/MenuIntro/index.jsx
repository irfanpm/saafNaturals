import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';

import images from 'constants/images'; // Import your images
import styles from './styles.module.scss';

// Static data for the MenuIntro component
const staticMenuItems = {
  food: {
    title: 'Pasta Primavera',
    tags: 'Vegetarian',
    price: '$12.99',
    intro: 'A delicious vegetarian pasta dish made with fresh vegetables.',
    picture: {
      imgix_url: '/images/pasta-primavera.jpg', // Replace with your actual image path
    },
  },
  drink: {
    title: 'Mojito',
    tags: 'Cocktail',
    price: '$8.99',
    intro: 'A refreshing cocktail made with mint and lime.',
    picture: {
      imgix_url: '/images/mojito.jpg', // Replace with your actual image path
    },
  },
};

const MenuIntro = ({ slug }) => {
  // Determine which static item to use based on the slug
  const chooseMenuItem = slug === 'food' ? staticMenuItems.food : staticMenuItems.drink;

  return (
    <div className={cn(styles.intro_container, 'app_bg', 'section_padding')} id='menu-intro'>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={cn('app_wrapper_img', 'app_wrapper_img_reverse')}>
          <div className={cn(styles.wrapper_img, 'img_padding')}>
            {/* {chooseMenuItem?.picture?.imgix_url ? (
              <Image
                src=''
                alt='intro_image'
                objectFit='cover'
                width={450}
                height={500}
              />
            ) : (
              <Image
                src={images.chef} // Fallback image
                alt='Fallback Image'
                objectFit='cover'
                width={450}
                height={500}
              />
            )} */}
          </div>
        </div>
        <div className={cn(styles.wrapper_content, 'app_wrapper_info')}>
          <SubHeading title='Try it!' />
          <h1 className='headtext_cormorant'>{chooseMenuItem?.title || 'Menu Item'}</h1>
          <div className={styles.intro_content}>
            <div>
              <p className={styles.intro_tag}>{chooseMenuItem?.tags || 'N/A'}</p>
              <p className='opensans'>{chooseMenuItem?.price || 'Price Unavailable'}</p>
            </div>
            <div className={styles.intro_content_quote}>
              <p className='opensans'>{chooseMenuItem?.intro || 'Description Unavailable'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIntro;

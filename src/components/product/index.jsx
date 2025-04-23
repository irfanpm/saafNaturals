import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styles from './styles.module.scss';

const staticInfo = {
  section: 'Our Premium Products',
  title: 'Discover Coconut Goodness',
  intro: 'Browse our handcrafted, natural coconut products made with care.',
  menu: [
    { title: 'Coconut Oil', price: '$15.00', picture: { imgix_url: '/saafImage/coconutprd1.jpg' } },
    { title: 'Coconut Milk', price: '$12.00', picture: { imgix_url: '/saafImage/cocoprd2.jpg' } },
    { title: 'Coconut Soap', price: '$8.00', picture: { imgix_url: '/saafImage/cocoprd3.jpg' } },
    { title: 'Coconut Chips', price: '$10.00', picture: { imgix_url: '/saafImage/coconuntChips.png' } },
  ],
};

const Products = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320;

    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    router.push({
      pathname: '/product/productDetails',
      query: {
        title: product.title,
        price: product.price,
        picture: product.picture.imgix_url,
      },
    });
  };

  return (
    <div className={styles.gallery_container}id='product'>
      <div className={styles.full_background}></div>
      <div className={styles.gallery_header}>
        <h3 className={styles.section}>{staticInfo.section}</h3>
        <h1 className={styles.title}>{staticInfo.title}</h1>
        <p className={styles.intro}>{staticInfo.intro}</p>
      </div>

      <div className={styles.gallery}>
        <div className={styles.carousel} ref={scrollRef}>
          {staticInfo.menu.map((product, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => handleProductClick(product)}
            >
              <div className={styles.image_wrapper}>
                <Image
                  src={product.picture.imgix_url}
                  layout="fill"
                  objectFit="cover"
                  alt={product.title}
                />
                <div className={styles.leaf_accent}></div>
              </div>
              <div className={styles.details}>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.controls}>
          <BsArrowLeftShort className={styles.arrow} onClick={() => scroll('left')} />
          <BsArrowRightShort className={styles.arrow} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Products;
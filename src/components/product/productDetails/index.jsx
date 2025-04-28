import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './styles.module.scss';
import { FaShoppingCart, FaStar, FaLeaf } from 'react-icons/fa';

const ProductDetail = ({ details }) => {
  const router = useRouter();
  const { title, price, picture, description } = details;

  useEffect(() => {
    if (!title || !picture) {
      router.push('/'); // Redirect if no product details are found
    }
  }, [title, price, picture, router]);

  return (
    <div className={styles.detail_container}>
      <div className={styles.full_background}></div>
      <div className={styles.image_section}>
        <div className={styles.image_wrapper}>
          <Image
            src={picture || '/saafImage/coconutonly.png'}
            layout="fill"
            objectFit="cover"
            alt={title}
          />
        </div>
      </div>
      <div className={styles.content_section}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.rating}>
        </div>

        <p className={styles.description}>
          {description || 'Experience the best quality coconut products crafted for you.'}
        </p>
        <div className={styles.extra_info}>
          <p><FaLeaf /> <strong>Origin:</strong> Organic Farms</p>
          <p><FaLeaf /> <strong>Ingredients:</strong> 100% Pure Coconut</p>
          <p><FaLeaf /> <strong>Benefits:</strong> Nourishes skin, promotes hair growth, supports digestion</p>
        </div>
        {/* <button className={styles.buy_button}>
          <FaShoppingCart /> Buy Now
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetail;
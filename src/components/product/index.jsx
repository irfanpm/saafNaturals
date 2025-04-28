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
    {
      title: 'Coconut',
      picture: { imgix_url: '/saafImage/coconut222.jpg' },
      description:
        'Our fresh, whole coconuts are sourced directly from organic farms, ensuring unparalleled quality and natural goodness. Each coconut is handpicked at peak ripeness, delivering a refreshing burst of hydrating coconut water and creamy, nutrient-rich flesh. Perfect for drinking, cooking, or creating homemade coconut-based recipes, this versatile superfood is packed with electrolytes, healthy fats, and essential nutrients to support hydration, digestion, and overall wellness.',
    },
    {
      title: 'Coconut Oil',
      picture: { imgix_url: '/saafImage/cocoprd3.jpg' },
      description:
        'Our 100% pure, cold-pressed coconut oil is crafted from the finest organic coconuts, preserving its natural aroma, flavor, and health benefits. This versatile oil is a must-have for cooking, skincare, and haircare. Rich in medium-chain fatty acids like lauric acid, it supports metabolism, promotes healthy skin, and nourishes hair for a radiant shine. Use it for sautéing, baking, moisturizing dry skin, or as a deep-conditioning hair mask.',
    },
    {
      title: 'Desiccated Coconut',
      picture: { imgix_url: '/saafImage/Desiccated coconut.jpg' },
      description:
        'Our premium desiccated coconut is made from finely shredded, sun-dried organic coconut flesh, offering a delightful texture and rich, tropical flavor. Free from additives and preservatives, this all-natural product is perfect for baking, cooking, or adding a nutritious crunch to your dishes. Packed with fiber, healthy fats, and essential minerals, it’s a wholesome addition to cakes, cookies, curries, or smoothie bowls.',
    },
    {
      title: 'Copra',
      picture: { imgix_url: '/saafImage/cocoprd2.jpg' },
      description:
        'Our high-quality copra is the dried kernel of organic coconuts, carefully processed to retain its rich flavor and nutritional value. A key ingredient in traditional coconut oil production, copra is also used in culinary applications and animal feed. Sourced from sustainable farms, our copra is naturally sun-dried to preserve its purity and ensure a robust coconut taste. It’s an excellent choice for artisanal oil-making or as a base for coconut-based snacks.',
    },
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
        description: product.description,
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
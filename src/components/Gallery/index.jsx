import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      imageUrl: '/saafImage/coconutprd1.jpg',
      title: 'Coconut Oil',
      price: '$15.00',
    },
    {
      id: 2,
      imageUrl: '/saafImage/cocoprd2.jpg',
      title: 'Coconut Milk',
      price: '$12.00',
      colSpan: 2,
    },
    {
      id: 3,
      imageUrl: '/saafImage/cocoprd3.jpg',
      title: 'Coconut Soap',
      price: '$8.00',
      colSpan: 2,
    },
    {
      id: 4,
      imageUrl: '/saafImage/coconutonly.png',
      title: 'Coconut Chips',
      price: '$10.00',
    },
  ];

  return (
    <div className={styles.gallery} id='gallery' >
      <div className={styles.full_background}></div>
      <div className={styles.galleryHeader}>
        <h2>Our Coconut Treasures</h2>
        <p>Explore our curated collection of natural coconut products, crafted with love.</p>
        <a href="#products" className={styles.galleryMoreButton}>Shop All</a>
      </div>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const GalleryItem = ({ item }) => {
  return (
    <a
      href="#"
      className={`${styles.galleryItem} ${item.colSpan ? styles.colSpan2 : ''}`}
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className={styles.galleryItemOverlay}></div>
      <div className={styles.galleryItemContent}>
        <span className={styles.galleryItemTitle}>{item.title}</span>
        <span className={styles.galleryItemPrice}>{item.price}</span>
      </div>
    </a>
  );
};

export default Gallery;
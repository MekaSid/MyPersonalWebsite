// page.tsx

"use client";

import React from 'react';
import styles from './gallery.module.css';
import Image from 'next/image';
import { photos, Photo as PhotoData } from '../../data/galleryData';

const Photo: React.FC<{ photo: PhotoData }> = ({ photo }) => {
  const [overlayActive, setOverlayActive] = React.useState(false);

  const handleClick = () => {
    setOverlayActive(!overlayActive);
  };

  return (
    <div className={styles.photoContainer} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          style={{ objectFit: 'cover', borderRadius: '10px' }}
          className={styles.image}
        />
      </div>
      {overlayActive && (
        <div className={styles.overlay}>
          <div className={styles.overlayText}>{photo.caption}</div>
        </div>
      )}
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <div className={styles.galleryPage}>
      <div className={styles.galleryContainer}>
        {photos.map((photo, index) => (
          <Photo key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

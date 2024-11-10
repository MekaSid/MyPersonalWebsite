import React from 'react';
import styles from './MiniProjectCard.module.css';
import Image from 'next/image';

interface MiniProjectCardProps {
  logo: string;
  title: string;
  description: string;
  link: string;
  languages: { icon: string; name: string }[];
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({ logo, title, description, link, languages = [] }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.logoContainer}>
      <Image src={logo} alt={`${title} logo`} className={styles.logo} width={50} height={50} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.languageIcons}>
          {languages.map((language, index) => (
            <div key={index} className={styles.languageIcon}>
              
              <Image src={language.icon} alt={language.name} title={language.name} width = {50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};




export default MiniProjectCard;

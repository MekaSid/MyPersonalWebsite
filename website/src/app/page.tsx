import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="container">
      <Image
        src="/profilepicture.png"
        alt="Profile"
        className="profilePic"
        width={500}
        height={500}
      />
      <h1 className="nameTitle">Sid Meka</h1>
      <p className="description">
        Hi, I am Sid Meka and this is my personal website. I like to practice the piano, play basketball, and cook food for my friends and family.
      </p>
    </div>
  );
};

export default About;

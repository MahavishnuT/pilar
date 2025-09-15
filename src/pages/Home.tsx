import { useState, useEffect, type CSSProperties } from 'react';
import { Link } from 'react-router';

import pilarVertical from '../assets/logos/PILAR_logo_gestapeld.png';
import barImg from '../assets/pictures/home/bar-pilar.jpg';
import venueImg from '../assets/pictures/home/pilar-box.jpg';
import expoImg from '../assets/pictures/home/pilar-expo.jpg';

import './home.css';

const carrouselImages = [
  { key: 'Bar Pilar', src: barImg },
  { key: 'Pilar Box', src: venueImg },
  { key: 'Pilar Expo', src: expoImg },
];

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setPreviousIndex(hoveredIndex);
    }
  }, [hoveredIndex]);

  const getTransitionClass = (index: number) => {
    if (hoveredIndex === null) {
      if (index === 1) return 'active';
      if (previousIndex !== null && previousIndex < 1) {
        return index < 1 ? 'left' : 'right';
      }
      if (previousIndex !== null && previousIndex > 1) {
        return index > 1 ? 'right' : 'left';
      }
      return '';
    }

    if (hoveredIndex === index) return 'active';
    if (previousIndex === null) return '';

    const distance = index - hoveredIndex;
    if (distance > 0) return 'right';
    if (distance < 0) return 'left';
    return '';
  };

  return (
    <section className="home">
      <div className="pilar-logo-bg">
        <img
          src={pilarVertical}
          alt="logo-pilar"
          className="pilar-logo-vertical"
        />
      </div>
      <div className="carrousel-container">
        {carrouselImages.map((image, index) => (
          <img
            key={image.key}
            src={image.src}
            alt={image.key}
            className={`carrousel-image ${getTransitionClass(index)}`}
            style={
              {
                '--index-distance': `${
                  previousIndex !== null ? index - previousIndex : 0
                }`,
              } as CSSProperties
            }
          />
        ))}
        <div className="carrousel-titles">
          {carrouselImages.map((image, index) => (
            <Link
              to={"/" + image.key.toLowerCase().replace(/\s+/g, '-')}
              key={image.key}
              className="carrousel-title"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h1>{image.key}</h1>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

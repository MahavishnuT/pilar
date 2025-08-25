import { useState, useEffect } from 'react';

import pilarHorizontal from './assets/logos/PILAR logo_horizontaal.png';
import pilarVertical from './assets/logos/PILAR_logo_gestapeld.png';
import barImg from './assets/pictures/5661878892_15fba42846_o.jpg';
import venueImg from './assets/pictures/pexels-bri-schneiter-28802-346529.jpg';
import somethingImg from './assets/pictures/pexels-fotios-photos-1107717.jpg';

import './App.css';

const carrouselImages = [
  { key: 'Bar', src: barImg },
  { key: 'Venue', src: venueImg },
  { key: 'Something', src: somethingImg },
];

function App() {
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
    <div className="app">
      <img
        src={pilarVertical}
        alt="logo-pilar"
        className="pilar-logo-vertical"
      />
      <img
        src={pilarHorizontal}
        alt="logo-pilar"
        className="pilar-logo-horizontal"
      />
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
              } as React.CSSProperties
            }
          />
        ))}
        <div className="carrousel-titles">
          {carrouselImages.map((image, index) => (
            <div
              key={image.key}
              className="carrousel-title"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h1>{image.key}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

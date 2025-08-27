import type { FC } from 'react';
import './section.css';

interface SectionProps {
  title: string;
  img: string;
  description: string;
  left?: boolean;
}

const Section: FC<SectionProps> = ({ title, img, description, left }) => {
  return (
    <div className={`section ${left ? 'left' : ''}`}>
      <div className="section-text">
        <h2 className="section-text_title">{title}</h2>
        <p className="section-text_description">{description}</p>
      </div>
      <img src={img} alt="" className="section-img" />
    </div>
  );
};

export default Section;

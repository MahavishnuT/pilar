import type { FC } from 'react';
import './card.css';
import Button from './Button';

interface CardProps {
  title: string;
  duration?: string;
  extra?: string;
  light?: string;
  projection?: string;
  bar?: string;
  backstage?: string;
  security?: string;
  help?: string;
}

const Card: FC<CardProps> = ({
  title,
  duration,
  extra,
  light,
  projection,
  bar,
  backstage,
  security,
  help,
}) => {
  return (
      <div className="card-container">
        <h2 className="card-title">{title}</h2>
        <p>{duration}</p>
        <div className="card-separator" />
        <p>{extra}</p>
        <div className="card-separator" />
        <p>{light}</p>
        <div className="card-separator" />
        <p>{projection}</p>
        <div className="card-separator" />
        <p>{bar}</p>
        <div className="card-separator" />
        <p>{backstage}</p>
        <div className="card-separator" />
        <p>{security}</p>
        <div className="card-separator" />
        <p>{help}</p>
        <Button title="Book now" />
      </div>
  );
};

export default Card;

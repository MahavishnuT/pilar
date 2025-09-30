import Section from '../components/Section';

import bar_1 from '../assets/pictures/bar/bar_1.jpg';
import bar_2 from '../assets/pictures/bar/bar_2.jpg';
import bar_3 from '../assets/pictures/bar/bar_3.jpg';
import './bar.css';
import Card from '../components/Card';
import { useTranslation } from 'react-i18next';
const Bar = () => {
  const { t } = useTranslation();

  return (
    <section className="pilar-bar">
      <div className="pilar-bar-hero">
        <img src={bar_2} alt="pilar bar" className="pilar-bar-img" />
        <div className="pilar-bar-text">
          <h1 className="pilar-bar-text_title">Pilar bar</h1>
          <p className="pilar-bar-text_intro">{t('barHero')}</p>
        </div>
      </div>
      <Section title="Essential" img={bar_1} description={t('barEssential')} />
      <Section title="Premium" img={bar_2} description={t('barPremium')} left />
      <Section
        title="Experience"
        img={bar_3}
        description={t('barExperience')}
      />
      <h2 className="cards-title">{t('cardsTitle')}</h2>
      <div className="cards-container">
        <Card
          title="Essential"
          duration={t('barCardEssentialDuration')}
          extra={t('barCardEssentialExtra')}
          light={t('barCardEssentialLight')}
          projection={t('barCardEssentialProjection')}
          link="/bar-booking"
        />
        <Card
          title="Premium"
          duration={t('barCardPremiumDuration')}
          extra={t('barCardPremiumExtra')}
          light={t('barCardPremiumLight')}
          projection={t('barCardPremiumProjection')}
          link="/bar-booking"
        />
        <Card
          title="Experience"
          duration={t('barCardExperienceDuration')}
          extra={t('barCardExperienceExtra')}
          light={t('barCardExperienceLight')}
          projection={t('barCardExperienceProjection')}
          backstage={t('barCardExperienceBackstage')}
          bar={t('barCardExperienceBar')}
          link="/bar-booking"
        />
      </div>
      <div className="facilities-container">
        <h2 className="facilities-title">{t('facilitiesTitle')}</h2>
        <ul>
          <li>{t('facilitiesTerrace')}</li>
          <li>{t('facilitiesAudio')}</li>
          <li>{t('facilitiesTV')}</li>
          <li>{t('facilitiesKitchen')}</li>
          <li>{t('facilitiesParking')}</li>
          <li>{t('facilitiesWheelchair')}</li>
          <li>{t('facilitiesCapacity')}</li>
        </ul>
      </div>
    </section>
  );
};

export default Bar;

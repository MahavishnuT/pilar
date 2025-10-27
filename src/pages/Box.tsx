import Section from '../components/Section';

import venueIntro from '../assets/pictures/box/box_intro.jpg';
import box_1 from '../assets/pictures/box/box_1.jpg';
import box_2 from '../assets/pictures/box/box_2.jpg';
import box_3 from '../assets/pictures/box/box_3.jpg';
import box_4 from '../assets/pictures/box/box_4.jpg';
import box_5 from '../assets/pictures/box/box_5.jpg';
import './box.css';
import Card from '../components/Card';
import { useTranslation } from 'react-i18next';
import tenantGuideEn from '../assets/pdf/Tenant Guide Pilar Box.pdf';
import tenantGuideNl from '../assets/pdf/Huurgids Pilar Box.pdf';
import tenantGuideFr from '../assets/pdf/Guide Du Locataire Pilar Box.pdf';
import i18n from '../utils/i18n';

const Box = () => {
  const { t } = useTranslation();

  return (
    <section className="pilar-box">
      <div className="pilar-box-hero">
        <img src={venueIntro} alt="pilar box" className="pilar-box-img" />
        <div className="pilar-box-text">
          <h1 className="pilar-box-text_title">Pilar Box</h1>
          <p className="pilar-box-text_intro">{t('boxHero')}</p>
        </div>
      </div>
      <Section title="Essential" img={box_1} description={t('boxEssential')} />
      <Section
        title="Essential Plus"
        img={box_2}
        description={t('boxEssentialPlus')}
        left
      />
      <Section title="Premium" img={box_3} description={t('boxPremium')} />
      <Section
        title="Experience"
        img={box_4}
        description={t('boxExperience')}
        left
      />
      <Section title="Nightlife" img={box_5} description={t('boxNightlife')} />
      <h2 className="cards-title">{t('cardsTitle')}</h2>
      <div className="cards-container">
        <Card
          title="Essential"
          duration={t('boxCardEssentialDuration')}
          extra={t('boxCardEssentialExtra')}
          light={t('boxCardEssentialLight')}
          projection={t('boxCardEssentialProjection')}
          backstage={t('boxCardEssentialBackstage')}
          link="/box-booking"
        />
        <Card
          title="Essential plus"
          duration={t('boxCardEssentialPlusDuration')}
          extra={t('boxCardEssentialPlusExtra')}
          light={t('boxCardEssentialPlusLight')}
          projection={t('boxCardEssentialPlusProjection')}
          backstage={t('boxCardEssentialPlusBackstage')}
          bar={t('boxCardEssentialPlusBar')}
          link="/box-booking"
        />
        <Card
          title="Premium"
          duration={t('boxCardPremiumDuration')}
          extra={t('boxCardPremiumExtra')}
          light={t('boxCardPremiumLight')}
          projection={t('boxCardPremiumProjection')}
          backstage={t('boxCardPremiumBackstage')}
          bar={t('boxCardPremiumBar')}
          link="/box-booking"
        />
        <Card
          title="Nightlife"
          duration={t('boxCardNightlifeDuration')}
          light={t('boxCardNightlifeLight')}
          projection={t('boxCardNightlifeProjection')}
          backstage={t('boxCardNightlifeBackstage')}
          bar={t('boxCardNightlifeBar')}
          security={t('boxCardNightlifeSecurity')}
          link="/box-booking"
        />
        <Card
          title="Experience"
          duration={t('boxCardExperienceDuration')}
          light={t('boxCardExperienceLight')}
          projection={t('boxCardExperienceProjection')}
          backstage={t('boxCardExperienceBackstage')}
          bar={t('boxCardExperienceBar')}
          security={t('boxCardExperienceSecurity')}
          help={t('boxCardExperienceHelp')}
          link="/box-booking"
        />
      </div>
      <div className="facilities-container">
        <h2 className="facilities-title">{t('facilitiesTitle')}</h2>
        <ul>
          <li>{t('facilitiesLight')}</li>
          <li>{t('facilitiesCapacityBox')}</li>
          <li>{t('facilitiesSize')}</li>
          <li>{t('facilitiesExtendable')}</li>
          <li>{t('facilitiesParking')}</li>
          <li>{t('facilitiesWheelchair')}</li>
          <li>{t('facilitiesFoyer')}</li>
          <li>{t('facilitiesLockers')}</li>
          <li>{t('facilitiesArtists')}</li>
          <li>{t('facilitiesShower')}</li>
          <li>{t('facilitiesKitchen')}</li>
          <li>{t('facilitiesDock')}</li>
        </ul>
      </div>
      <div className="facilities-button-container">

      <button
        type="button"
        className="facilities-button"
        onClick={() => {
          const pdfFile = (() => {
            switch (i18n.language) {
              case 'en':
                return tenantGuideEn;
              case 'fr':
                return tenantGuideFr;
              default:
                return tenantGuideNl;
            }
          })();

          const fileName = (() => {
            switch (i18n.language) {
              case 'en':
                return 'Tenant Guide Pilar Box.pdf';
              case 'fr':
                return 'Guide Du Locataire Pilar Box.pdf';
              default:
                return 'Huurgids Pilar Box.pdf';
            }
          })();

          const link = document.createElement('a');
          link.href = pdfFile;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        {t('facilitiesButton')}
      </button>
      </div>
    </section>
  );
};

export default Box;

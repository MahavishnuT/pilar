import Section from '../components/Section';

import venueIntro from '../assets/pictures/box/box_intro.jpg';
import box_1 from '../assets/pictures/box/box_1.jpg';
import box_2 from '../assets/pictures/box/box_2.jpg';
import box_3 from '../assets/pictures/box/box_3.jpg';
import box_4 from '../assets/pictures/box/box_4.jpg';
import box_5 from '../assets/pictures/box/box_5.jpg';
import './box.css';
const Box = () => {
  return (
    <section className="pilar-box">
      <div className="pilar-box-hero">
        <img src={venueIntro} alt="pilar box" className="pilar-box-img" />
        <div className="pilar-box-text">
          <h1 className="pilar-box-text_title">Pilar Box</h1>
          <p className="pilar-box-text_intro">
            Pilar Box is de ultieme locatie voor concerten,
            theatervoorstellingen, filmvertoningen en nightlife-events. Met een
            professioneel geluids- en lichtsysteem en een capaciteit tot 300
            personen biedt de zaal een perfecte combinatie van techniek, sfeer
            en comfort. Of het nu gaat om een intiem optreden of een groots
            evenement, Pilar Box zorgt voor een onvergetelijke beleving voor
            artiesten en publiek.
          </p>
        </div>
      </div>
      <Section
        title="Essential"
        img={box_1}
        description="Box Essential biedt je 4 uur exclusieve toegang tot onze concertzaal – de perfecte setting voor conferenties, lezingen of filmvertoningen. Je sluit eenvoudig je eigen computer aan via HDMI op ons professioneel audiosysteem en maakt gebruik van de sfeervolle basisverlichting. Alles is gebruiksklaar en intuïtief, zodat je zonder technieker moeiteloos je evenement in goede banen leidt. Optioneel kan je de duur van je event uitbreiden in schijven van 2 uur."
      />
      <Section
        title="Essential Plus"
        img={box_2}
        description="Box Essential biedt je 4 uur exclusieve toegang tot onze concertzaal – de perfecte setting voor conferenties, lezingen of filmvertoningen. Je sluit eenvoudig je eigen computer aan via HDMI op ons professioneel audiosysteem en maakt gebruik van de sfeervolle basisverlichting. Alles is gebruiksklaar en intuïtief, zodat je zonder technieker moeiteloos je evenement in goede banen leidt. Optioneel kan je de duur van je event uitbreiden in schijven van 2 uur."
        left
      />
      <Section
        title="Premium"
        img={box_3}
        description="Box Essential biedt je 4 uur exclusieve toegang tot onze concertzaal – de perfecte setting voor conferenties, lezingen of filmvertoningen. Je sluit eenvoudig je eigen computer aan via HDMI op ons professioneel audiosysteem en maakt gebruik van de sfeervolle basisverlichting. Alles is gebruiksklaar en intuïtief, zodat je zonder technieker moeiteloos je evenement in goede banen leidt. Optioneel kan je de duur van je event uitbreiden in schijven van 2 uur."
      />
      <Section
        title="Experience"
        img={box_4}
        description="Box Essential biedt je 4 uur exclusieve toegang tot onze concertzaal – de perfecte setting voor conferenties, lezingen of filmvertoningen. Je sluit eenvoudig je eigen computer aan via HDMI op ons professioneel audiosysteem en maakt gebruik van de sfeervolle basisverlichting. Alles is gebruiksklaar en intuïtief, zodat je zonder technieker moeiteloos je evenement in goede banen leidt. Optioneel kan je de duur van je event uitbreiden in schijven van 2 uur."
        left
      />
      <Section
        title="Nightlife"
        img={box_5}
        description="Box Essential biedt je 4 uur exclusieve toegang tot onze concertzaal – de perfecte setting voor conferenties, lezingen of filmvertoningen. Je sluit eenvoudig je eigen computer aan via HDMI op ons professioneel audiosysteem en maakt gebruik van de sfeervolle basisverlichting. Alles is gebruiksklaar en intuïtief, zodat je zonder technieker moeiteloos je evenement in goede banen leidt. Optioneel kan je de duur van je event uitbreiden in schijven van 2 uur."
      />
    </section>
  );
};

export default Box;

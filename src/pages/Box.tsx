import Section from '../components/Section';

import venueIntro from '../assets/pictures/box/box_intro.jpg';
import box_1 from '../assets/pictures/box/box_1.jpg';
import box_2 from '../assets/pictures/box/box_2.jpg';
import box_3 from '../assets/pictures/box/box_3.jpg';
import box_4 from '../assets/pictures/box/box_4.jpg';
import box_5 from '../assets/pictures/box/box_5.jpg';
import './box.css';
import Card from '../components/Card';
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
        description="Essential Plus is de ideale keuze voor wie de concertzaal enkele uren wil gebruiken mét de ondersteuning van een geluidstechnieker. Je geniet 4 uur exclusieve toegang, inclusief een krachtig audiosysteem, professionele belichting met standaard lichtplan en de aanwezigheid van een ervaren geluids- en lichttechnieker die alles voor je in goede banen leidt."
        left
      />
      <Section
        title="Premium"
        img={box_3}
        description="Box Premium biedt jou en je bezoekers de ideale setting voor een onvergetelijke concert- of theatervoorstelling. Je krijgt tot 8 uur lang exclusieve toegang tot onze volledig uitgeruste zaal, waar indrukwekkende licht- en geluidsbeleving je evenement tot leven brengen. Een ervaren technicus ondersteunt je met professionele audio en verlichting, zodat elk detail tot in de puntjes klopt."
      />
      <Section
        title="Experience"
        img={box_4}
        description="Box Experience biedt alle troeven van het Premium-pakket, maar dan uitgebreid tot 14 uur – tot uiterlijk 2u ’s ochtends. Ideaal voor evenementen die een volledige dag beslaan en tot in de late uurtjes doorgaan. Een ervaren geluids- en lichttechnieker ondersteunt je doorheen het hele evenement, en indien gewenst staan twee medewerkers klaar om je extra bij te staan waar nodig."
        left
      />
      <Section
        title="Nightlife"
        img={box_5}
        description="Box Nightlife geeft je exclusieve toegang tot onze zaal tot 6 uur ’s ochtends. Professionele licht- en geluidsbegeleiding zorgen voor een feestbeleving op topniveau, terwijl een ervaren securityteam instaat voor een veilig en zorgeloos verloop. Achter de bar staan bekwame barmannen en -vrouwen klaar om je gasten de hele nacht van drankjes te voorzien."
      />
      <h2 className='cards-title'>Vergelijk onze pakketten</h2>
      <div className="cards-container">
        <Card
          title="Essential"
          duration="4h (Between 8h - 22h)"
          extra="Optionnal extra time, +2 hours or +4 hours"
          light="Basic setup, no technician. Only standard lightning and sound through HMDI connection"
          projection="Screen projection included"
          backstage="Access to backstage kitchen only"
        />
        <Card
          title="Essential plus"
          duration="4h (Between 8h - 22h)"
          extra="Optionnal extra time, +2 hours or +4 hours"
          light="Technician will be present throughout the event. A standard sound setup and lightning plan will be available"
          projection="Screen projection included"
          backstage="Access included to the backstage"
          bar="Bar : optional (included)"
        />
        <Card
          title="Premium"
          duration="8h (Between 8h - 22h)"
          extra="Optionnal extra time, +2 hours or +4 hours"
          light="Technician will be present throughout the event. A standard sound setup and lightning plan will be available"
          projection="Screen projection included"
          backstage="Access included to the backstage"
          bar="Bar : optional (included)"
        />
        <Card
          title="Nightlife"
          duration="10h (Between 18h - 6h)"
          light="Technician will be present throughout the event. A standard sound setup and lightning plan will be available"
          projection="Screen projection included"
          backstage="Access included to the backstage"
          bar="Bar included"
          security="Security included"
        />
        <Card
          title="Experience"
          duration="14h (Between 8h - 22h)"
          light="Technician will be present throughout the event. A standard sound setup and lightning plan will be available"
          projection="Screen projection included"
          backstage="Access included to the backstage"
          bar="Bar included"
          security="Security included"
          help="Extra help included"
        />
      </div>
    </section>
  );
};

export default Box;

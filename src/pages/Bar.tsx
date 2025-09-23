import Section from '../components/Section';

import bar_1 from '../assets/pictures/bar/bar_1.jpg';
import bar_2 from '../assets/pictures/bar/bar_2.jpg';
import bar_3 from '../assets/pictures/bar/bar_3.jpg';
import './bar.css';
import Card from '../components/Card';
const Bar = () => {
  return (
    <section className="pilar-bar">
      <div className="pilar-bar-hero">
        <img src={bar_2} alt="pilar bar" className="pilar-bar-img" />
        <div className="pilar-bar-text">
          <h1 className="pilar-bar-text_title">Pilar bar</h1>
          <p className="pilar-bar-text_intro">
            Ben je op zoek naar een stijlvolle en gezellige locatie voor je
            feest, receptie of bijeenkomst? Bar Pilar biedt de perfecte setting.
            De bar maakt deel uit van het Pilar-complex en combineert een warme
            atmosfeer met alle comfort: een zonnig terras, ruime
            parkeermogelijkheden en een uitgebreide drankkaart. Bar Pilar kan
            volledig privé worden afgehuurd tot 2u ’s nachts, inclusief
            professioneel barpersoneel.
          </p>
        </div>
      </div>
      <Section
        title="Essential"
        img={bar_1}
        description="Essential biedt je in het weekend 4 uur exclusieve toegang tot onze bar. Perfect voor conferenties,
lezingen, borrels, verjaardagen of een avond met vrienden.
De bar heeft een gebruiksvriendelijk geluidssysteem (met eigen muziek of Spotify via tablet),
microfoon en groot scherm voor presentaties of entertainment.
De standaard indeling blijft behouden; extra tijd kan je bijboeken per 2 uur. Zo combineert Bar Pilar
professionele faciliteiten met de gezellige sfeer van een privébar.
"
      />
      <Section
        title="Premium"
        img={bar_2}
        description="Premium geeft je 8 uur exclusieve toegang tot onze bar, ideaal voor feesten, recepties of
bedrijfsevents. Je bepaalt zelf de indeling van de bar en kan optioneel een Pioneer DJ-set met
professionele geluidsinstallatie boeken.
Standaard zijn er ook een microfoon, een groot televisiescherm en een gebruiksvriendelijk
geluidssysteem aanwezig, waarop je je eigen muziek kan afspelen of eenvoudig onze tablet met
Spotify kan gebruiken.
Wil je langer doorgaan? Extra tijd kan steeds worden bijgeboekt in schijven van 2 uur. Zo geniet je
van alle flexibiliteit om jouw evenement helemaal naar wens te organiseren.
"
        left
      />
      <Section
        title="Experience"
        img={bar_3}
        description="Experience biedt 8 uur exclusieve toegang tot onze bar, inclusief alle Premium-faciliteiten én
gebruik van de keuken – ideaal voor catering of een culinaire invulling op maat.
Een extra medewerker ondersteunt en coördineert je event, zodat jij je volledig kan focussen op je
gasten. De barindeling blijft vrij aanpasbaar en optioneel kan je een Pioneer DJ-set met
professionele geluidsinstallatie toevoegen. Extra tijd boek je eenvoudig per 2 uur.
Met Experience kies je voor comfort, flexibiliteit en een persoonlijke touch – perfect voor events
die net dat tikkeltje meer vragen."
      />
      <h2 className="cards-title">Vergelijk onze pakketten</h2>
      <div className="cards-container">
        <Card
          title="Essential"
          duration="4u"
          extra="Optionele extra tijd, +2 uur of +4 uur"
          light="Standaard barindeling"
          projection="Audio installatie bar + Spotify"
          link="/bar-booking"
        />
        <Card
          title="Essential plus"
          duration="4u"
          extra="Optionele extra tijd, +2 uur of +4 uur"
          light="Gepersonaliseerde barindeling"
          projection="Professionele audio setup + Pioneer DJ set"
          link="/bar-booking"
        />
        <Card
          title="Premium"
          duration="8u"
          extra="Optionele extra tijd, +2 uur of +4 uur"
          light="Gepersonaliseerde barindeling"
          projection="Professionele audio setup + Pioneer DJ set"
          backstage="Volledig uitgeruste keuken"
          bar="Extra hulp inbegrepen"
          link="/bar-booking"
        />
      </div>
      <div className="facilities-container">
        <h2 className="facilities-title">Faciliteiten</h2>
        <ul>
          <li>Terras + overdekt terras</li>
          <li>Audio installatie</li>
          <li>TV-scherm</li>
          <li>Uitgeruste keuken (enkel inbegrepen bij Experience - pakket)</li>
          <li>Parkeermogelijkheid</li>
          <li>Rolstoel toegankelijk</li>
          <li>Tot 70 personen zittend of 120 personen staand</li>
        </ul>
      </div>
      <div className="prout-container">
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
        <span>PROUT</span>
      </div>
    </section>
  );
};

export default Bar;

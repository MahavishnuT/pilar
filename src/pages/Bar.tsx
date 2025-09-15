import Section from '../components/Section';

import bar_1 from '../assets/pictures/bar/bar_1.jpg';
import bar_2 from '../assets/pictures/bar/bar_2.jpg';
import bar_3 from '../assets/pictures/bar/bar_3.jpg';
import './bar.css';
import Card from '../components/Card';
import Button from '../components/Button';
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
          <Button title="Reserveer nu" isLightBg />
        </div>
      </div>
      <Section
        title="Essential"
        img={bar_1}
        description="Met Bar Pilar Essential geniet je in het weekend van 4 uur exclusieve toegang tot onze bar – ideaal voor conferenties, lezingen of korte bijeenkomsten, maar evengoed voor verjaardagsfeesten, borrels of een gezellige avond met vrienden. De bar is uitgerust met een gebruiksvriendelijk geluidssysteem waarop je je eigen muziek kan afspelen, of eenvoudig via onze tablet met Spotify. Een microfoon is standaard voorzien en aangesloten op de algemene installatie, en er is een groot televisiescherm beschikbaar voor presentaties, video’s of entertainment. Bij dit pakket blijft de standaard indeling van de bar behouden: tafels en meubilair kunnen niet verplaatst worden. Wil je langer blijven? Dan kan je eenvoudig extra tijd bijboeken in schijven van 2 uur. Zo combineert Bar Pilar de praktische faciliteiten van een professionele ruimte met de warme, gezellige sfeer van een bar – helemaal privé en volledig op maat van jouw gelegenheid.
"
      />
      <Section
        title="Premium"
        img={bar_2}
        description="Met Bar Pilar Premium krijg je 8 uur lang exclusieve toegang tot onze bar – ideaal voor feesten, recepties, bedrijfsevents of elke gelegenheid die wat meer ruimte en vrijheid vraagt. In dit pakket kan je de volledige indeling van de bar zelf bepalen: tafels en meubilair mogen vrij verplaatst worden zodat je de setting perfect kan afstemmen op jouw event. Bovendien heb je de optie om een volledige Pioneer DJ-set en een professionele geluidsinstallatie bij te reserveren, ideaal om van je avond een onvergetelijk feestje te maken. Standaard zijn er ook een microfoon, een groot televisiescherm en een gebruiksvriendelijk geluidssysteem aanwezig, waarop je je eigen muziek kan afspelen of eenvoudig onze tablet met Spotify kan gebruiken. Wil je langer doorgaan? Extra tijd kan steeds worden bijgeboekt in schijven van 2 uur. Zo geniet je van alle flexibiliteit om jouw evenement helemaal naar wens te organiseren.
"
        left
      />
      <Section
        title="Experience"
        img={bar_3}
        description="Met Bar Pilar Experience krijg je 8 uur lang exclusieve toegang tot onze bar, aangevuld met alle troeven om je event écht zorgeloos te laten verlopen. Dit pakket omvat niet alleen alle faciliteiten van het Premium-pakket, maar ook het gebruik van onze keuken. Zo kan je jouw bijeenkomst combineren met catering, zelf bereide gerechten of een culinaire invulling op maat. Daarnaast staat er een extra medewerker voor je klaar die het evenement in goede banen leidt. Van praktische ondersteuning tot het coördineren van de avond: zo kan jij je volledig focussen op je gasten, terwijl alles achter de schermen vlekkeloos verloopt. Uiteraard blijft het mogelijk om de barindeling volledig naar wens aan te passen, en kan je optioneel een Pioneer DJ-set met professionele geluidsinstallatie toevoegen. Wil je langer doorgaan? Ook hier kan je extra tijd bijboeken in schijven van 2 uur. Met Experience kies je voor comfort, flexibiliteit én een persoonlijke touch – ideaal voor wie zijn event nét dat tikkeltje meer wil geven."
      />
      <h2 className="cards-title">Vergelijk onze pakketten</h2>
      <div className="cards-container">
        <Card
          title="Essential"
          duration="4u"
          extra="Optionnal extra time, +2 hours or +4 hours"
          light="Standaard barindeling"
          projection="Audio installatie bar + Spotify"
        />
        <Card
          title="Essential plus"
          duration="4u"
          extra="Optionnal extra time, +2 hours or +4 hours"
          light="Gepersonaliseerde barindeling"
          projection="Professionele audio setup + Pioneer DJ set"
          backstage="Professionele audio setup + Pioneer DJ set"
        />
        <Card
          title="Premium"
          duration="8u"
          extra="Optionnal extra time, +2 hours or +4 hours"
          light="Gepersonaliseerde barindeling"
          projection="Professionele audio setup + Pioneer DJ set"
          backstage="Volledig uitgeruste keuken"
          bar="Extra hulp inbegrepen"
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
    </section>
  );
};

export default Bar;

import Input from '../components/Input';
import PhoneInputs from '../components/PhoneInput';
import Select from '../components/Select';
import Textarea from '../components/Textarea';

import './booking.css';

const ORGANIZATION_OPTIONS = [
  'VUB',
  'Commercial company',
  'NPO or social / cultural organization',
  'Individual Person',
];

const PACKAGE_OPTIONS = [
  'Essential',
  'Essential Plus',
  'Premium',
  'Experience',
  'Nightlife',
];

const EVENT_TYPE_OPTIONS = [
  'Concert',
  'Theater',
  'Party',
  'Talk / Conference',
  'Film screening',
];

const Booking = () => {
  return (
    <section className="booking-section">
      <h1 className="booking-title">Booking</h1>
      <form action="submit">
        <Input title="First Name" placeholder="First Name" type="text" />
        <Input title="Last Name" placeholder="Last Name" type="text" />
        <Input title="Email" placeholder="Email" type="email" />
        <PhoneInputs />
        <Input
          title="Billing Address"
          placeholder="Billing Address"
          type="text"
        />
        <Select
          title="Type of Organization"
          optionsList={ORGANIZATION_OPTIONS}
        />

        <Input title="Preferred date of event" type="date" />
        <Input type="date" />
        <Input type="date" />
        <Input type="date" />
        <Input type="date" />

        <Input
          title="Name of your event"
          placeholder="Name of your event"
          type="text"
        />

        <Textarea
          title="Describe your event"
          placeholder="Describe your event"
        />

        <Select title="Package" optionsList={PACKAGE_OPTIONS} />

        <Select title="Type of event" optionsList={EVENT_TYPE_OPTIONS} />

        <Input title="Do you wish the foyer bar to be open?" type="checkbox" />

        <span>Duration</span>
        <div className="duration-container">
          <Input
            title="From"
            type="number"
            min="0"
            max="23"
            className="duration"
          />
          <Input
            title="u"
            type="number"
            min="0"
            max="59"
            className="duration"
          />
          <Input
            title="To"
            type="number"
            min="0"
            max="23"
            className="duration"
          />
          <Input
            title="u"
            type="number"
            min="0"
            max="59"
            className="duration"
          />
        </div>
        <Input
          title="Estimated amount of visitors (cannot be higher than 300)"
          type="number"
          min="1"
          max="300"
        />
      </form>
    </section>
  );
};

export default Booking;

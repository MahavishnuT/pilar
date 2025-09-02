import Input from '../components/Input';
import PhoneInputs from '../components/PhoneInput';

import './booking.css';

const Booking = () => {
  return (
    <section className="booking-section">
      <h1 className="booking-title">Booking</h1>
      <form action="submit">
        <Input title="First Name" placeholder="First Name" type="text" />
        <Input title="Last Name" placeholder="Last Name" type="text" />
        <Input title="Email" placeholder="Email" type="email" />
        <PhoneInputs />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="date">Billing Address</label>
        <input type="text" id="billing" name="billing" required />

        <label htmlFor="organizationType">Type of Organization</label>
        <select id="organizationType" name="organizationType" required>
          <option value="">Select an option</option>
          <option value="vub">VUB</option>
          <option value="commercial company">Commercial company</option>
          <option value="npo">NPO or social / cultural organization</option>
          <option value="individual">Individual Person</option>
        </select>

        <label htmlFor="preferredDate">Preferred date of event</label>
        <input type="date" id="preferredDate" name="preferredDate" required />

        <label htmlFor="eventName">Name of your event</label>
        <input type="text" id="eventName" name="eventName" required />

        <label htmlFor="eventDescription">Describe your event</label>
        <textarea id="eventDescription" name="eventDescription" required />

        <label htmlFor="package">Package</label>
        <select id="package" name="package" required>
          <option value="">Select an option</option>
          <option value="essential">Essential</option>
          <option value="essentialPlus">Essential Plus</option>
          <option value="premium">Premium</option>
          <option value="experience">Experience</option>
          <option value="nightlife">Nightlife</option>
        </select>

        <label htmlFor="eventType">Event type</label>
        <select id="eventType" name="eventType" required>
          <option value="">Select an option</option>
          <option value="concert">Concert</option>
          <option value="Theater">Theater</option>
          <option value="party">Party</option>
          <option value="talk">Talk / Conference</option>
          <option value="film">Film screening</option>
        </select>

        <label htmlFor="foyer">Do you wish the foyer bar to be open?</label>
        <input type="checkbox" id="foyer" name="foyer" />

        <label htmlFor="duration">Duration</label>
        <span>from</span>
        <input type="number" id="duration" name="duration" required />
        <span>to</span>
        <input type="number" id="duration" name="duration" required />

        <label htmlFor="expectedAttendance">
          Estimated amount of visitors (cannot be higher than 300)
        </label>
        <input
          type="number"
          id="expectedAttendance"
          name="expectedAttendance"
          min="1"
          max="300"
          required
        />
      </form>
    </section>
  );
};

export default Booking;

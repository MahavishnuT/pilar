import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import Input from '../components/Input';
import PhoneInputs from '../components/PhoneInput';
import Select from '../components/Select';
import Textarea from '../components/Textarea';

import './bookingBox.css';
import Button from '../components/Button';

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

const BookingBox = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [startHour, setStartHour] = useState<number>(0);
  const [startMinute, setStartMinute] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(0);
  const [endMinute, setEndMinute] = useState<number>(0);
  const [durationError, setDurationError] = useState<boolean>(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const start = startHour + startMinute / 60;
    const end = endHour + endMinute / 60;
    let duration = end - start;

    if (duration < 0) {
      duration += 24;
    }

    const isEssentialPackage =
      selectedPackage === 'Essential' || selectedPackage === 'Essential Plus';
    setDurationError(isEssentialPackage && duration > 8);
  }, [startHour, startMinute, endHour, endMinute, selectedPackage]);

  const filteredEventTypes = EVENT_TYPE_OPTIONS.filter((eventType) => {
    if (selectedPackage === 'Essential') {
      return (
        eventType === 'Talk / Conference' || eventType === 'Film screening'
      );
    }
    if (selectedPackage === 'Experience' || selectedPackage === 'Nightlife') {
      return (
        eventType === 'Concert' ||
        eventType === 'Theater' ||
        eventType === 'Party'
      );
    }
    return true;
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('First Name:', firstName);
    console.log('Email:', email);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <section className="booking-section">
      <h1 className="booking-title">Booking</h1>
      <form onSubmit={handleSubmit}>
        <Input
          title="First Name"
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={(value) => setFirstName(value)}
        />
        <Input title="Last Name" placeholder="Last Name" type="text" />
        <Input
          title="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
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

        <Select
          title="Package"
          optionsList={PACKAGE_OPTIONS}
          onChange={(value) => setSelectedPackage(value)}
        />

        {selectedPackage && (
          <Select title="Type of event" optionsList={filteredEventTypes} />
        )}

        {(selectedPackage == 'Essential Plus' ||
          selectedPackage == 'Premium') && (
          <Input
            title="Do you wish the foyer bar to be open?"
            type="checkbox"
          />
        )}

        <span>Duration</span>
        <div className="duration-container">
          <Input
            title="From"
            type="number"
            min="0"
            max="23"
            className="duration"
            value={startHour}
            onChange={(value) => setStartHour(Number(value))}
          />
          <Input
            title=":"
            type="number"
            min="0"
            max="59"
            className="duration"
            value={startMinute}
            onChange={(value) => setStartMinute(Number(value))}
          />
          <Input
            title="To"
            type="number"
            min="0"
            max="23"
            className="duration"
            value={endHour}
            onChange={(value) => setEndHour(Number(value))}
          />
          <Input
            title=":"
            type="number"
            min="0"
            max="59"
            className="duration"
            value={endMinute}
            onChange={(value) => setEndMinute(Number(value))}
          />
        </div>
        {durationError && (
          <span className="error-msg">
            Essential and Essential Plus packages cannot exceed 8 hours
          </span>
        )}
        <Input
          title="Estimated amount of visitors (cannot be higher than 300)"
          type="number"
          min="1"
          max="300"
        />
        <Button title="Submit" className="booking-button" isLightBg isSubmit />
      </form>
    </section>
  );
};

export default BookingBox;

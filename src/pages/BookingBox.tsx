import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';

import Input from '../components/Input';
import PhoneInputs from '../components/PhoneInput';
import Select from '../components/Select';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import SwitchButton from '../components/SwitchButton';
import PopUp from '../components/PopUp';

import BackgroundBarImg from '../assets/pictures/bar/bookingBG.jpg';

import './bookingBox.css';

const ORGANIZATION_OPTIONS = [
  'VUB',
  'Commercieel bedrijf',
  'VZW of sociaal / culturele organisatie',
  'Individueel persoon',
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
  'Lezing / Conferentie',
  'Film voorstelling',
];

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  billingAddress: string;
  organization: string;
  dates: string[];
  eventName: string;
  eventDescription: string;
  package: string;
  eventType: string;
  hasBar: boolean;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  visitors: number;
  firstNameTech: string;
  lastNameTech: string;
  emailTech: string;
  phoneTech: string;
}

const initialFormState: BookingForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  billingAddress: '',
  organization: '',
  dates: [''],
  eventName: '',
  eventDescription: '',
  package: '',
  eventType: '',
  hasBar: false,
  startHour: 0,
  startMinute: 0,
  endHour: 0,
  endMinute: 0,
  visitors: 0,
  firstNameTech: '',
  lastNameTech: '',
  emailTech: '',
  phoneTech: '',
};

const BookingBox = () => {
  const [formData, setFormData] = useState<BookingForm>(initialFormState);
  const [durationError, setDurationError] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [hasTechnical, setHasTechnical] = useState<boolean>(false);

  const updateFormData = (
    field: keyof BookingForm,
    value: string | number | boolean | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addDate = () => {
    if (formData.dates.length < 5) {
      setFormData((prev) => ({
        ...prev,
        dates: [...prev.dates, ''],
      }));
    }
  };

  const updateDate = (index: number, value: string) => {
    const newDates = [...formData.dates];
    newDates[index] = value;
    setFormData((prev) => ({
      ...prev,
      dates: newDates,
    }));
  };

  const isFormValid = () => {
    const requiredFields: (keyof BookingForm)[] = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'billingAddress',
      'organization',
      'dates',
      'eventName',
      'eventDescription',
      'package',
      'eventType',
      'visitors',
    ];

    return (
      requiredFields.every((field) => {
        if (field === 'dates') {
          return formData.dates[0] !== '';
        }
        return formData[field] !== '' && formData[field] !== 0;
      }) && !durationError
    );
  };

  useEffect(() => {
    const start = formData.startHour + formData.startMinute / 60;
    const end = formData.endHour + formData.endMinute / 60;
    let duration = end - start;

    if (duration < 0) {
      duration += 24;
    }

    const isEssentialPackage = ['Essential', 'Essential Plus'].includes(
      formData.package
    );
    setDurationError(isEssentialPackage && duration > 8);
  }, [
    formData.startHour,
    formData.startMinute,
    formData.endHour,
    formData.endMinute,
    formData.package,
  ]);

  const filteredEventTypes = EVENT_TYPE_OPTIONS.filter((eventType) => {
    if (formData.package === 'Essential') {
      return (
        eventType === 'Lezing / Conferentie' ||
        eventType === 'Film voorstelling'
      );
    }
    if (formData.package === 'Experience' || formData.package === 'Nightlife') {
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

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setFormData(initialFormState);
      setShowPopUp(true);
    } catch (error) {
      setFormData(initialFormState);
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <section className="booking-section">
      {showPopUp && (
        <PopUp
          title="Bedankt voor uw aanvraag!"
          text="Ons team zal binnen de 5 werkdagen contact met u opnemen."
          onClose={() => setShowPopUp(false)}
        />
      )}
      <img src={BackgroundBarImg} alt="" />
      <h1 className="booking-title">Offerte</h1>
      <form onSubmit={handleSubmit}>
        <Input
          title="Voornaam "
          placeholder="Voornaam"
          type="text"
          value={formData.firstName}
          onChange={(value) => updateFormData('firstName', value)}
          required
        />
        <Input
          title="Achternaam"
          placeholder="Achternaam"
          type="text"
          value={formData.lastName}
          onChange={(value) => updateFormData('lastName', value)}
          required
        />
        <Input
          title="Email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={(value) => updateFormData('email', value)}
          required
        />
        <PhoneInputs
          value={formData.phone}
          onChange={(value) => updateFormData('phone', value || '')}
          required
        />
        <Input
          title="Bedrijfsnaam"
          placeholder="Bedrijfsnaam"
          type="text"
          value={formData.companyName}
          onChange={(value) => updateFormData('companyName', value)}
        />
        <Input
          title="Facturatie adres"
          placeholder="Facturatie adres"
          type="text"
          value={formData.billingAddress}
          onChange={(value) => updateFormData('billingAddress', value)}
          required
        />
        <Select
          title="Soort organisatie"
          optionsList={ORGANIZATION_OPTIONS}
          value={formData.organization}
          onChange={(value) => updateFormData('organization', value)}
          required
        />

        <div className="dates-container">
          <div className="date-input-wrapper">
            <Input
              title="Gewenste datum "
              type="date"
              value={formData.dates[0]}
              onChange={(value) => updateDate(0, value)}
              required
            />
            {formData.dates.length < 5 && (
              <button
                type="button"
                onClick={addDate}
                className="add-date-btn"
                style={{ bottom: `${-(formData.dates.length - 1) * 80}px` }}
              />
            )}
          </div>
          {formData.dates.slice(1).map((date, index) => (
            <Input
              key={index}
              type="date"
              title={`Alternatieve datum ${index + 1}`}
              value={date}
              onChange={(value) => updateDate(index + 1, value)}
            />
          ))}
        </div>

        <Input
          title="Naam van uw evenement"
          placeholder="Naam van uw evenement"
          type="text"
          value={formData.eventName}
          onChange={(value) => updateFormData('eventName', value)}
          required
        />

        <Textarea
          title="Beschrijf uw evenement"
          placeholder="Beschrijf uw evenement"
          value={formData.eventDescription}
          onChange={(value) => updateFormData('eventDescription', value)}
          required
        />

        <Select
          title="Pakket"
          optionsList={PACKAGE_OPTIONS}
          value={formData.package}
          onChange={(value) => updateFormData('package', value)}
          required
        />

        {formData.package && (
          <Select
            title="Type evenement"
            optionsList={filteredEventTypes}
            value={formData.eventType}
            onChange={(value) => updateFormData('eventType', value)}
            required
          />
        )}

        {(formData.package == 'Essential Plus' ||
          formData.package == 'Premium') && (
          <SwitchButton
            title="Ik wil gebruik maken van de foyer bar"
            name="bar-option"
            value={formData.hasBar}
            onChange={(value) => updateFormData('hasBar', value)}
          />
        )}

        <span>Tijdsduur</span>
        <div className="duration-container">
          <div className="duration-subcontainer">
            <Input
              title="vanaf"
              type="number"
              min="0"
              max="23"
              className="duration"
              value={formData.startHour}
              onChange={(value) => updateFormData('startHour', Number(value))}
            />
            <Input
              title=":"
              type="number"
              min="0"
              max="59"
              className="duration"
              value={formData.startMinute}
              onChange={(value) => updateFormData('startMinute', Number(value))}
            />
          </div>
          <div className="duration-subcontainer">
            <Input
              title="tot"
              type="number"
              min="0"
              max="23"
              className="duration"
              value={formData.endHour}
              onChange={(value) => updateFormData('endHour', Number(value))}
            />
            <Input
              title=":"
              type="number"
              min="0"
              max="59"
              className="duration"
              value={formData.endMinute}
              onChange={(value) => updateFormData('endMinute', Number(value))}
            />
          </div>
        </div>
        {durationError && (
          <span className="error-msg">
            Essential and Essential Plus packages cannot exceed 8 hours
          </span>
        )}
        <Input
          title="Geschat aantal bezoekers (maximaal 300)"
          type="number"
          min="1"
          max="300"
          value={formData.visitors}
          onChange={(value) => updateFormData('visitors', Number(value))}
          required
        />
        {formData.package !== 'Essential' && (
          <>
            <SwitchButton
              title="De contactpersoon voor technische vragen is dezelfde als hierboven vermeld"
              name="different-contact-person"
              value={hasTechnical}
              onChange={(value) => setHasTechnical(value)}
            />
            {!hasTechnical && (
              <>
                <Input
                  title="Voornaam "
                  placeholder="Voornaam"
                  type="text"
                  value={formData.firstNameTech}
                  onChange={(value) => updateFormData('firstNameTech', value)}
                />
                <Input
                  title="Achternaam"
                  placeholder="Achternaam"
                  type="text"
                  value={formData.lastNameTech}
                  onChange={(value) => updateFormData('lastNameTech', value)}
                />
                <Input
                  title="Email"
                  placeholder="Email"
                  type="email"
                  value={formData.emailTech}
                  onChange={(value) => updateFormData('emailTech', value)}
                />
                <PhoneInputs
                  value={formData.phoneTech}
                  onChange={(value) => updateFormData('phoneTech', value || '')}
                />
              </>
            )}
          </>
        )}
        <Button
          title="Verstuur"
          className="booking-button"
          isLightBg
          isSubmit
          disabled={!isFormValid()}
          onClick={() => {
            setShowPopUp(true);
          }}
        />
      </form>
    </section>
  );
};

export default BookingBox;

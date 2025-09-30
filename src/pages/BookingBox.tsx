import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import type { BookingForm } from '../utils/types/bookingForm';
import { useTranslation } from 'react-i18next';

import Input from '../components/Input';
import PhoneInputs from '../components/PhoneInput';
import Select from '../components/Select';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import SwitchButton from '../components/SwitchButton';
import PopUp from '../components/PopUp';

import BackgroundBarImg from '../assets/pictures/bar/bookingBG.jpg';
import { submitForm } from '../utils/submitForm';

import './booking.css';

const PACKAGE_OPTIONS = [
  'Essential',
  'Essential Plus',
  'Premium',
  'Experience',
  'Nightlife',
];

const BookingBox = () => {
  const { t } = useTranslation();

  const EVENT_TYPE_OPTIONS = [
    t('eventTypeConcert'),
    t('eventTypeTheater'),
    t('eventTypeParty'),
    t('eventTypeLecture'),
    t('eventTypeFilm'),
  ];

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

  const ORGANIZATION_OPTIONS = [
    t('organizationVUB'),
    t('organizationCompany'),
    t('organizationNonProfit'),
    t('organizationIndividual'),
  ];

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

    const success = await submitForm(
      formData,
      'template_9r3nzs6',
      hasTechnical
    );

    if (success) {
      setFormData(initialFormState);
      setShowPopUp(true);
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <section className="booking-section">
      {showPopUp && (
        <PopUp
          title={t('bookingPopUpTitle')}
          text={t('bookingPopUpText')}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <img src={BackgroundBarImg} alt="" />
      <h1 className="booking-title">{t('bookingTitle')}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          title={t('bookingFirstName')}
          placeholder={t('bookingFirstName')}
          type="text"
          value={formData.firstName}
          onChange={(value) => updateFormData('firstName', value)}
          required
        />
        <Input
          title={t('bookingLastName')}
          placeholder={t('bookingLastName')}
          type="text"
          value={formData.lastName}
          onChange={(value) => updateFormData('lastName', value)}
          required
        />
        <Input
          title={t('bookingEmail')}
          placeholder={t('bookingEmail')}
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
          title={t('bookingCompanyName')}
          placeholder={t('bookingCompanyName')}
          type="text"
          value={formData.companyName}
          onChange={(value) => updateFormData('companyName', value)}
        />
        <Input
          title={t('bookingBillingAddress')}
          placeholder={t('bookingBillingAddress')}
          type="text"
          value={formData.billingAddress}
          onChange={(value) => updateFormData('billingAddress', value)}
          required
        />
        <Select
          title={t('bookingOrganizationType')}
          optionsList={ORGANIZATION_OPTIONS}
          value={formData.organization}
          onChange={(value) => updateFormData('organization', value)}
          required
        />

        <div className="dates-container">
          <div className="date-input-wrapper">
            <Input
              title={t('bookingDesiredDate')}
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
              title={`${t('bookingAlternativeDate')} ${index + 1}`}
              value={date}
              onChange={(value) => updateDate(index + 1, value)}
            />
          ))}
        </div>

        <Input
          title={t('bookingEventName')}
          placeholder={t('bookingEventName')}
          type="text"
          value={formData.eventName}
          onChange={(value) => updateFormData('eventName', value)}
          required
        />

        <Textarea
          title={t('bookingEventDescription')}
          placeholder={t('bookingEventDescription')}
          value={formData.eventDescription}
          onChange={(value) => updateFormData('eventDescription', value)}
          required
        />

        <Select
          title={t('bookingPackage')}
          optionsList={PACKAGE_OPTIONS}
          value={formData.package}
          onChange={(value) => updateFormData('package', value)}
          required
        />

        {formData.package && (
          <Select
            title={t('bookingEventType')}
            optionsList={filteredEventTypes}
            value={formData.eventType}
            onChange={(value) => updateFormData('eventType', value)}
            required
          />
        )}

        {(formData.package == 'Essential Plus' ||
          formData.package == 'Premium') && (
          <SwitchButton
            title={t('bookingUseBar')}
            name="bar-option"
            value={formData.hasBar}
            onChange={(value) => updateFormData('hasBar', value)}
          />
        )}

        <span>{t('bookingTimeSpan')}</span>
        <div className="duration-container">
          <div className="duration-subcontainer">
            <Input
              title={t('bookingFrom')}
              type="number"
              min="0"
              max="23"
              className="duration"
              value={formData.startHour}
              onChange={(value) => updateFormData('startHour', Number(value))}
            />
            <Input
              title={t('bookingColon')}
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
              title={t('bookingTo')}
              type="number"
              min="0"
              max="23"
              className="duration"
              value={formData.endHour}
              onChange={(value) => updateFormData('endHour', Number(value))}
            />
            <Input
              title={t('bookingColon')}
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
          <span className="error-msg">{t('bookingDurationError')}</span>
        )}
        <Input
          title={t('bookingMaxVisitors')}
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
              title={t('bookingBoxTechnicalContact')}
              name="different-contact-person"
              value={hasTechnical}
              onChange={(value) => setHasTechnical(value)}
            />
            {!hasTechnical && (
              <>
                <Input
                  title={t('bookingFirstName')}
                  placeholder={t('bookingFirstName')}
                  type="text"
                  value={formData.firstNameTech}
                  onChange={(value) => updateFormData('firstNameTech', value)}
                />
                <Input
                  title={t('bookingLastName')}
                  placeholder={t('bookingLastName')}
                  type="text"
                  value={formData.lastNameTech}
                  onChange={(value) => updateFormData('lastNameTech', value)}
                />
                <Input
                  title={t('bookingEmail')}
                  placeholder={t('bookingEmail')}
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
          title={t('bookingSubmit')}
          className="booking-button"
          isLightBg
          isSubmit
          disabled={!isFormValid()}
        />
      </form>
    </section>
  );
};

export default BookingBox;

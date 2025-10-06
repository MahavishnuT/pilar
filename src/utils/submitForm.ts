import type { BookingForm } from '../utils/types/bookingForm';
import emailjs from '@emailjs/browser';

export const submitForm = async (
  formData: BookingForm,
  template: string,
  hasTechnical?: boolean
): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      'service_0xqvkul',
      template,
      {
        from_name: `${formData.firstName
          .charAt(0)
          .toUpperCase()}${formData.firstName.slice(1)} ${formData.lastName
          .charAt(0)
          .toUpperCase()}${formData.lastName.slice(1)}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        billing_address: formData.billingAddress,
        organization: formData.organization,
        dates: formData.dates.filter((date) => date).join(', '),
        event_name: formData.eventName,
        event_description: formData.eventDescription,
        package_type: formData.package,
        event_type: formData.eventType,
        has_bar: formData.hasBar ? 'Oui' : 'Non',
        start_time: `${String(formData.startHour).padStart(2, '0')}:${String(
          formData.startMinute
        ).padStart(2, '0')}`,
        end_time: `${String(formData.endHour).padStart(2, '0')}:${String(
          formData.endMinute
        ).padStart(2, '0')}`,
        visitors: formData.visitors,
        technical_contact: hasTechnical
          ? 'Zelfde contactpersoon'
          : 'Verschillend',
        tech_name: hasTechnical
          ? ''
          : formData.firstNameTech + ' ' + formData.lastNameTech,
        tech_email: hasTechnical ? '' : formData.emailTech,
        tech_phone: hasTechnical ? '' : formData.phoneTech,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

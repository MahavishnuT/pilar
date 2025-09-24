export interface BookingForm {
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
  firstNameTech?: string;
  lastNameTech?: string;
  emailTech?: string;
  phoneTech?: string;
}

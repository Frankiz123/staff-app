import { Moment } from 'moment';

export type IBookingClient = {
  id: string;
  avatar: string;
  name: string;
  surname: string;
  phone: string;
};

export type AppointmentType = 'service' | 'course' | 'membership';

export type IBookingService = {
  id: string;
  category_title: string;
  service_title: string;
  price: string;
  open_price_enabled: string;
  duration: number;
};

export type IBookingStaff = { id: string; full_name: string };

export type IBookingCourse = {
  id: string;
  session_no: string;
  title: string;
  course_installments_total: string;
  client_course_sid: string;
  duration: number;
  price: string;
};

export type BookingTypes =
  | 'booked'
  | 'confirmed'
  | 'arrived'
  | 'being_seen'
  | 'completed'
  | 'paid'
  | 'check'
  | 'no_show'
  | 'no_sale'
  | 'canceled'
  | 'pending_confirmation';

export type IBookingProduct = {
  id: string;
  title: string;
  price: number;
};

export type ICurrentBooking = {
  id?: string;
  client: IBookingClient | null;
  appointmentType: AppointmentType;
  staff: IBookingStaff | null;
  staffAppointments: Array<any>;
  staffAvailability: { time_in_set: string; time_out_set: string };
  date: Date;
  status: BookingTypes;
  duration: { value: number; label: string };
  notes: string;
  services: Array<IBookingService>;
  courses: Array<IBookingCourse>;
  total: number;
  insideBusyIntervals: { nextFreeTime: Moment; isBusyInterval: boolean };
  insideShift: boolean;
  products: Array<IBookingProduct>;
  alreadyBookedIntervalModalVisible?: boolean;
};

export type ICancellFeeType = {
  id: string;
  name: string;
  hours: string;
  value: string;
  type: string;
};
export interface CurrentBookingState {
  error: any;
  loading: boolean;
  booking: ICurrentBooking;
  cancellationFees: Array<ICancellFeeType>;
  selectedCancellationFees: ICancellFeeType;
}

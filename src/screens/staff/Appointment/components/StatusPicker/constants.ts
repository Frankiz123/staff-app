export const STATUS_LIST = [
  { value: 'booked', label: 'Booked' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'arrived', label: 'Arrived' },
  { value: 'being_seen', label: 'Being Seen' },
  { value: 'completed', label: 'Completed' },
  { value: 'paid', label: 'Checked out' },
  { value: 'check', label: 'Check' },
  { value: 'no_show', label: 'No-show' },
  { value: 'no_sale', label: 'No-sale' },
];

export const STATUS_LIST_LABELS = {
  booked: 'Booked',
  confirmed: 'Confirmed',
  arrived: 'Arrived',
  being_seen: 'Being Seen',
  completed: 'Completed',
  paid: 'Checked out',
  check: 'Check',
  no_show: 'No-show',
  no_sale: 'No-sale',
};

export type AppointmentStatuses =
  | 'booked'
  | 'confirmed'
  | 'arrived'
  | 'being_seen'
  | 'completed'
  | 'paid'
  | 'check'
  | 'no_show'
  | 'no_sale';

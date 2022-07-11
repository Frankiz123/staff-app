export type IBusyTimeStaff = {
  id: any;
  full_name: any;
};

export type IbusyTime = {
  clientId: any;
  time: any;
  date: any;
  staff: IBusyTimeStaff | null;
  staffAppointments: any;
  staffAvailability: any;
  duration: { value: number; label: string };
  notes: string;
  type: string;
  status: string;
  salon_id: any;
  insideBusyIntervals: any;
  insideShift: any;
};

export interface BusyTimeState {
  error: any;
  loading: boolean;
  lastCreatedOrUpdatedBooking: any;
  busytime: IbusyTime;
}

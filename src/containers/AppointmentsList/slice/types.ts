export interface AppointmentsListState {
  loading: boolean;
  error: any;
  appointmentsList: Array<any>;
  selectedDate: Date;
  calendarInterval: { start: Date; end: Date };
}

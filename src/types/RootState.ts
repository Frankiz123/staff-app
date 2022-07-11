import { AppointmentsListState } from 'containers/AppointmentsList/slice/types';
import { TaskListState } from 'containers/TaskList/slice/types';
import { AuthHelperState } from 'containers/AuthHelper/slice/types';
import { NewsFeedState } from 'containers/NewsFeed/slice/types';
import { StaffListState } from 'containers/StaffList/slice/types';
import { CurrencyHelperState } from 'containers/CurrencyHelper/slice/types';
import { ClientsListState } from 'containers/ContactsList/slice/types';
import { ServicesListState } from 'containers/servicesList/slice/types';
import { CoursesListState } from 'containers/CoursesList/slice/types';
import { CurrentBookingState } from 'containers/currentBooking/slice/types';
import { NewClientState } from 'containers/NewClient/slice/types';
import { BookingDetailsState } from 'containers/BookingDetails/slice/types';
import { ProductsListState } from 'containers/ProductsList/slice/types';
import { PaymentsState } from 'containers/Payments/slice/types';
import { CurrentClientState } from 'containers/CurrentClient/slice/types';
import { TaskAndNotesListState } from 'containers/TaskAndNotes/slice/types';
import { CurrentTaskState } from 'containers/CurrentTask/slice/types';
import { BusyTimeState } from 'containers/BusyTime/slice/types';

export interface RootState {
  appointmentsList: AppointmentsListState;
  authHelper: AuthHelperState;
  staffList: StaffListState;
  newsFeed: NewsFeedState;
  taskList: TaskListState;
  taskAndNotesList: TaskAndNotesListState;
  currencyHelper: CurrencyHelperState;
  clientsList: ClientsListState;
  servicesList: ServicesListState;
  coursesList: CoursesListState;
  currentBooking: CurrentBookingState;
  newClientState: NewClientState;
  bookingDetails: BookingDetailsState;
  productsList: ProductsListState;
  payments: PaymentsState;
  currentClient: CurrentClientState;
  currentTask: CurrentTaskState;
  busyTime: BusyTimeState;
}

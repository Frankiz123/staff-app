import {
  IBookingClient,
  IBookingStaff,
} from 'containers/currentBooking/slice/types';

export type ITaskType = 'Email' | 'Call' | 'Task' | 'Meeting';
export type ICurrentTask = {
  client: IBookingClient | null;
  staff: IBookingStaff | null;
  date: Date;
  dueDate: Date;
  reminderDate: Date;
  title: string;
  details: string;
  taskType: ITaskType;
};

export interface CurrentTaskState {
  error: any;
  loading: boolean;
  task: ICurrentTask;
}

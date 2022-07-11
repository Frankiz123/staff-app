import { selectBooking } from 'containers/BookingDetails/slice/selectors';
import { format } from 'date-fns';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DURATIONS } from 'screens/staff/Appointment/components/DurationPicker/constants';
import useCurrentBookingSlice from './slice';
import {
  getStaffAppointmentAction,
  getStaffAvailabilityAction,
  initiateBookingAction,
} from './slice/actions';
import { selectDate, selectStaff } from './slice/selectors';

const CurrentBookingContainer: React.FC<ICurrentBookingContainerProps> = ({
  actionType = 'add',
}) => {
  useCurrentBookingSlice();
  const dispatch = useDispatch();
  const staff = useSelector(selectStaff);
  const date = useSelector(selectDate);
  const booking = useSelector(selectBooking);

  useEffect(() => {
    booking &&
      actionType == 'update' &&
      dispatch(
        initiateBookingAction(
          {
            id: booking.id,
            products: [],
            client: {
              id: booking.client_id,
              avatar: booking.client_avatar,
              name: booking.client_name,
              surname: booking.client_surname,
              phone: booking.client_email,
            },
            staff: {
              id: booking.staff,
              full_name: booking.staff_nickname,
            },
            appointmentType: 'service',
            staffAppointments: [],
            staffAvailability: {
              time_in_set: '00:00.00',
              time_out_set: '23:59:59',
            },
            status: booking.status,
            date: moment(booking.date + ' ' + booking.time).toDate(),
            duration: {
              value: booking.duration,
              label:
                DURATIONS.find((duration) => duration.value == booking.duration)
                  ?.label || '0min',
            },
            notes: booking.notes,
            services: booking.services.map((service: any) => {
              return {
                id: service.service_id,
                category_title: '',
                service_title: service.title,
                price: service.price,
                open_price_enabled: '0',
                duration: service.duration,
              };
            }),
            courses: booking.course,
            total: 0,
            insideBusyIntervals: {
              nextFreeTime: moment(),
              isBusyInterval: false,
            },
            insideShift: false,
          },
          2,
        ),
      );
  }, [booking]);

  useEffect(() => {
    staff &&
      dispatch(
        getStaffAppointmentAction({
          staff_id: staff.id,
          from_days: format(date, 'yyyy-MM-dd'),
          to_days: format(date, 'yyyy-MM-dd'),
        }),
      );
    staff &&
      dispatch(
        getStaffAvailabilityAction({
          staff_id: staff.id,
          date: format(date, 'yyyy-MM-dd'),
        }),
      );
  }, [staff, date]);
  return <></>;
};

export type ActionType = 'add' | 'update';
export interface ICurrentBookingContainerProps {
  actionType?: ActionType;
}
export default CurrentBookingContainer;

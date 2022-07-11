import moment from 'moment';
import { DURATIONS } from 'screens/staff/Appointment/components/DurationPicker/constants';
import { CurrentBookingState, IBookingCourse, IBookingService } from './types';

export const calculateDuration = (draft: CurrentBookingState) => {
  switch (draft.booking.appointmentType) {
    case 'service':
      const value1 = draft.booking.services.reduce(
        (acc: number, service: IBookingService) =>
          acc + parseInt(service.duration + ''),
        0,
      );
      return {
        value: value1,
        label:
          DURATIONS.find((duration) => duration.value == value1)?.label ||
          '0min',
      };
    case 'course':
      const value = draft.booking.courses.reduce(
        (acc: number, course: IBookingCourse) =>
          acc + parseInt(course.duration + ''),
        0,
      );
      return {
        value,
        label:
          DURATIONS.find((duration) => duration.value == value)?.label ||
          '0min',
      };
  }
  return draft.booking.duration;
};

export const isDateInsideShift = (draft: CurrentBookingState) => {
  return moment(draft.booking.date).isBetween(
    moment(draft.booking.staffAvailability.time_in_set, 'hh:mm:ss').set({
      y: draft.booking.date.getFullYear(),
      M: draft.booking.date.getMonth(),
      d: draft.booking.date.getDay(),
    }),
    moment(draft.booking.staffAvailability.time_out_set, 'hh:mm:ss').set({
      y: draft.booking.date.getFullYear(),
      M: draft.booking.date.getMonth(),
      d: draft.booking.date.getDay(),
    }),
  );
};
export const isInsideBusyIntervals = (draft: CurrentBookingState) => {
  return (
    draft.booking.staffAppointments.map((ap) => {
      const intervalStart = moment(ap.date + ' ' + ap.time).format();
      return {
        intervalStart,
        intervalEnd: moment(intervalStart).add(ap.duration, 'minutes').format(),
      };
    }) || []
  ).reduce(
    (acc: any, interval: any) => {
      if (
        moment(draft.booking.date).isBetween(
          interval.intervalStart,
          interval.intervalEnd,
        )
      ) {
        acc.isBusyInterval = true;
        acc.nextFreeTime = moment(interval.intervalEnd).add(5, 'minutes');
      }
      return acc;
    },
    { nextFreeTime: moment(), isBusyInterval: false },
  );
};
export const getTotal = (draft: CurrentBookingState) => {
  return (
    (draft.booking.appointmentType === 'service'
      ? draft.booking.services.reduce(
          (acc, service) => acc + parseInt(service?.price),
          0,
        )
      : draft.booking.appointmentType === 'course'
      ? draft.booking.courses.reduce(
          (acc, course) =>
            acc +
            parseInt(
              course.course_installments_total
                ? course.course_installments_total
                : course.price,
            ),
          0,
        )
      : 0) +
    draft.booking.products.reduce(
      (acc, product) => acc + parseInt(product.price + ''),
      0,
    )
  );
};

import moment from 'moment';
import { DURATIONS } from 'containers/BusyTime/components/DurationPicker/constants';
import { BusyTimeState } from 'containers/BusyTime/slice/types';

export const isDateInsideShift = (draft: BusyTimeState) => {
  return moment(draft.busytime.date).isBetween(
    moment(draft.busytime.staffAvailability.time_in_set, 'hh:mm:ss').set({
      y: draft.busytime.date.getFullYear(),
      M: draft.busytime.date.getMonth(),
      d: draft.busytime.date.getDay(),
    }),
    moment(draft.busytime.staffAvailability.time_out_set, 'hh:mm:ss').set({
      y: draft.busytime.date.getFullYear(),
      M: draft.busytime.date.getMonth(),
      d: draft.busytime.date.getDay(),
    }),
  );
};
export const isInsideBusyIntervals = (draft: BusyTimeState) => {
  return (
    draft.busytime.staffAppointments.map((ap: any) => {
      const intervalStart = moment(ap.date + ' ' + ap.time).format();
      return {
        intervalStart,
        intervalEnd: moment(intervalStart).add(ap.duration, 'minutes').format(),
      };
    }) || []
  ).reduce(
    (acc: any, interval: any) => {
      if (
        moment(draft.busytime.date).isBetween(
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

/*
 *
 * AlertsProvider reducer
 *
 */

import produce from 'immer';
import shortid from 'shortid';
import { CLOSE_ALERT, SHOW_ALERT } from './constants';

export const initialState = {
  alerts: {
    bottom: [
      // {
      //   message:
      //     'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world ',
      //   duration: 1000,
      //   gravity: 'bottom',
      //   actions: [{ label: 'Hi', onPress: () => console.log('Hi') }],
      //   id: shortid.generate(),
      // },
    ],
    top: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const alertsProviderReducer = produce((draft, action) => {
  switch (action.type) {
    case CLOSE_ALERT:
      draft.alerts[action.payload?.gravity] = draft.alerts[
        action.payload?.gravity
      ]?.filter((alert: any) => alert.id !== action.payload?.alertId);
      break;

    case SHOW_ALERT:
      const newAlert = {
        ...action.payload,
        id: shortid.generate(),
      };
      action.payload.gravity === 'top'
        ? draft.alerts[action.payload.gravity].push(newAlert)
        : draft.alerts[action.payload.gravity].unshift(newAlert);
      break;
  }
}, initialState);

export default alertsProviderReducer;

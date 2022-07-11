import produce from 'immer';

import reducer, { initialState } from '../reducer';

import {
  getAppointmentsAction,
  getAppointmentsSuccessAction,
  getAppointmentsErrorAction,
} from '../actions';

import { TeamPlanningState } from '../types';

describe('TeamPlanningList reducer', () => {
  let state: any;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initialState', () => {
    const expectedResult = initialState;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  describe('getAppointments actions', () => {
    it('should handle the getAppointmentsAction correctly', () => {
      const expectedResult = produce(state, (draft: TeamPlanningState) => {
        draft.loading = true;
      });

      expect(reducer(state, getAppointmentsAction({}))).toEqual(expectedResult);
    });

    it('should handle the getAppointmentsSuccessAction correctly', () => {
      const data = [{}];

      const expectedResult = produce(state, (draft: TeamPlanningState) => {
        draft.loading = false;
        draft.teamPlanningList = data;
      });

      expect(reducer(state, getAppointmentsSuccessAction(data))).toEqual(
        expectedResult,
      );
    });

    it('should handle the getAppointmentsErrorAction correctly', () => {
      const error = new Error('error message');
      const expectedResult = produce(state, (draft: TeamPlanningState) => {
        draft.loading = false;
        draft.error = error;
      });

      expect(reducer(state, getAppointmentsErrorAction(error))).toEqual(
        expectedResult,
      );
    });
  });
});

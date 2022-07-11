/*
 *
 * ServicesList reducer
 *
 */

import produce from 'immer';
import {
  GET_SERVICES,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_ERROR,
  TOGGLE_SERVICES,
} from './constants';
import { ServicesListState } from './types';

export const initialState: ServicesListState = {
  loading: false,
  error: false,
  servicesList: [],
};

/* eslint-disable default-case, no-param-reassign */
const servicesListReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_SERVICES:
      draft.loading = true;
      draft.servicesList = [];
      break;
    case GET_SERVICES_SUCCESS:
      draft.loading = false;
      draft.servicesList = action.servicesList
        .filter(
          (service: any) =>
            service?.category_data?.is_deleted != '1' &&
            service?.is_deleted != '1',
        )
        .reduce((acc: any, service: any) => {
          const index = acc.findIndex(
            (section: any) => section.section_title === service.section_title,
          );
          if (index == -1) {
            acc.push({
              title: `${service.section_title} | ${service.category_title}`,
              section_title: service.section_title,
              category_title: service.category_title,
              dataShown: false,
              data: [service],
            });
          } else {
            acc[index].data.push(service);
          }
          return acc;
        }, []);
      break;
    case GET_SERVICES_ERROR:
      draft.loading = false;
      draft.error = action.error;
      break;
    case TOGGLE_SERVICES:
      draft.servicesList = draft.servicesList.map((serviceSection) =>
        serviceSection.title == action.title
          ? { ...serviceSection, dataShown: !serviceSection.dataShown }
          : serviceSection,
      );
      break;
  }
}, initialState);

export default servicesListReducer;

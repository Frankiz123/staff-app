/**
 *
 */

import { translate } from 'i18n';
import moment from 'moment';
import messages from './messages';

export const dataArray = [
  { title: 'Open', content: 'open' },
  { title: 'Overdue', content: 'overdue' },
  { title: 'Completed', content: 'completed' },
  { title: 'Deleted', content: 'deleted' },
];

export const COLUMNS: Array<{
  name: string;
  filters: {
    status: string;
    due_to?: string;
    due_from?: string;
    is_deleted?: number;
  };
}> = [
  {
    name: translate(messages.open.scope, messages.open.options),
    filters: {
      status: 'incomplete',
    },
  },
  {
    name: translate(messages.dueToday.scope, messages.dueToday.options),
    filters: {
      status: 'incomplete',
      due_to: moment().format('YYYY-MM-DD'),
      due_from: moment().format('YYYY-MM-DD'),
    },
  },
  {
    name: translate(messages.dueThisWeek.scope, messages.dueThisWeek.options),
    filters: {
      status: 'incomplete',
      due_to: moment().endOf('week').format('YYYY-MM-DD'),
      due_from: moment().startOf('week').format('YYYY-MM-DD'),
    },
  },
  {
    name: translate(messages.overdue.scope, messages.overdue.options),
    filters: {
      status: 'incomplete',
      due_to: moment().subtract(1, 'day').format('YYYY-MM-DD'),
    },
  },
  {
    name: translate(messages.completed.scope, messages.completed.options),
    filters: {
      status: 'complete',
    },
  },
  {
    name: translate(messages.deleted.scope, messages.deleted.options),
    filters: {
      status: '',
      is_deleted: 1,
    },
  },
];

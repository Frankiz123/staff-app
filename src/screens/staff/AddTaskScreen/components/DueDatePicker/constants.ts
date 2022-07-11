import { translate } from 'i18n';
import { DurationInputArg2 } from 'moment';
import messages from '../../messages';

export const DATES: Array<{
  name: string;
  unit: DurationInputArg2;
  offset: number;
}> = [
  {
    name: translate(messages.today.scope, messages.today.options),
    unit: 'days',
    offset: 0,
  },
  {
    name: translate(messages.tomorrow.scope, messages.tomorrow.options),
    unit: 'days',
    offset: 1,
  },
  {
    name: `2 ${translate(messages.days.scope, messages.days.options)}`,
    unit: 'days',
    offset: 2,
  },
  {
    name: `1 ${translate(messages.week.scope, messages.week.options)}`,
    unit: 'weeks',
    offset: 1,
  },
  {
    name: `1 ${translate(messages.month.scope, messages.month.options)}`,
    unit: 'months',
    offset: 1,
  },
];

import { translate } from 'i18n';
import messages from '../../messages';

export const APPOINTMENT_TYPES = [
  {
    value: 'service',
    label: translate(messages.services.scope, messages.services.options),
  },
  {
    value: 'course',
    label: translate(messages.packages.scope, messages.packages.options),
  },
  // {
  //   value: 'membership',
  //   label: translate(messages.memberships.scope, messages.memberships.options),
  // },
];

export const APPOINTMENT_TYPES_LABELS = {
  service: translate(messages.services.scope, messages.services.options),
  course: translate(messages.packages.scope, messages.packages.options),
  membership: translate(
    messages.memberships.scope,
    messages.memberships.options,
  ),
};

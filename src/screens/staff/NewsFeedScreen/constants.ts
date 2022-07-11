import { translate } from 'i18n';
import { NewsFeedTypes } from 'containers/NewsFeed/slice/types';
import messages from './messages';

export const FILTERS: { name: string; value: NewsFeedTypes }[] = [
  { name: translate(messages.all.scope, messages.all.options), value: 'all' },
  {
    name: translate(messages.booked.scope, messages.booked.options),
    value: 'new_booking',
  },
  {
    name: translate(messages.sentSMS.scope, messages.sentSMS.options),
    value: 'sent_sms',
  },
  {
    name: translate(messages.recSMS.scope, messages.recSMS.options),
    value: 'sms_response',
  },
  {
    name: translate(messages.sentEmail.scope, messages.sentEmail.options),
    value: 'sent_email',
  },
  {
    name: translate(messages.recEmail.scope, messages.recEmail.options),
    value: 'email_response',
  },
  {
    name: translate(messages.consent.scope, messages.consent.options),
    value: 'consent_form_added',
  },
  {
    name: translate(messages.issued.scope, messages.issued.options),
    value: 'new_bill',
  },
  {
    name: translate(messages.clinicNote.scope, messages.clinicNote.options),
    value: 'clinic_note_added',
  },
  {
    name: translate(messages.resized.scope, messages.resized.options),
    value: 'booking_resized',
  },
  {
    name: translate(messages.rescheduled.scope, messages.rescheduled.options),
    value: 'booking_rescheduled',
  },
  {
    name: translate(messages.changed.scope, messages.changed.options),
    value: 'booking_status_changed',
  },
  {
    name: translate(messages.cancel.scope, messages.cancel.options),
    value: 'booking_canceled',
  },
  {
    name: translate(messages.ordered.scope, messages.ordered.options),
    value: 'new_course',
  },
  {
    name: translate(messages.bodyComp.scope, messages.bodyComp.options),
    value: 'new_body_composition_record',
  },
  {
    name: translate(
      messages.bodyTreatment.scope,
      messages.bodyTreatment.options,
    ),
    value: 'new_body_treatment_record',
  },
  {
    name: translate(messages.deposited.scope, messages.deposited.options),
    value: 'balance_add',
  },
  {
    name: translate(messages.withdrawn.scope, messages.withdrawn.options),
    value: 'balance_use',
  },
  {
    name: translate(
      messages.createdMandate.scope,
      messages.createdMandate.options,
    ),
    value: 'dd_mandate_add',
  },
  {
    name: translate(
      messages.cancelledMandate.scope,
      messages.cancelledMandate.options,
    ),
    value: 'dd_mandate_cancelled',
  },
  {
    name: translate(
      messages.deletedMandate.scope,
      messages.deletedMandate.options,
    ),
    value: 'dd_mandate_deleted',
  },
  {
    name: translate(messages.addedPayment.scope, messages.addedPayment.options),
    value: 'dd_payment_add',
  },
];

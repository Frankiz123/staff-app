export type NewsFeedTypes =
  | 'all'
  | 'new_booking'
  | 'sent_sms'
  | 'sms_response'
  | 'sent_email'
  | 'email_response'
  | 'consent_form_added'
  | 'new_bill'
  | 'clinic_note_added'
  | 'booking_resized'
  | 'booking_rescheduled'
  | 'booking_status_changed'
  | 'booking_canceled'
  | 'new_course'
  | 'new_body_composition_record'
  | 'new_body_treatment_record'
  | 'balance_add'
  | 'balance_use'
  | 'dd_mandate_add'
  | 'dd_mandate_cancelled'
  | 'dd_mandate_deleted'
  | 'dd_payment_add';

type IscreenPayload = {
  data: Array<any>;
  page: number;
};
export interface NewsFeedState {
  error: Map<NewsFeedTypes, any>;
  loading: Map<NewsFeedTypes, boolean>;
  newsFeed: {
    all: IscreenPayload;
    new_booking: IscreenPayload;
    sent_sms: IscreenPayload;
    sms_response: IscreenPayload;
    sent_email: IscreenPayload;
    email_response: IscreenPayload;
    consent_form_added: IscreenPayload;
    new_bill: IscreenPayload;
    clinic_note_added: IscreenPayload;
    booking_resized: IscreenPayload;
    booking_rescheduled: IscreenPayload;
    booking_status_changed: IscreenPayload;
    booking_canceled: IscreenPayload;
    new_course: IscreenPayload;
    new_body_composition_record: IscreenPayload;
    new_body_treatment_record: IscreenPayload;
    balance_add: IscreenPayload;
    balance_use: IscreenPayload;
    dd_mandate_add: IscreenPayload;
    dd_mandate_cancelled: IscreenPayload;
    dd_mandate_deleted: IscreenPayload;
    dd_payment_add: IscreenPayload;
  };
}

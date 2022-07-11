import { NewsFeedTypes } from 'containers/NewsFeed/slice/types';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ViewProps,
} from 'react-native';
import JSONTree from 'react-native-json-tree';
import NewBooking from './NewBooking';
import SentSms from './SentSms';
import SentEmail from './SentEmail';
import NewBill from './NewBill';
import AddedPayment from './AddedPayment';
import SMSResponse from './SMSResponse';
import ClinicNoteAdded from './ClinicNoteAdded';
import BookingRescheduled from './BookingRescheduled';
import BookingStatusChanged from './BookingStatusChanged';
import BookingCanceled from './BookingCanceled';
import ConsentFormAdded from './ConsentFormAdded';
import NewCourse from './NewCourse';
import BalanceAdd from './BalanceAdd';
import BalanceUse from './BalanceUse';
import EmailResponse from './EmailResponse';
import NewBodyCompositionRecord from './NewBodyCompositionRecord';
import NewBodyTreatmentRecord from './NewBodyTreatmentRecord';
import MandateAdded from './MandateAdded';
import MandateCancelled from './MandateCancelled';
import MandateDeleted from './MandateDeleted';

const COMPONENTS_MAP = (type: NewsFeedTypes) => {
  return {
    all: () => <></>,
    new_booking: NewBooking,
    sent_sms: SentSms,
    sent_email: SentEmail,
    new_bill: NewBill,
    sms_response: SMSResponse,
    clinic_note_added: ClinicNoteAdded,
    booking_resized: BookingRescheduled,
    booking_rescheduled: BookingRescheduled,
    booking_status_changed: BookingStatusChanged,
    booking_canceled: BookingCanceled,
    consent_form_added: ConsentFormAdded,
    new_course: NewCourse,
    dd_payment_add: AddedPayment,
    email_response: EmailResponse,
    new_body_composition_record: NewBodyCompositionRecord,
    new_body_treatment_record: NewBodyTreatmentRecord,
    balance_add: BalanceAdd,
    balance_use: BalanceUse,
    dd_mandate_add: MandateAdded,
    dd_mandate_cancelled: MandateCancelled,
    dd_mandate_deleted: MandateDeleted,
  }[type];
};

const BaseNewsFeedComponent: React.FC<IBaseNewsFeedComponentProps> = ({
  NewsFeedType,
  ...props
}) => {
  const CustomComponent = COMPONENTS_MAP(NewsFeedType);
  return <CustomComponent {...props} />;
};
export interface IBaseNewsFeedComponentProps extends ViewProps {
  NewsFeedType: NewsFeedTypes;
  item: any;
}
export default BaseNewsFeedComponent;

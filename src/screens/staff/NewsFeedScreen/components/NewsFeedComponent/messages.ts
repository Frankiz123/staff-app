export const scope = 'app.screen.newsFeed.newsFeedTypes';

const messages = {
  fromStaff: {
    scope: `${scope}.fromStaff`,
    options: {
      defaultValue: 'From staff: ',
    },
  },
  toStaff: {
    scope: `${scope}.toStaff`,
    options: {
      defaultValue: 'To staff: ',
    },
  },
  bookingRescheduled: {
    scope: `${scope}.bookingRescheduled`,
    options: {
      defaultValue: 'Booking Rescheduled',
    },
  },
  addedDirectDebitPayment: {
    scope: `${scope}.addedDirectDebitPayment`,
    options: {
      defaultValue: 'Added direct debit payment of',
    },
  },
  chargeDate: {
    scope: `${scope}.chargeDate`,
    options: {
      defaultValue: 'Charge date',
    },
  },
  paymentId: {
    scope: `${scope}.paymentId`,
    options: {
      defaultValue: 'Payment ID',
    },
  },
  description: {
    scope: `${scope}.description`,
    options: {
      defaultValue: 'Description',
    },
  },
  type: {
    scope: `${scope}.type`,
    options: {
      defaultValue: 'Type',
    },
  },
  status: {
    scope: `${scope}.status`,
    options: {
      defaultValue: 'Status',
    },
  },
  newBooking: {
    scope: `${scope}.newBooking`,
    options: {
      defaultValue: 'New Booking',
    },
  },
  bookingStatus: {
    scope: `${scope}.bookingStatus`,
    options: {
      defaultValue: 'Booking Status Changed',
    },
  },
  booked: {
    scope: `${scope}.booked`,
    options: {
      defaultValue: 'booked',
    },
  },
  rescheduled: {
    scope: `${scope}.rescheduled`,
    options: {
      defaultValue: 'rescheduled ',
    },
  },
  canceled: {
    scope: `${scope}.canceled`,
    options: {
      defaultValue: 'canceled ',
    },
  },
  appAt: {
    scope: `${scope}.appAt`,
    options: {
      defaultValue: 'appointment at',
    },
  },
  with: {
    scope: `${scope}.with`,
    options: {
      defaultValue: 'with',
    },
  },
  mins: {
    scope: `${scope}.mins`,
    options: {
      defaultValue: 'minutes',
    },
  },
  changedStatus: {
    scope: `${scope}.changedStatus`,
    options: {
      defaultValue: 'changed status to',
    },
  },
  newBill: {
    scope: `${scope}.newBill`,
    options: {
      defaultValue: 'New Bill',
    },
  },
  issue: {
    scope: `${scope}.issue`,
    options: {
      defaultValue: 'Issued receipt #',
    },
  },
  payment: {
    scope: `${scope}.payment`,
    options: {
      defaultValue: 'Payment method: ',
    },
  },
  location: {
    scope: `${scope}.location`,
    options: {
      defaultValue: 'Location: ',
    },
  },
  paid: {
    scope: `${scope}.paid`,
    options: {
      defaultValue: 'Paid: ',
    },
  },
  sentEmail: {
    scope: `${scope}.sentEmail`,
    options: {
      defaultValue: 'Sent Email',
    },
  },
  sentEmailTo: {
    scope: `${scope}.sentEmailTo`,
    options: {
      defaultValue: 'Email Sent To',
    },
  },
  receivedEmail: {
    scope: `${scope}.receivedEmail`,
    options: {
      defaultValue: 'received Email',
    },
  },
  receivedEmailFrom: {
    scope: `${scope}.receivedEmailFrom`,
    options: {
      defaultValue: 'Email Received From',
    },
  },
  from: {
    scope: `${scope}.from`,
    options: {
      defaultValue: 'From: ',
    },
  },
  subject: {
    scope: `${scope}.subject`,
    options: {
      defaultValue: 'Subject: ',
    },
  },
  to: {
    scope: `${scope}.to`,
    options: {
      defaultValue: 'To: ',
    },
  },
  message: {
    scope: `${scope}.message`,
    options: {
      defaultValue: 'Message: ',
    },
  },
  sentSms: {
    scope: `${scope}.sentSms`,
    options: {
      defaultValue: 'Sent SMS',
    },
  },
  sentSmsTo: {
    scope: `${scope}.sentSmsTo`,
    options: {
      defaultValue: 'Sent SMS to',
    },
  },
  receivedSms: {
    scope: `${scope}.receivedSms`,
    options: {
      defaultValue: 'Received SMS',
    },
  },
  receivedSmsTo: {
    scope: `${scope}.receivedSmsTo`,
    options: {
      defaultValue: 'Received SMS from',
    },
  },
  bookingID: {
    scope: `${scope}.bookingID`,
    options: {
      defaultValue: 'BOOKING ID#',
    },
  },
  onlineAct: {
    scope: `${scope}.onlineAct`,
    options: {
      defaultValue: 'Online Activity',
    },
  },
  noteAdded: {
    scope: `${scope}.noteAdded`,
    options: {
      defaultValue: 'Client Note Added',
    },
  },
  signedConsentForm: {
    scope: `${scope}.signedConsentForm`,
    options: {
      defaultValue: 'Client Signed Consent Form',
    },
  },
  newBodyCompositionRecord: {
    scope: `${scope}.newBodyCompositionRecord`,
    options: {
      defaultValue: 'New Body Composition Record',
    },
  },
  addedBodyComposition: {
    scope: `${scope}.addedBodyComposition`,
    options: {
      defaultValue: 'Added New Body Composition Record',
    },
  },
  addedDirectDebiteMandate: {
    scope: `${scope}.addedDirectDebiteMandate`,
    options: {
      defaultValue: 'Created Direct Debit Mandate',
    },
  },
  cancelledDirectDebiteMandate: {
    scope: `${scope}.cancelledDirectDebiteMandate`,
    options: {
      defaultValue: 'Cancelled Direct Debit Mandate',
    },
  },
  deletedDirectDebiteMandate: {
    scope: `${scope}.deletedDirectDebiteMandate`,
    options: {
      defaultValue: 'Deleted Direct Debit Mandate',
    },
  },
  newBodyTreatmentRecord: {
    scope: `${scope}.newBodyTreatmentRecord`,
    options: {
      defaultValue: 'New Body Treatment Record',
    },
  },
  addedBodyTreatment: {
    scope: `${scope}.addedBodyTreatment`,
    options: {
      defaultValue: 'Added New Body Treatment Record',
    },
  },
  orderedNewSessionCourse: {
    scope: `${scope}.orderedNewSessionCourse`,
    options: {
      defaultValue: 'Ordered New Session Course',
    },
  },
  price: {
    scope: `${scope}.price`,
    options: {
      defaultValue: 'Price',
    },
  },
  nbrInstallment: {
    scope: `${scope}.nbrInstallment`,
    options: {
      defaultValue: 'Nr.Installments',
    },
  },
  nbrSessions: {
    scope: `${scope}.nbrSessions`,
    options: {
      defaultValue: 'Nr.Sessions',
    },
  },
  includingTax: {
    scope: `${scope}.includingTax`,
    options: {
      defaultValue: 'Incl.Tax',
    },
  },
  duration: {
    scope: `${scope}.duration`,
    options: {
      defaultValue: 'Duration',
    },
  },
  deposited: {
    scope: `${scope}.deposited`,
    options: {
      defaultValue: 'Deposited',
    },
  },
  withdrawn: {
    scope: `${scope}.withdrawn`,
    options: {
      defaultValue: 'Withdrawn',
    },
  },
  intoAccount: {
    scope: `${scope}.intoAccount`,
    options: {
      defaultValue: 'into account balance',
    },
  },
  fromAccount: {
    scope: `${scope}.fromAccount`,
    options: {
      defaultValue: 'from account balance',
    },
  },
  balanceBefore: {
    scope: `${scope}.balanceBefore`,
    options: {
      defaultValue: 'Balance before',
    },
  },
  balanceAfter: {
    scope: `${scope}.balanceAfter`,
    options: {
      defaultValue: 'Balance after',
    },
  },
};

export default messages;
